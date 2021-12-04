import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound404 from "./pages/NotFound404";

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
