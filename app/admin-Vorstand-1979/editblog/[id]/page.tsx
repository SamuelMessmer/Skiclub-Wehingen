"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // useParams for accessing dynamic params
import NavBarAdmin from "../../components/NavbarAdmin";
import { UploadResult } from "@/app/api/s3-upload/upload-strategy.util";
import CustomTextEditor from "@/components/text-editor";
import { SyncLoader } from "react-spinners";

const EditBlog = () => {
  const { id } = useParams(); // useParams to access the 'id' from the URL

  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await fetch(`/api/blog/${id}`);
          const data = await response.json();
          setBlog(data);
          setTitle(data.title);
          setContent(data.content);
        } catch (error) {
          console.error("Error fetching blog:", error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("file", file!);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const result: UploadResult = await response.json();
      return result.fileUrl

    } catch (error) {
      setError("Fehler beim Hochladen des Bildes.");
      console.log("Fehler beim hochladen auf AWS" + error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const awsUrl = await handleImageUpload();

    const updatedBlog = {
      title,
      content,
      img: awsUrl,
    };

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlog),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError("Fehler beim Aktualisieren: " + JSON.stringify(errorData));
      } else {
        const data = await response.json();
        setSuccess("Blog erfolgreich aktualisiert!");
        setBlog(data);
        setTimeout(() => { location.replace("/admin-Vorstand-1979") }, 450);
      }
    } catch (error) {
      setError("Ein unerwarteter Fehler ist aufgetreten.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (content: string) => {
    setContent(content);
    console.log(JSON.stringify(content));
  }

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <SyncLoader className="mb-12" color="#f97316" loading={true} speedMultiplier={0.5} />
        <p>
          Blog wird geladen...
        </p>
      </div>
    )
  }

  return (
    <div>
      <NavBarAdmin />
      <form onSubmit={() => { setLoading(true); handleSubmit }}>
        <div className="flex flex-col justify-center items-center my-12">
          <h1 className="font-bold text-3xl pt-5 px-5">
            Neue Rundmail erstellen
          </h1>

          <div className="mt-5 p-5 flex flex-col">
            <label htmlFor="title" className="mb-2 font-bold">
              Title:
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
              Content:
            </label>
            <CustomTextEditor content={content} onChange={onChange} />
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

          <button
            type="submit"
            disabled={loading}
            className="bg-slate-200 hover:bg-gray-300 py-2 px-5 rounded-xl  hover:border-gray-300 border-2 my-4 mx-7 hover:scale-105 duration-100 font-semibold tracking-tight"
          >
            {loading ? "Speichern..." : "Änderungen speichern"}
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
