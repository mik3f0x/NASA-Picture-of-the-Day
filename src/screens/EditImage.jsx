import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editImage, getOne } from "../services/actions";

function EditImage() {
  const [image, setImage] = useState({
    title: "",
    date: "",
    explanation: "",
    hdurl: "",
    url: "",
  });

  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();

  useEffect(() => {
    fetchImage();
  }, []);

  async function fetchImage() {
    const oneImage = await getOne(id);
    setImage(oneImage);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editImage(id, image);
    navigate(`/${id}`);
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
      <h1>Edit this image</h1>
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
        <button type="submit">Edit Image Data</button>
      </form>
    </div>
  );
}

export default EditImage;
