'use client';

import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Upload, message, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import PageHeaderWithBreadcrumb from '@/components/utils/pageHeaderwithBreadcrumb';
import { useRouter, useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const { Option } = Select;

const Blogs = () => {
    const [form] = Form.useForm();
    const search = useSearchParams();
    const id = search.get('id');
    const [mediaFileList, setMediaFileList] = useState([]);
    const [thumbnailFileList, setThumbnailFileList] = useState([]);
    const [long_desc, setDescription] = useState('');
    const [typeupload, setTypes] = useState([]);
    const [loader, setLoading] = useState(false);
    const [slug, setSlug] = useState('');

    const router = useRouter();
    useEffect(() => {
        if (id) {
            // Fetch the activity details by id and set the form values
            // Assuming fetchBlogs is a function to fetch activity details
            fetchBlogs(id).then((activity) => {
                console.log(activity, 'asas');
                if (!activity.status) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: activity.message,
                        confirmButtonText: 'Ok',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Redirect the user back to the previous page or perform any other action
                            window.history.back();
                        }
                    });
                }

                const mediaFile = activity.result.media_url
                    ? {
                          uid: '-1',
                          name: activity.result.media_url,
                          status: 'done',
                          type: 'media',
                          url: `${process.env.ADMINURL}/uploads/blogs/${activity.result.media_url}`,
                      }
                    : null;

                const thumbnailFile = activity.result.thumbnail_url
                    ? {
                          uid: '-2',
                          name: activity.result.thumbnail_url,
                          status: 'done',
                          type: 'thumbnail',

                          url: `${process.env.ADMINURL}/uploads/blogs/${activity.result.thumbnail_url}`,
                      }
                    : null;

                setMediaFileList(mediaFile ? [mediaFile] : []);
                setThumbnailFileList(thumbnailFile ? [thumbnailFile] : []);
                setDescription(activity.result.description);

                form.setFieldsValue(activity.result);
                if (activity && activity.result && activity.result.keywords) {
                    console.log(activity.result, 'activity.result.keywords.split(', ')');

                    const keywordsArray = activity.result.keywords.split(',').map((keyword) => keyword);
                    form.setFieldsValue({ keywords: keywordsArray });
                }
            });
        } else {
            form.resetFields();
        }
    }, [id]);

    const fetchBlogs = async (id: number) => {
        try {
            const response = await fetch(`${process.env.ADMINURL}/api/getBlogs?id=${id}`);
            const activity = await response.json();
            return activity;
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (values) => {
        const formdata_value = { ...values, media_url: mediaFileList?.[0], thumbnail_url: thumbnailFileList?.[0] };
        setLoading(true);
        console.log(formdata_value?.keywords);
        // Convert the array to a comma-separated string
        let keywords_string = formdata_value?.keywords?.join(',');

        // Output the string to verify
        console.log(keywords_string);

        // Combine form data with uploaded file URLs
        const formData = new FormData();
        formData.append('title', formdata_value.title);
        formData.append('short_description', formdata_value.short_description);
        formData.append('description', long_desc);
        formData.append('visibility', formdata_value.visibility);
        formData.append('tags', keywords_string);
        formData.append('type', formdata_value.type);
        formData.append('file', formdata_value?.media_url); // Append the media URL
        formData.append('file', formdata_value?.thumbnail_url); // Append the media URL
        formData.append('typeupload', typeupload); // Append the media URL
        formData.append('id', id);

        try {
            const response = await fetch(`${process.env.ADMINURL}/api/addblogs`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                message.success(`${id ? 'Blogs updated successfully' : 'Blogs added successfully'}`);
                setLoading(false);
                setTypes([]);
                // Optionally, you can perform further actions after successful submission
                router.push('/admin/blog/all');
            } else {
                throw new Error('Failed to add blogs');
            }
        } catch (error) {
            console.error('Error adding blogs:', error);
            setLoading(false);

            message.error('Failed to add blogs');
        }
    };

    const handleBeforeUpload = (file, setUrl, type) => {
        // Check if the file type is already present in the typeupload array
        const isTypeAlreadyUploaded = typeExistsInState(type);

        console.log(isTypeAlreadyUploaded, 'isTypeAlreadyUploaded');

        // Check file type before uploading
        const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
        const isVideo = file.type === 'video/mp4' || file.type === 'video/webm';

        // If the condition is met, allow upload and update the corresponding URL state
        if (isImage || isVideo) {
            setUrl([file]);
            if (!isTypeAlreadyUploaded) {
                setTypes([...typeupload, type]);
            }
            return true;
        } else {
            message.error('You can only upload JPG/PNG images or MP4/WEBM videos!');
            return false;
        }
    };

    // Function to check if the type already exists in the state
    const typeExistsInState = (type) => {
        return typeupload.includes(type);
    };


    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            ['link', 'image', 'video'],
            [{ align: [] }, { color: [] }, { background: [] }],
            ['clean'],
            [{ script: 'sub' }, { script: 'super' }],
            ['fullscreen'], // Add the fullscreen button
        ],
    };

    const formats = ['header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'link', 'image', 'video', 'align', 'color', 'background', 'script'];

    return (
        <></>
    );
};

export default Blogs;
