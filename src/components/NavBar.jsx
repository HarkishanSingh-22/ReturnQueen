import "../App.css";
import { Link } from "react-router-dom";
import QueenLogo from "../assets/queen-logo.png";

function NavBar() {
  return (
    <>
      <div className="fixed-top bg-light">
        <div className="upper-nav container-fluid p-0">
          <div className="upper-nav-div container-fluid d-flex gap-3 py-1">
            <li className="nav-item">
              <Link className="shopper-link active" to="/">
                For shoppers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="businesses-link active" to="/Businesses">
                For businesses
              </Link>
            </li>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg  ">
          <div className="container-fluid px-4 pt-2 pb-1">
            <Link className="navbar-brand" to="/">
              <img className="queenlogo" src={QueenLogo} alt="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex gap-4 ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Sell">
                    Sell
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Return">
                    Return
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Partners">
                    Partners
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Pricing">
                    Pricing
                  </Link>
                </li>

                <li className="nav-item me-3">
                  <Link className="nav-link" to="/Blog">
                    Blog
                  </Link>
                </li>

                <div className="btn download-btn">Download App</div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
