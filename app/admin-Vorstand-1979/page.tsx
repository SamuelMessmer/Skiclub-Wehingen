"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Blog } from "@prisma/client";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "./components/NavbarAdmin";
import DeleteButton from "./components/DeleteBlog";
import EditBlogButton from "./components/EditBlogButton";

const AdminDashboard = () => {
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

  //nur für das Dropdownmenü wichtig
  const [position, setPosition] = React.useState("bottom");

  if (!blogs)
    return (
      <div>
        <NavbarAdmin />
        <p>Es sind keine Rundmail verfügbar</p>
      </div>
    );

  return (
    <div className="flex flex-col items-end lg:items-center mr-5 mb-12 py-11 z-0">
      <NavbarAdmin />
      <div className="flex flex-col items-center">
        <h1 className="font-bold md:text-6xl tracking-tight text-3xl">
          Verwaltung aller Rundmails
        </h1>

        <p className="mt-3 mb-10 ">
          Bearbeite alle bereits erstellten Rundmails
        </p>

        <div className="w-full min-h-screen">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full  place-self-end">
              <Card className="p-5 mt-6 shadow-md">
                <CardContent className=" pb-0 flex flex-row justify-between">
                  {blog.title}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Bearbeiten</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-slate-50 mt-1 py-1 px-2 rounded-md ">
                      <DropdownMenuLabel className="border-b-2">
                        Bearbeitungsmöglichkeiten
                      </DropdownMenuLabel>
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                        className="mt-2"
                      >
                        <Link href="/admin-Vorstand-1979">
                          <DropdownMenuRadioItem
                            value="top"
                            className="hover:bg-gray-00 hover:cursor-pointer py-1 px-2 rounded-lg"
                          >
                            <DeleteButton blogId={blog.id} />
                          </DropdownMenuRadioItem>
                        </Link>
                        <Link href="/admin-Vorstand-1979/editblog">
                          <DropdownMenuRadioItem
                            value="top"
                            className="hover:bg-gray-00 hover:cursor-pointer py-1 px-2 rounded-lg"
                          >
                            <EditBlogButton blogId={blog.id} />
                          </DropdownMenuRadioItem>
                        </Link>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
