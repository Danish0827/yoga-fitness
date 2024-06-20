const express = require("express");
const app = express();
const pool = require("../config");
const cors = require("cors");
const authenticate = require("../lib");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.get("/getCourse", async (req, res) => {
  try {
    const { course_id } = req.query;

    // Check if ID is provided
    if (!course_id) {
      return res.status(400).json({
        status: true,
        message: "Please provide a valid course_id",
      });
    }

    let courseQuery = `SELECT * FROM courses WHERE course_id = $1`;
    let courseQueryParams = [parseInt(course_id)];

    // Query to fetch course details
    const courseResult = await pool.query(courseQuery, courseQueryParams);

    // Check if course with the provided ID exists
    if (courseResult.rows.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Course not found",
      });
    }

    // Fetch chapters related to the course
    let chaptersQuery = `SELECT * FROM chapters WHERE course_id = $1`;
    let chaptersQueryParams = [parseInt(course_id)];

    const chaptersResult = await pool.query(chaptersQuery, chaptersQueryParams);

    // Combine course and chapters data
    const courseData = courseResult.rows[0];
    courseData.chapters = chaptersResult.rows;

    // Return course details along with chapters
    return res.json({ status: true, result: courseData });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.get("/allcourses", async (req, res) => {
  const {
    page = 1,
    pageSize = 10,
    search = "",
    visibility = "all",
  } = req.query;

  try {
    const offset = (parseInt(page) - 1) * parseInt(pageSize);
    const searchQuery = `%${search}%`;

    let query, queryParams, countQuery, countQueryParams;

    if (visibility === "all") {
      query = `
          SELECT * FROM courses
          WHERE (title ILIKE $1 OR description ILIKE $1 )
          ORDER BY created_at DESC
          LIMIT $2 OFFSET $3
        `;
      queryParams = [searchQuery, parseInt(pageSize), offset];

      countQuery = `
          SELECT COUNT(*) FROM courses
          WHERE title ILIKE $1 OR description ILIKE $1  
        `;
      countQueryParams = [searchQuery];
    } else {
      query = `
          SELECT * FROM courses
          WHERE (title ILIKE $1 OR description ILIKE $1) AND visibility = $4
          ORDER BY created_at DESC
          LIMIT $2 OFFSET $3
        `;
      queryParams = [searchQuery, parseInt(pageSize), offset, visibility];

      countQuery = `
          SELECT COUNT(*) FROM courses
          WHERE (title ILIKE $1 OR description ILIKE $1) AND visibility = $2
        `;
      countQueryParams = [searchQuery, visibility];
    }

    const coursesResult = await pool.query(query, queryParams);
    const countResult = await pool.query(countQuery, countQueryParams);
    const totalcourses = parseInt(countResult.rows[0].count, 10);

    const totalPages = Math.ceil(totalcourses / parseInt(pageSize));

    res.json({
      courses: coursesResult.rows,
      totalcourses,
      totalPages,
      currentPage: parseInt(page),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Error..." });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "course_thumbnail") {
      callback(null, "./uploads/course_thumbnail");
    } else if (file.fieldname === "video_links") {
      callback(null, "./uploads/video_links");
    } else {
      callback(new Error("Invalid field name"), null);
    }
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${extension}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });

// Function to handle POST request to /addCourses
app.post(
  "/addCourses",
  upload.fields([
    { name: "course_thumbnail", maxCount: 1 },
    { name: "video_links", maxCount: 25 }, // Adjust maxCount as per your requirements
  ]),
  async (req, res) => {
    try {
      const { data, type, course_id = null } = req.body;
      const courseThumbnailFile = req.files["course_thumbnail"];
      const videoLinkFiles = req.files["video_links"];
      const parseData = JSON.parse(data);
      const {
        title,
        description,
        price,
        old_price = 0,
        duration = "",
        level = "",
        chapters,
        is_free = false,
        instructor = "By Shiv",
        visibility = false,
      } = parseData;
      const created_at = new Date().toISOString();
      const slug = title?.toLowerCase().replace(/ /g, "-");

      // Check if course with the same slug exists
      const checkCourseQuery = `
        SELECT * FROM courses WHERE slug = $1`;
      const checkCourseValues = [slug];
      const checkCourseResult = await pool.query(
        checkCourseQuery,
        checkCourseValues
      );

      if (checkCourseResult.rows.length > 0) {
        // If course exists and type is 'insert', return an error
        if (type === "insert") {
          return res.status(400).json({
            success: false,
            error: "Course with this slug already exists",
          });
        }
        // Otherwise, proceed to update
      }

      let courseId;

      // Insert or update course based on 'type'
      if (type === "insert") {
        const insertQuery = `
          INSERT INTO courses (title, description, price, old_price, duration, level, course_thumbnail, is_free, instructor, visibility, created_at, slug) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
          RETURNING course_id`;
        const insertValues = [
          title,
          description,
          price,
          old_price,
          duration,
          level,
          courseThumbnailFile?.[0]?.filename,
          is_free,
          instructor,
          visibility,
          created_at,
          slug,
        ];
        const insertResult = await pool.query(insertQuery, insertValues);
        courseId = insertResult.rows[0].course_id;
      } else if (type === "edit") {
        courseId = parseData.course_id; // Assuming courseId is passed in 'data'
        const updateQuery = `
          UPDATE courses 
          SET title = $1, description = $2, price = $3, old_price = $4, duration = $5, 
              level = $6, course_thumbnail = $7, is_free = $8, instructor = $9, 
              visibility = $10,  slug = $11
          WHERE course_id = $12`;

        const updateValues = [
          title,
          description,
          price,
          old_price,
          duration,
          level,
          courseThumbnailFile?.[0]?.filename,
          is_free,
          instructor,
          visibility,
          slug,
          courseId,
        ];

        await pool.query(updateQuery, updateValues);
      }

      const chapterQuery = `
        INSERT INTO chapters (title, description, course_id, created_at, slug, video_link)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *`;

      const chapterResults = [];

      for (const [index, chapter] of chapters.entries()) {
        const chapterSlug = chapter.title?.toLowerCase().replace(/ /g, "-");

        // Check if chapter with the same slug exists
        const checkChapterQuery = `
          SELECT * FROM chapters WHERE course_id = $1 AND slug = $2`;
        const checkChapterValues = [courseId, chapterSlug];
        const checkChapterResult = await pool.query(
          checkChapterQuery,
          checkChapterValues
        );

        if (checkChapterResult.rows.length > 0) {
          // If chapter exists and type is 'insert', skip it
          if (type === "insert") {
            console.log(
              `Chapter with slug ${chapterSlug} already exists, skipping...`
            );
            continue;
          }

          // Otherwise, update the existing chapter
          const updateChapterQuery = `
            UPDATE chapters 
            SET title = $1, description = $2, slug = $3, video_link = $4
            WHERE course_id = $5`;
          const updateChapterValues = [
            chapter.title,
            chapter.description,
            // created_at,
            chapterSlug,
            videoLinkFiles?.[index]?.filename || "", // Assign video link based on index
            courseId,
          ];
          await pool.query(updateChapterQuery, updateChapterValues);
        } else {
          // Insert new chapter
          const chapterValues = [
            chapter.title,
            chapter.description,
            courseId,
            created_at,
            chapterSlug,
            videoLinkFiles?.[index]?.filename || "", // Assign video link based on index
          ];
          const chapterResult = await pool.query(chapterQuery, chapterValues);
          chapterResults.push(chapterResult.rows[0]);
        }
      }

      console.log(chapterResults, "chapterResults");
      res.status(200).json({ data: chapterResults });
    } catch (error) {
      console.error("Error adding course:", error);
      res.status(500).json({ success: false, error: "Internal Error" });
    }
  }
);

module.exports = app;
