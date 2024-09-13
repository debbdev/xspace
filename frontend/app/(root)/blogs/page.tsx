import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  const blogs = [
    {
      id: 1,
      time: "3 days",
      img: "/assets/images/privacy1.jpg",
      heading: "Your goals, Acquire it this Q2",
      blogText:
        "Halfway through the year already? Time flies! Maybe you&apos;re thinking about those goals you set in January. Don&apos;t worry if some got pushed aside or if you&apos;re not where you ...",
    },
    {
      id: 2,
      time: "1 week",
      img: "/assets/images/privacy1.jpg",
      heading: "Your goals, Acquire it this Q2",
      blogText:
        "Halfway through the year already? Time flies! Maybe you&apos;re thinking about those goals you set in January. Don&apos;t worry if some got pushed aside or if you&apos;re not where you ...",
    },
    {
      id: 3,
      time: "2 weeks",
      img: "/assets/images/privacy1.jpg",
      heading: "Your goals, Acquire it this Q2",
      blogText:
        "Halfway through the year already? Time flies! Maybe you&apos;re thinking about those goals you set in January. Don&apos;t worry if some got pushed aside or if you&apos;re not where you ...",
    },
    {
      id: 4,
      time: "2 weeks",
      img: "/assets/images/privacy1.jpg",
      heading: "Your goals, Acquire it this Q2",
      blogText:
        "Halfway through the year already? Time flies! Maybe you&apos;re thinking about those goals you set in January. Don&apos;t worry if some got pushed aside or if you&apos;re not where you ...",
    },
    {
      id: 5,
      time: "3 weeks",
      img: "/assets/images/privacy1.jpg",
      heading: "Your goals, Acquire it this Q2",
      blogText:
        "Halfway through the year already? Time flies! Maybe you&apos;re thinking about those goals you set in January. Don&apos;t worry if some got pushed aside or if you&apos;re not where you ...",
    },
  ];

  return (
    <section className="bg-neutral-200 pb-16 pt-28">
      <div className="mx-auto max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-lg">
        <div className="">
          <h4 className="pb-5 text-center text-base font-medium sm:text-center">
            Blog
            <hr className="mx-6 max-w-screen-sm border-2 border-red-600  sm:mx-6 sm:max-w-screen-sm lg:mx-0 lg:max-w-screen-lg" />
          </h4>
          <h1 className="h2-bold text-center sm:text-center lg:text-start">
            Our Recent Articles
          </h1>
        </div>
        <div className="flex-between max-h-10  max-w-screen-lg px-6 sm:max-w-screen-sm sm:px-6 lg:max-w-screen-2xl lg:px-0">
          <div className="flex-start background-light800_dark300 text-dark100_light900 h-10 w-full px-4 py-2 ">
            <Image
              src="assets/icons/search.svg"
              alt="search"
              width={16}
              height={16}
              className=""
            />
            <input
              type="text"
              placeholder="search for courses"
              className="background-light800_dark300 text-dark100_light900 px-3"
            />
          </div>

          <button className="bg-primary-500 h-10 border-none px-5 py-2">
            Search
          </button>
        </div>
        <div className=" max-w-screen-sm px-6 py-10 align-top sm:max-w-screen-sm sm:px-6 lg:max-w-screen-lg lg:px-0">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex-between mb-10  max-w-screen-sm flex-wrap rounded-md border bg-white p-5 sm:max-w-screen-sm sm:flex-wrap lg:max-w-screen-lg lg:flex-nowrap"
            >
              <div className="">
                <Image
                  src={blog.img}
                  width={500}
                  height={300}
                  alt="group manager"
                  className="h-full"
                />
              </div>
              <div className="p-5">
                <p className="pb-3">Published {blog.time} ago</p>
                <h3 className="h3-semibold pb-4">{blog.heading}</h3>
                <p className="pb-5">{blog.blogText}</p>
                <Link href={`/blogs/blog/${blog.heading}`}>
                  <button className="brand-gradient mx-auto rounded px-6 py-3 text-white">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
