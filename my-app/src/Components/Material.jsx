export default function Material() {
  return (
    <div className="main">
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            {/* Home */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                Sofas & Recliners
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Sofa</a></li>
                <li><a className="dropdown-item" href="#">3 Seater Sofa</a></li>
                <li><a className="dropdown-item" href="#">Customisable Sofas</a></li>
                <li><a className="dropdown-item" href="#">Fabric Sofa Sets</a></li>
                <li><a className="dropdown-item" href="#">Wooden Sofa Sets</a></li>
                <li><a className="dropdown-item" href="#">Luxury Leather Sofa</a></li>
                <li><a className="dropdown-item" href="#">L shaped Sofa Sets</a></li>
                <li><a className="dropdown-item" href="#">Loveseats</a></li>
                <li><a className="dropdown-item" href="#">Sofa Cum Bed</a></li>


              </ul>
            </li>

            {/* Study */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Study Tables</a></li>
                <li><a className="dropdown-item" href="#">Computer Tables</a></li>
                <li><a className="dropdown-item" href="#">Book shelves</a></li>
                <li><a className="dropdown-item" href="#">Wall shelves</a></li>
                <li><a className="dropdown-item" href="#">Study Lamps</a></li>
                <li><a className="dropdown-item" href="#">Study Chairs</a></li>
                <li><a className="dropdown-item" href="#">Laptop Tables</a></li>
              </ul>
            </li>

            {/* Pricing */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bedroom & Mattresses
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Beds</a></li>
                <li><a className="dropdown-item" href="#">King Size Beds</a></li>
                <li><a className="dropdown-item" href="#">Quen Size Beds</a></li>
                <li><a className="dropdown-item" href="#">Single Beds</a></li>
                <li><a className="dropdown-item" href="#">Sofa Cum Beds</a></li>
                <li><a className="dropdown-item" href="#">UL Assured Beds</a></li>
                <li><a className="dropdown-item" href="#">Beds With Storage</a></li>
                <li><a className="dropdown-item" href="#">Beds Without Storage</a></li>

              </ul>
            </li>

            {/* Dropdown link */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dinning
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Crockery Units</a></li>
                <li><a className="dropdown-item" href="#">Kitchne cabinets & Racks</a></li>
                <li><a className="dropdown-item" href="#">Bar Tools</a></li>
                <li><a className="dropdown-item" href="#">Bar Cabinets</a></li>                
                <li><a className="dropdown-item" href="#">Modular Kitchen</a></li>
                

              </ul>
            </li>

            {/* Interior */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Interior
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="interior">Full Home Interior</a></li>
                <li><a className="dropdown-item" href="interior">Modular Kitchens</a></li>
                <li><a className="dropdown-item" href="interior">Modular Wardrobes</a></li>
              </ul>
            </li>

            {/* Lamp */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lightning & Decoration
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Floor Lamps </a></li>
                <li><a className="dropdown-item" href="#">Study Lamps</a></li>
                <li><a className="dropdown-item" href="#">Wall Lamps</a></li>
                <li><a className="dropdown-item" href="#">Ceiling Lights</a></li>
                <li><a className="dropdown-item" href="#">Outdoor Lights</a></li>
                <li><a className="dropdown-item" href="#">chamdeliers</a></li>
                <li><a className="dropdown-item" href="#">Lamp Shades</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
