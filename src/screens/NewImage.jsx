import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createImage } from "../services/actions";

function NewImage({ fetchThumbnails }) {
  const [image, setImage] = useState({
    title: "",
    date: "",
    explanation: "",
    hdurl: "",
    url: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createImage(image);
    fetchThumbnails();

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setImage((prevImage) => ({
      ...prevImage,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add your own Astronomy Image to the Database!</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a title for the image:"
          name="title"
          value={image.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Date the image was taken:"
          name="date"
          value={image.date}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Date the image was taken:"
          name="explanation"
          value={image.explanation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="hdurl"
          name="hdurl"
          value={image.hdurl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="url"
          name="url"
          value={image.hdurl}
          onChange={handleChange}
        />
        <button type="submit">Create Your Cat!</button>
      </form>
    </div>
  );
}

export default NewImage;
