import "../App.css";
import { Link } from "react-router-dom";
import QueenLogo from "../assets/queen-logo.png";

function Footer() {
  return (
    <footer>
      <div className="container-fluid px-5 py-5">
        <div className="row">
          <div className="col-md-3">
            <img src={QueenLogo} alt="" />
            <p className=" mt-3">Shop. Sell. Share. Return</p>

            <div className="social-icons d-flex gap-3">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter-x"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="col-md-3 d-flex gap-2 flex-column">
            <h3>Company</h3>
            <Link className="text-muted foot-links" to="/Partners">
              Partners
            </Link>
            <Link className="text-muted foot-links" to="/Pricing">
            Pricing
            </Link>
            <Link className="text-muted foot-links" to="/Blog">
              Blog
            </Link>
            <Link className="text-muted foot-links" to="/News">
              in the News
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column gap-3">
            <h3>Partners</h3>
             <Link className="text-muted foot-links" to="/Pudo">
              Pudo
            </Link>
            <Link className="text-muted foot-links" to="/Shoppers">
                Posmarks
            </Link>
          </div>
          <div className="col-md-3 d-flex flex-column gap-3">
            <h3>Support</h3>
             <Link className="text-muted foot-links" to="/FaQ">
              faQ
            </Link>
            <Link className="text-muted foot-links" to="/Mail">
                <p className="m-0 d-flex align-items-center gap-1 foot-links">  <span><i class="bi bi-envelope-at-fill fs-5 text-purple-700"></i></span>  support@returnqueen.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="trademark px-5 d-flex justify-content-between py-3">
        <p>© 2026 ReturnQueen. All Rights Reserved</p>
        <div className=" d-flex gap-3">
         <Link className="text-muted foot-links" to="/Terms">
                Terms & Condtions
            </Link>
            <Link className="text-muted foot-links" to="/policy">
                Privacy Policy
            </Link>
        </div>
       
      </div>
    </footer>
  );
}

export default Footer;
