import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import profileHeader from "../../assets/images/profile-header.jpg";
import { FaListUl } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header-area">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container container-fluid">
            <Link to="/" className="navbar-brand me-5">
              <img src={logo} />
            </Link>
            <div
              className="navbar-toggler nav-btn"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FaListUl className="nav-btn-icon" />
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="ul-nav navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <NavLink to="/" aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/browse">Browse</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/detailes">Details</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/streams">Streams</NavLink>
                </li>
                <li className="nav-item nav-profile p-2">
                  <NavLink to="/profile">
                    Profile
                    <img src={profileHeader} className="img-prof ms-2" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
