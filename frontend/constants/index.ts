import { SidebarLink, AllCourses, CourseBundle, Category } from "@/types";

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/explore-courses",
    label: "Explore Courses",
  },

  {
    imgURL: "/assets/icons/star.svg",
    route: "/course-bundles",
    label: "Course Bundles",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/dynamic-courses",
    label: "Dynamic Courses",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/become-an-instructor",
    label: "Become an instructor",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/blogs",
    label: "Blogs",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/join-our-developers",
    label: "Join our Developers",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/about-us",
    label: "About us",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/contact-us",
    label: "Contact us",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/support-us",
    label: "Support Us",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/freq-asked-questions",
    label: "Frequently Asked questions",
  },
];
export const allCourses: AllCourses[] = [
  {
    id: 1,
    title: "3D Modelling and Animation with Blender",
    description: "A comprehensive guide to 3D modeling using Blender.",
    category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
    image: "/images/new-course-1.jpg",
    videoSrc: "/videos/video.mp4",
    studentTotal: "24",
    author: "Zainat Lincoln",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 2,
    title: "Advanced Photoshop Techniques",
    description:
      "Master advanced Photoshop techniques for professional design.",
    category: [
      { id: 2, title: "Graphic Design", collection: "Featured Courses" },
    ],
    image: "/images/featured-course-1.jpg",
    videoSrc: "/videos/video2.mp4",
    studentTotal: "30",
    author: "Jane Doe",
    oldPrice: "12,000",
    newPrice: "6,000",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    category: [
      { id: 3, title: "Web Development", collection: "Popular Courses" },
    ],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "John Smith",
    oldPrice: "15,000",
    newPrice: "7,500",
  },
  {
    id: 4,
    title: "Web Design",
    description: "Learn full-stack web development from scratch.",
    category: [{ id: 4, title: "Web Design", collection: "Popular Courses" }],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "John Smith",
    oldPrice: "15,000",
    newPrice: "7,500",
  },
  {
    id: 5,
    title: "3D Quantitative Modelling and Analysis",
    description: "A comprehensive guide to 3D modeling using Blender.",
    category: [{ id: 1, title: "3D Modelling", collection: "Popular Courses" }],
    image: "/images/new-course-1.jpg",
    videoSrc: "/videos/video.mp4",
    studentTotal: "24",
    author: "Relaq Wilson",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 6,
    title: "Advanced Photography",
    description: "Advanced Photography techniques for professional design.",
    category: [
      { id: 2, title: "Graphic Design", collection: "Course Bundles" },
    ],
    image: "/images/featured-course-1.jpg",
    videoSrc: "/videos/video2.mp4",
    studentTotal: "30",
    author: "Jane Doe",
    oldPrice: "12,000",
    newPrice: "6,000",
  },
  {
    id: 7,
    title: "NextJs14 Mastery",
    description: "Master NextJs14 for Professional Web Development.",
    category: [
      { id: 3, title: "Web Development", collection: "Course Bundles" },
    ],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "Adam Lockes",
    oldPrice: "15,000",
    newPrice: "9,500",
  },
  {
    id: 8,
    title: "3D Modelling Analysis",
    description: "A comprehensive guide to 3D modeling using Blender.",
    category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
    image: "/images/new-course-1.jpg",
    videoSrc: "/videos/video.mp4",
    studentTotal: "24",
    author: "Zainat Lincoln",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 9,
    title: "Advanced Videography Techniques",
    description:
      "Master advanced Photoshop techniques for professional design.",
    category: [{ id: 2, title: "Graphic Design", collection: "New Courses" }],
    image: "/images/featured-course-1.jpg",
    videoSrc: "/videos/video2.mp4",
    studentTotal: "30",
    author: "Jane Doe",
    oldPrice: "12,000",
    newPrice: "6,000",
  },
  {
    id: 10,
    title: "Advanced Videography Techniques",
    description:
      "Master advanced Photoshop techniques for professional design.",
    category: [
      { id: 2, title: "Graphic Design", collection: "Featured Courses" },
    ],
    image: "/images/featured-course-1.jpg",
    videoSrc: "/videos/video2.mp4",
    studentTotal: "30",
    author: "Jane Doe",
    oldPrice: "12,000",
    newPrice: "6,000",
  },
  {
    id: 11,
    title: "3D Modelling Analysis",
    description: "A comprehensive guide to 3D modeling using Blender.",
    category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
    image: "/images/new-course-1.jpg",
    videoSrc: "/videos/video.mp4",
    studentTotal: "24",
    author: "Zainat Lincoln",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 12,
    title: "NextJs14 Mastery",
    description: "Master NextJs14 for Professional Web Development.",
    category: [
      { id: 3, title: "Web Development", collection: "Popular Courses" },
    ],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "Adam Lockes",
    oldPrice: "15,000",
    newPrice: "9,500",
  },
  {
    id: 13,
    title: "Advanced Photography",
    description: "Advanced Photography techniques for professional design.",
    category: [
      { id: 2, title: "Graphic Design", collection: "Featured Courses" },
    ],
    image: "/images/featured-course-1.jpg",
    videoSrc: "/videos/video2.mp4",
    studentTotal: "30",
    author: "Jane Doe",
    oldPrice: "12,000",
    newPrice: "6,000",
  },
  {
    id: 14,
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    category: [
      { id: 3, title: "Web Development", collection: "Course Bundles" },
    ],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "John Smith",
    oldPrice: "15,000",
    newPrice: "7,500",
  },
  {
    id: 15,
    title: "Web Design",
    description: "Learn full-stack web development from scratch.",
    category: [{ id: 4, title: "Web Design", collection: "Course Bundles" }],
    image: "/images/course-bundles-1.jpg",
    videoSrc: "/videos/video3.mp4",
    studentTotal: "50",
    author: "John Smith",
    oldPrice: "15,000",
    newPrice: "7,500",
  },
  {
    id: 16,
    title: "3D Quantitative Modelling and Analysis",
    description: "A comprehensive guide to 3D modeling using Blender.",
    category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
    image: "/images/new-course-1.jpg",
    videoSrc: "/videos/video.mp4",
    studentTotal: "24",
    author: "Relaq Wilson",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
];
export const courseBundles: CourseBundle[] = [
  {
    id: 1,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 2,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 3,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 4,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 5,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 6,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
  {
    id: 7,
    title: "Data Analysis Cooperate Bundle",
    description:
      "This bundle contains the needed skills to analyze & present data with offline and online analytical tools.",
    image: "/assets/images/course.jpg",
    packages: ["Data", "Data Analysis", "Power Bi", "Cooperate Data Analysis"],
    date: "2024-30-08",
    oldPrice: "10,950",
    newPrice: "5,550",
  },
];
export const category: Category[] = [
  {
    id: 1,
    title: "3D Modelling",
    collection: "New Courses",
  },
  {
    id: 2,
    title: "Web Development",
    collection: "Featured Courses",
  },
  {
    id: 3,
    title: "3D Modelling",
    collection: "Popular Courses",
  },
  {
    id: 4,
    title: "3D Modelling",
    collection: "Course Bundles",
  },
];

// export const allCourses: AllCourses[] = [
//   {
//     id: 1,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "New Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 1,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Featured Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 1,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Course Bundles" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Course Bundles" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Course Bundles" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Course Bundles" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Course Bundles" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 1,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Popular Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Popular Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Popular Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Popular Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: [{ id: 1, title: "3D Modeling", collection: "Popular Courses" }],
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
// ];
// export const newCourses: Course[] = [
//   {
//     id: 1,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "New Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
// ];

// export const featuredCourses: Course[] = [
//   {
//     id: 1,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Featured Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
// ];

// export const courseBundles: Course[] = [
//   {
//     id: 1,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Course Bundles",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
// ];

// export const popularCourses: Course[] = [
//   {
//     id: 1,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 2,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 3,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 4,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
//   {
//     id: 5,
//     title: "Popular Courses",
//     description: "3D Modelling and Animation with Blender",
//     category: "3D Modeling",
//     image: "/images/new-course-1.jpg",
//     videoSrc: "/videos/video.mp4",
//     studentTotal: "24",
//     author: "Zainat Lincoln",
//     oldPrice: "10,950",
//     newPrice: "5,550",
//   },
// ];
