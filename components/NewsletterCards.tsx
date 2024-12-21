"use client";
import { Blog } from "@prisma/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsletterCards: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(0); // Set initial width to 0

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBlogs = () => {
    if (windowWidth <= 640) return blogs.slice(0, 1);
    if (windowWidth <= 882) return blogs.slice(0, 2);
    return blogs.slice(0, 3);
  };

  return (
    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-14 mb-4">
      {displayedBlogs().map((blog) => (
        <div key={blog.id} className="flex flex-col items-center gap-3 w-fit">
          <Link href="/newsletter">
            <Image
              src={blog.img}
              alt="Logo Picture"
              width={1920}
              height={1080}
              className="rounded-xl shadow-xl h-[400px] w-[380px] object-cover mb-5 hover:scale-105 duration-150"
            />
          </Link>
          <h2 className="self-start text-orange-500 font-semibold text-xl">
            {blog.title}
          </h2>
          <p className="self-end text-white opacity-50 -mt-4">
            {blog.createdAt}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsletterCards;
