import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getByYear } from "../services/actions";

function NavBar({ thumbnails, setFilteredThumbnails }) {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    setSearchTerm("");
    setFilteredThumbnails(thumbnails);
    navigate("/");
  };

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

    navigate("/");
  };

  async function handleDropdown(e) {
    const yearThumbnails = await getByYear(e.target.value);
    setFilteredThumbnails(yearThumbnails);
    navigate("/");
  }

  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= 1995; year--) {
    years.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-img-container">
        <img src="nasa-banner.png" alt="NASA" />
      </div>
      <div>
        <button onClick={handleClick}>Home</button>
        <input
          type="text"
          placeholder="Search..."
          className="string-search"
          value={searchTerm}
          onChange={handleSearch}
          name="Search"
        />
        <select name="years" id="years" onChange={handleDropdown}>
          {years}
        </select>
        <NavLink to="/new-image">Add Your Own!</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
