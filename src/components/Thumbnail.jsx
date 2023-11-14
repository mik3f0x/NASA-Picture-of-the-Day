import { Link } from "react-router-dom";

function Thumbnail({ thumbnail }) {
  return (
    <div>
      <Link to={`/${thumbnail._id}`}>
        <img className="thumbnails" src={thumbnail.url} alt={thumbnail.title} />
      </Link>
    </div>
  );
}

export default Thumbnail;
