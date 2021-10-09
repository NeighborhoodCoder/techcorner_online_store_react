import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const NavBar = () => {
  const cart = useContext(storeContext).cart;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tech Corner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin">
                Admin
              </Link>
            </li>
          </ul>
          <Link
            to="/cart"
            className="d-flex text-light me-3 btn btn-outline-dark"
          >
            <span className="badge bg-primary me-1">{cart.length}</span>
            View Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
