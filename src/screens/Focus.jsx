import { useState, useEffect } from "react";
import { getOne } from "../services/actions";
import { useParams } from "react-router-dom";

function Focus() {
  const [photo, setPhoto] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetchPhoto();
  }, []);

  async function fetchPhoto() {
    const focusPhoto = await getOne(id);
    setPhoto(focusPhoto);
  }

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.hdurl} alt={photo.title} />
      <h3>{photo.date}</h3>
      <p>{photo.explanation}</p>
    </div>
  );
}

export default Focus;
