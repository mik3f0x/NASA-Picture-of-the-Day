import Thumbnail from "../components/Thumbnail";

function Grid({ filteredThumbnails }) {
  return (
    <div>
      <h1>All Images</h1>
      <div className="grid">
        {filteredThumbnails.map((thumbnail) => (
          <Thumbnail thumbnail={thumbnail} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
