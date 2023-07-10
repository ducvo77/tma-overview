import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="flex gap-10">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Menu;
