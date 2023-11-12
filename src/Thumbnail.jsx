import { Link } from "react-router-dom";

function Thumbnail({ item }) {
  return (
    <div>
      <Link to={`/${item._id}`}>
        <img className="thumbnails" src={item.url} alt={item.title} />
      </Link>
    </div>
  );
}

export default Thumbnail;
