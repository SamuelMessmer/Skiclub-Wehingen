import React from 'react';
import { deleteBlog } from './delete';

interface DeleteButtonProps {
  blogId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ blogId }) => {
  const handleDelete = async () => {
    if (confirm('Möchtest du die Rundmail wirklich löschen?')) {
      try {
        await deleteBlog(blogId); // Führe die Löschfunktion mit der Blog-ID aus
      } catch (error) {
        alert('Fehler beim Löschen des Blogs');
        console.log(error)
      }
    }
    location.replace("/admin-Vorstand-1979")
  };

  return <button onClick={handleDelete} className='w-full text-left'>Löschen</button>;
};

export default DeleteButton;
