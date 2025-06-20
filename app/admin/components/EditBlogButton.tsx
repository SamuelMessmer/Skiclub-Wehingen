"use client";
import React from "react";

interface EditBlogButtonProps {
  blogId: number;
}

const EditBlogButton: React.FC<EditBlogButtonProps> = ({ blogId }) => {
  const handleDelete = () => {
    location.replace(`/admin/editblog/${blogId}`);
  };

  return (
    <button onClick={handleDelete} className="w-full text-left">
      Editieren
    </button>
  );
};

export default EditBlogButton;
