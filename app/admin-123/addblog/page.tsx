"use client";
import React, { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";

const CreateBlog = () => {
  const [file, setFile] = useState<File | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", file!);

    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });

    try {
      const response = await fetch("/api/s3-upload/images", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload fehlgeschlage")

      const result = await response.json();
      return result.fileUrl;

    } catch (error) {
      setError("Fehler beim Hochladen des Bildes.");
      console.log(error)
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    e.preventDefault();

    try {
      const awsUrl = await handleImageUpload(); //handleImageUpload returns awsUrl als string   
      if (awsUrl === undefined) return

      const blogData = {
        title,
        content,
        img: awsUrl, // Die S3-Bild-URL verwenden
      };

      const response = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Unbekannter Fehler");
      }

      setSuccess("Blog erfolgreich erstellt!");
      setTitle("");
      setContent("");
      setLoading(false);
      setFile(null); // Setze img zurück auf null
      location.replace("/admin-123");
    } catch (error) {
      setError("Fehler beim Speichern")
      console.log("Hier ist der Fehler: " + error)
    }
  };

  return (
    <div>
      <NavbarAdmin />
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
        <div className="flex flex-col justify-center items-center my-12">
          <h1 className="font-bold text-3xl pt-5 px-5">
            Neue Rundmail erstellen
          </h1>

          <div className="mt-5 p-5 flex flex-col">
            <label htmlFor="title" className="mb-2 font-bold">
              Überschrift:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="py-2 px-5 rounded-xl w-[600px] hover:border-slate-400 border-2 shadow-md"
            />
          </div>

          <div className="mt-5 p-5 flex flex-col">
            <label htmlFor="content" className="mb-2 font-bold">
              Text:
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="py-2 px-5 rounded-xl w-[600px] h-[500px] hover:border-slate-400 border-2 shadow-md"
            />
          </div>

          <div className="mt-5 p-5 flex flex-col">
            <label htmlFor="img" className="mb-2 font-bold">
              Bild hochladen:
            </label>
            <input
              type="file"
              id="img"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setFile(e.target.files[0]); // Setzt das ausgewählte Bild als File
                }
              }}
              required
              className="py-2 px-5 rounded-xl w-[600px] hover:border-slate-400 border-2 shadow-md"
            />
          </div>

          <div className="self-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-slate-200 hover:bg-gray-300 py-2 px-5 rounded-xl hover:border-gray-300 border-2 my-4 mx-7 hover:scale-105 duration-100 font-bold tracking-tight"
            >
              {loading ? "Speichern..." : "Rundmail speichern"}
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
