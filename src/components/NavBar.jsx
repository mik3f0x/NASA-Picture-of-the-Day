import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ thumbnails, setFilteredThumbnails }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    let term = e.target.value.toLowerCase();
    setSearchTerm(term);
    // term.length > 0
    //   ? setGridHeading(`Search Results for "${term}"`)
    //   : setGridHeading("All the books!");

    const results = thumbnails.filter(
      (thumbnail) =>
        thumbnail.title.toLowerCase().includes(term) ||
        thumbnail.explanation.toLowerCase().includes(term)
    );

    setFilteredThumbnails(results);

    // navigate("/grid");
  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <span className="home">Home</span>
      </NavLink>
      <input
        type="text"
        placeholder="Search..."
        className="string-search"
        value={searchTerm}
        onChange={handleSearch}
        name="Search"
      />
    </nav>
  );
}

export default NavBar;
