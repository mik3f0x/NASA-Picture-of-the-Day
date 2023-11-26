import { useState, useEffect } from "react";
import { deleteOne, getOne } from "../services/actions";
import { useParams, Link, useNavigate } from "react-router-dom";

function Focus({ fetchThumbnails }) {
  const [photo, setPhoto] = useState({});

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    const focusPhoto = await getOne(id);
    setPhoto(focusPhoto);
  }

  async function handleDelete() {
    await deleteOne(id);
    fetchThumbnails();
    navigate("/");
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <div className="image-container">
        <Link to={photo.hdurl}>
          <img src={photo.hdurl} alt={photo.title} />
        </Link>
      </div>
      <h3>{photo.date}</h3>
      <p>{photo.explanation}</p>
      <Link to={`/${id}/edit`}>
        <button>Edit Image</button>
      </Link>
      <button onClick={handleDelete}>Delete Image</button>
    </div>
  );
}

export default Focus;
