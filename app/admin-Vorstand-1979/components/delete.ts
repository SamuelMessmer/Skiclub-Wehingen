export const deleteBlog = async (blogId: number) => {
  try {
    const response = await fetch(`/api/blog/${blogId}`, {
      method: 'DELETE',
    });

    return response.ok; // Erfolgreich gelöscht
  } catch (error) {
    console.error('Fehler beim Löschen des Blogs: ', error);
    return false;
  }
};
