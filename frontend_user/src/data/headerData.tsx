import logo from "@/assets/images/shiv.jpeg";

const headerData = {
  logo,
  navData: [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/about",
      name: "About Acharya Shiv",
    },
    {
      id: 3,
      href: "#",
      name: "BET",
      subItems: [
        {
          id: 1,
          href: "/about-bet",
          name: "About BET",
        },
        {
          id: 2,
          href: "/activities",
          name: "Activities",
        },
        // {
        //   id: 2,
        //   href: "/donate",
        //   name: "Donate",
        // },
      ],
    },
    {
      id: 4,
      href: "#",
      name: "Service",
      subItems: [
        {
          id: 1,
          href: "/yoga-class",
          name: "Yoga Classes and Meditation",
        },
        {
          id: 2,
          href: "/consultation",
          name: "Consultation",
        },
        {
          id: 3,
          href: "/course",
          name: "Courses",
        },
      ],
    },

    {
      id: 5,
      href: "/blog",
      name: "Blog",
    },
  ],
  footerData: [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/about",
      name: "About Acharya Shiv",
    },
    {
      id: 1,
      href: "/about-bet",
      name: "About BET",
    },
    {
      id: 2,
      href: "/activities",
      name: "Activities",
    },

    {
      id: 1,
      href: "/yoga-class",
      name: "Yoga Classes and Meditation",
    },
    {
      id: 2,
      href: "/consultation",
      name: "Consultation",
    },
    {
      id: 3,
      href: "/course",
      name: "Courses",
    },

    {
      id: 5,
      href: "/blog",
      name: "Blog",
    },
  ],
};

export default headerData;
