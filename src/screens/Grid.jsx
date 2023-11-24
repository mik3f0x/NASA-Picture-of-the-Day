import { useState, useEffect } from "react";
import { getAll } from "../services/actions";
import Thumbnail from "../components/Thumbnail";

function Grid({ filteredThumbnails }) {
  // const [thumbnails, setThumbnails] = useState([]);

  // useEffect(() => {
  //   fetchThumbnails();
  // }, []);

  // async function fetchThumbnails() {
  //   const allThumbnails = await getAll();
  //   setThumbnails(allThumbnails);
  // }

  return (
    <div>
      <h1>All 100 images</h1>
      <div className="grid">
        {filteredThumbnails.map((thumbnail) => (
          <Thumbnail thumbnail={thumbnail} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
