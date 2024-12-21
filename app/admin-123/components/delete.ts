export const deleteBlog = async (blogId: number) => {
    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: 'DELETE',
      });
  
      const result = await response.json();
      if (response.ok) {
        // console.log('Blog wurde erfolgreich gelöscht:', result);
        return result; // Erfolgreich gelöscht
      } else {
        console.error('Fehler beim Löschen des Blogs:', result.message);
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Fehler beim Löschen des Blogs:', error);
      throw error; // Fehlerhandling
    }
  };