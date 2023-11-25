import "./App.css";
import Grid from "./screens/Grid.jsx";
import Focus from "./screens/Focus.jsx";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAll } from "./services/actions.js";
import NavBar from "./components/NavBar.jsx";
import NewImage from "./screens/NewImage.jsx";

function App() {
  const [thumbnails, setThumbnails] = useState([]);
  const [filteredThumbnails, setFilteredThumbnails] = useState([]);

  useEffect(() => {
    fetchThumbnails();
  }, []);

  async function fetchThumbnails() {
    const allThumbnails = await getAll();
    setThumbnails(allThumbnails);
    setFilteredThumbnails(allThumbnails);
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
        <Route
          path="/:id"
          element={<Focus fetchThumbnails={fetchThumbnails} />}
        />
        <Route
          path="/new-image"
          element={<NewImage fetchThumbnails={fetchThumbnails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
