import { useState } from "react";
import { addFeed } from '../services/api';

const AddFeedForm: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addFeed(url);
      setUrl('');
      alert('Feed agregado correctamente');
      console.log(url);
    } catch (error) {
      alert('Error al agregar el feed');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL del feed"
        required
      />
      <button type="submit">Agregar Feed</button>
    </form>
  );
};

export default AddFeedForm;