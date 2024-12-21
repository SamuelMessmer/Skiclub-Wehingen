"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Blog } from "@prisma/client";

const Newsletter = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Abrufen der Blogdaten vom Server
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  if (!blogs)
    return (
      <p className="flex flex-col justify-center items-center h-screen">
        Rundmails werden geladen...
      </p>
    );

  return (
    <div>
      <section>
        <div className="flex flex-col items-center mt-24 mb-12 sm:mb-32">
          <h1 className="self-start sm:self-center ml-2 font-extrabold text-5xl sm:text-8xl xl:text-9xl sm:text-center tracking-tight mb-0 sm:mb-4 z-10">
            AKTUELLES VOM SKICLUB
          </h1>
          <p className="text-orange-500 text-lg sm:text-2xl mx-4 self-start sm:self-auto">
            Hier finden Sie die neusten Informationen über den Skiclub
          </p>
        </div>
      </section>

      {/* MAPPED BLOG-CARDS */}
      <section>
        <div className="bg-white mt-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col xl:mx-40">
              <Card className="mb-24 mx-4 md:mx-14 flex flex-col items-center md:items-center shadow-xl">
                <Image
                  src={blog.img}
                  alt="Logo Picture"
                  width={1920}
                  height={1080}
                  className="hidden sm:block rounded-xl shadow-xl mt-12 md:mt-5 md:mx-5 lg:my-5 lg:h-[520px] w-fit object-cover hover:scale-105 duration-150"
                />
                <div className="">
                  <CardHeader className="font-bold text-3xl lg:text-5xl -ml-2 mb-4 text-orange-500">
                    {blog.title}
                  </CardHeader>
                  <CardContent className="mb-20 text-lg sm:mb-4">
                    {blog.content}
                  </CardContent>
                </div>
                <p className="self-end py-2 px-4 opacity-50 ">{blog.createdAt}</p>
              </Card>
              <Image
                src={blog.img}
                alt="Blog bild"
                width={1920}
                height={1080}
                className="z-20 self-start rounded-xl shadow-xl h-[130px] w-[240px] object-cover sm:hidden mb-5 -mt-44 sm:-mt-80 mx-1 hover:scale-105 duration-150"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;