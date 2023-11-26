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
          className="enter-title"
          type="text"
          placeholder="Add a title for the image"
          name="title"
          value={image.title}
          onChange={handleChange}
        />
        <input
          className="enter-date"
          type="text"
          placeholder="Date taken (YYYY-MM-DD)"
          name="date"
          value={image.date}
          onChange={handleChange}
        />
        <input
          className="enter-expln"
          type="text"
          placeholder="A description of the image"
          name="explanation"
          value={image.explanation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL - highest definition"
          name="hdurl"
          value={image.hdurl}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL - thumbnail size"
          name="url"
          value={image.url}
          onChange={handleChange}
        />
        <button className="submit-btn" type="submit">
          Add Your Image!
        </button>
      </form>
    </div>
  );
}

export default NewImage;
