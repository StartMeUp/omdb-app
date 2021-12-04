import { Link } from "react-router-dom";

const Header = () => (
  <div className="p-4 bg-gray-800">
    <header className="container mx-auto">
      <h1 className="text-3xl text-white">
        <Link to="/">OMDB APP</Link>
      </h1>
    </header>
  </div>
);

export default Header;
