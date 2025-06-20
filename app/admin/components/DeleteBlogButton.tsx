"use client";
import React from 'react';
import { deleteBlog } from './delete';

interface DeleteButtonProps {
  blogId: number;
}

const DeleteBlogButton: React.FC<DeleteButtonProps> = ({ blogId }) => {
  const handleDelete = async () => {
    if (!confirm('Möchtest Du die Rundmail wirklich löschen?')) return;

    try {
      const success = await deleteBlog(blogId);

      if (success) location.replace("/admin");
    } catch (error) {
      console.log(error)
      alert('Fehler beim Löschen des Blogs');
    }
  }

  return <button onClick={handleDelete} className='w-full text-left'>Löschen</button>;
};

export default DeleteBlogButton;
