import "./App.css";
import Grid from "./screens/Grid.jsx";
import Focus from "./screens/Focus.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "./services/actions.js";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [thumbnails, setThumbnails] = useState([]);
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);

  useEffect(() => {
    fetchThumbnails();
  }, []);

  async function fetchThumbnails() {
    const allThumbnails = await getAll();
    setThumbnails(allThumbnails);
  }

  return (
    <div className="App">
      <NavBar
        thumbnails={thumbnails}
        setFilteredThumbnails={setFilteredThumbnails}
      />
      <Routes>
        <Route
          path="/"
          element={<Grid filteredThumbnails={filteredThumbnails} />}
        />
        <Route path="/:id" element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;
