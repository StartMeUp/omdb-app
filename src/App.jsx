import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import NotFound404 from "./pages/NotFound404";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
