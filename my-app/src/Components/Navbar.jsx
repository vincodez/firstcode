import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState(null);
  const [image, setImage] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Load user details on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    if (user) {
      setUsername(user.name);
      setImage(user.image);
    }
  }, []);

  // Load cart count on mount
  useEffect(() => {
    const updateCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(storedCart.length);
    };

    updateCart();
    window.addEventListener("cartUpdated", updateCart);

    return () => {
      window.removeEventListener("cartUpdated", updateCart);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("UserDetails");
    setUsername(null);
    setImage(null);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FURNITURE</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                <li><Link className="dropdown-item" to="/new-collection">New Collection</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              style={{ marginRight: '20px', height: '40px' }}
            />

            <Link to="/cart" style={{ marginRight: "20px", textDecoration: "none" }}>
              🛒 <span style={{ fontWeight: "bold" }}>({cartCount})</span>
            </Link>

            {username && image ? (
              <div className="d-flex align-items-center">
                <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{username}</span>
                <img
                  src={image}
                  alt="profile"
                  width="40"
                  height="40"
                  style={{ borderRadius: "50%", marginRight: "10px" }}
                />
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  localStorage.setItem("UserDetails", JSON.stringify({
                    name: decoded.name,
                    image: decoded.picture,
                  }));
                  setUsername(decoded.name);
                  setImage(decoded.picture);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
