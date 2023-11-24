import "./App.css";
import Grid from "./screens/Grid.jsx";
import Focus from "./screens/Focus.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/:id" element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;
