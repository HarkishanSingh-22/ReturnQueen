import "../App.css";

// Hero Section Assets
import Herovideo from "../assets/hero.mp4";
import Qr from "../assets/Qr.png";
import appleLogo from "../assets/apple-logo.png";
import playLogo from "../assets/play.png";
import ratingLogo from "../assets/rating.webp";

// Cards Section  Assets
import Card1 from "../assets/card-img-1.png";
import Card2 from "../assets/card-img-2.png";
import Card3 from "../assets/card-img-3.png";
import Card4 from "../assets/card-img-4.png";

// Brands Section  Assets
import BrandsImg from "../assets/brands-img.webp";

// Trending Section  Assets
import TrendingImg from "../assets/trending-img.png";

// Collection Section Assets
import TrendingImg2 from "../assets/trending-img2.webp";

// Feedback Section Assets
import FeedbackImg1 from "../assets/feedback-img1.png";
import FeedbackImg2 from "../assets/feedback-img2.png";
import FeedbackImg3 from "../assets/feedback-img3.png";

// Reward Section Assets
import RewardLeft from "../assets/reward-left.png";
import RewardRight from "../assets/reward-right.png";

// Return Section Assets
import ReturnImg from "../assets/return-img.png";

// last Section Assets
import LastImg from "../assets/last-img.png";
function Hero() {
  return (
    <>
      <section className="hero-section container-fluid px-4 py-2 mb-2">
        <div className="row">
          <div className="hero-left  col-md-6 flex-column">
            <h1 className="">
              Shop, Sell & Return <span className="hero-tag">supercharged</span>{" "}
              in <br /> one app
            </h1>
            <p className="m-0 py-2  fs-5">
              Shop trending finds, sell what you don't wear, and <br />
              return items—without ever leaving home.
            </p>

            <div className="qr-box mt-2">
              <img className="qr-img" src={Qr} alt="" />
              <p>Scan to download the ReturnQueen App</p>
            </div>
            <div className="d-flex gap-3  mt-3">
              <div className="logo-box d-flex align-items-center gap-2 mt-2">
                <img className="apple-logo" src={appleLogo} alt="" />
                <div className="">
                  <p className="m-0 logo-text">4.4/5 App Store</p>
                  <img className="rating-logo" src={ratingLogo} alt="" />
                </div>
              </div>
              <div className="logo-box d-flex align-items-center gap-2 mt-2">
                <img className="apple-logo" src={playLogo} alt="" />
                <div className="">
                  <p className="m-0 logo-text">4.4/5 App Store</p>
                  <img className="rating-logo" src={ratingLogo} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-right col-md-6">
            <video className="right-video" autoPlay muted loop>
              <source src={Herovideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Card Section Start */}

      <section className="container-fluid card-section py-5 ">
        <h1 className="text-center">
          Everything <span className="tag-text">you need</span> for your home{" "}
          <br /> shopping experience
        </h1>
        <div className="cards-div px-4 py-5">
          <div className="card">
            <img className="card-img" src={Card1} alt="" />
            <div className="card-overlay-text">
              <p className="m-0">Shop</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={Card2} alt="" />
            <div className="card-overlay-text">
              <p className="m-0">Share</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={Card3} alt="" />
            <div className="card-overlay-text">
              <p className="m-0">Sell</p>
            </div>
          </div>
          <div className="card">
            <img className="card-img" src={Card4} alt="" />
            <div className="card-overlay-text">
              <p className="m-0">Return</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands-Img Section */}

      <section className="brands container-fluid px-0   ">
        <div className="container py-4">
          <h1 className="text-start">
            Shop products from your <br />{" "}
            <span className="tag-text fs-1">Favorite Brands</span>
          </h1>
        </div>

        <div className="brands-img container-fluid">
          <img className="img-fluid" src={BrandsImg} alt="" />
        </div>
      </section>

      {/* Trending Card Div */}

      <section className=" trending container px-4 py-5">
        <div className="row pt-5  ">
          <div className="trending-left col-md-6  ">
            <h1 className="fw-bold">
              Discover{" "}
              <span className="tag-text text-dark fw-semi-bold">trending</span>{" "}
              <br /> products 🔥
            </h1>
            <p className="m-0 text-muted ">
              Explore the most popular community picks and <br /> must-have
              styles of the season.
            </p>
            <button className="download-btn explore-btn border-0 mt-3 ">
              Explore Now
            </button>
          </div>
          <div className="col-md-6 trending-right">
            <img className="img-fluid" src={TrendingImg} alt="" />
          </div>
        </div>
      </section>

      {/* Trending Full Img */}
      <section className="inspire container-fluid px-4 py-5">
        <img className="trenimg-2 img-fluid" src={TrendingImg2} alt="" />
        <div className="tren-overlay-text">
          <p className="m-0">
            Inspire your <br />
            community
          </p>
        </div>
      </section>

      {/* Collection Div */}

      <section className="collection container">
        <div className="row pt-5  ">
          <div className="collection-left col-md-6 mb-5  ">
            <img className="img-fluid" src={TrendingImg} alt="" />
          </div>
          <div className="col-md-6 collection-right ps-5">
            <h1 className="fw-bold">
              Create{" "}
              <span className="tag-text text-dark fw-semi-bold">
                collections,
              </span>{" "}
              <br /> share with friends
            </h1>
            <p className="m-0 text-muted ">
              Curate your favorites and easily share them with your <br />{" "}
              circle.
            </p>
            <button className="download-btn explore-btn border-0 mt-3 ">
              Try it out
            </button>
          </div>
        </div>
      </section>

      {/* Feedback Section */}

      <section className="feedback-div container-fluid py-5 mt-5">
        <div className="container">
          <h1 className="fw-bold">
            <span className="tag-text text-dark fs-1 fw-semibold ">
              Show off
            </span>
            📸 your recent purchase and <br /> ask for feedback
          </h1>
          <p className="m-0 text-muted">
            Curate your favorites and easily share them with your circle.
          </p>

          <div className="feedback-cards cards-div px-4 py-5">
            <div className="card">
              <img className="card-img" src={FeedbackImg1} alt="" />
            </div>
            <div className="card">
              <img className="card-img" src={FeedbackImg2} alt="" />
            </div>
            <div className="card">
              <img className="card-img" src={FeedbackImg3} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Accordian Section  */}

      <section className="accordian-section container px-4 py-5">
        <div className="row pt-5  ">
          <div className="trending-left col-md-6  ">
            <span className="text-success">No extra fees</span>
            <h1 className="fw-bold">
              Start{" "}
              <span className="tag-text text-dark fw-semi-bold">selling</span>{" "}
              <br /> in no time 📈💲
            </h1>
            <p className="m-0 text-muted ">
              Easily turn your unwanted items into cash on Poshmark. List in one
              tap and start attracting buyers instantly.
            </p>

            {/* Accordian Start */}

            <div
              class="accordion accordion-flush mt-4"
              id="accordionFlushExample"
            >
              <div class="accordion-item py-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    1. Find items
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Open the ReturnQueen app and go to your purchases. Tap Sell
                    next to any item you want to resell on Poshmark — no photos
                    or descriptions needed.
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    2. Tap and Confirm
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We’ll open Poshmark with the listing details pre‑filled.
                    Review, adjust the price or details if needed, and tap{" "}
                    <b>Publish.</b>
                  </div>
                </div>
              </div>
              <div class="accordion-item py-2">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    3. List it
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Your listing goes live on Poshmark. Get notified in
                    ReturnQueen when it sells and earn points toward discounts
                    on your ReturnQueen plan.
                  </div>
                </div>
              </div>
            </div>

            <button className="download-btn learn-btn  mt-3 ">
              Learn More
            </button>
          </div>
          <div className="col-md-6 trending-right">
            <img className="img-fluid" src={TrendingImg} alt="" />
          </div>
        </div>
      </section>

      {/* Earn - Rewards-Section  */}

      <section className="reward-section px-4 pt-5">
        <div className="reward-text ">
          <span>Get rewards</span>

          <h1>
            <span className="tag-text">Earn points</span>when you sell
          </h1>
          <p className="m-0">
            The more items you sell, the more discount you unlock.
          </p>

          <div className="reward-img container pt-5">
            <div className="row">
              <div className="col-md-6 ">
                <img
                  src={RewardLeft}
                  alt=""
                  className="reward-left img-fluid text-center"
                />
              </div>
              <div className="col-md-6">
                <img
                  src={RewardRight}
                  alt=""
                  className="reward-right img-fluid text-center"
                />
              </div>
              <div className="m-0 p-0">
                <button className="download-btn learn-about-btn text-center ">
                  Learn about more Selling
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Section */}

      <section className="return-section container px-4 py-5">
        <div className="row pt-5  ">
          <div className="trending-left col-md-6  ">
            <span className="text-success fw-semibold">
              No more drop-off trips
            </span>
            <h1 className="fw-bold">
              Return items with{" "}
              <span className="tag-text text-dark fw-semi-bold">
                home pickups
              </span>
            </h1>
            <p className="m-0 text-muted ">
              No need to pack, print, or wait in line.
            </p>

            <div className="return-icon-div d-flex flex-column py-3">
              <div className="d-flex align-items-center  gap-2">
                <i class="bi bi-check-lg text-success fs-2"></i>
                <p className="m-0">Sync all purchases automatically</p>
              </div>
              <div className="d-flex align-items-center  gap-2">
                <i class="bi bi-check-lg text-success fs-2"></i>
                <p className="m-0">Next-day pickups right from your door</p>
              </div>
              <div className="d-flex align-items-center  gap-2">
                <i class="bi bi-check-lg text-success fs-2"></i>
                <p className="m-0">Track returns from pickup to refund</p>
              </div>
            </div>

            <button className="download-btn Explore-transparent-btn ">
              Explore Home Pickups
            </button>
          </div>
          <div className="col-md-6 trending-right">
            <img className="img-fluid" src={ReturnImg} alt="" />
          </div>
        </div>
      </section>

      {/* Review Section  */}

      <section className="review-section py-5 px-5 text-center">
        <span>Our community</span>
        <h1 className="py-2">
          “A total online shopping <br />
          <span className="tag-text">game changer</span>”
        </h1>

        <div className="container">
          <div className="review-cards py-4">
            <div className="review-card">
              <p className=" text-start fs-3 ">★★★★★</p>

              <p className="text-start fw-semibold">
                I love ReturnQueen. They have taken one large weekly chore out
                of my life. Having them pick up my returns and handle the
                process has given me valuable time. The days of waiting in line
                at my UPS store are behind me. Thank you ReturnQueen for making
                returns so much easier!!!
              </p>

              <span className=" text-start ">Ivy Joy Strausberg</span>
            </div>
            <div className="review-card">
              <p className=" text-start fs-3 ">★★★★★</p>

              <p className="text-start fw-semibold">
                I love ReturnQueen. They have taken one large weekly chore out
                of my life. Having them pick up my returns and handle the
                process has given me valuable time. The days of waiting in line
                at my UPS store are behind me. Thank you ReturnQueen for making
                returns so much easier!!!
              </p>

              <span className=" text-start ">PJ B.</span>
            </div>
            <div className="review-card">
              <p className=" text-start fs-3 ">★★★★★</p>

              <p className="text-start fw-semibold">
                I love ReturnQueen. They have taken one large weekly chore out
                of my life. Having them pick up my returns and handle the
                process has given me valuable time. The days of waiting in line
                at my UPS store are behind me. Thank you ReturnQueen for making
                returns so much easier!!!
              </p>

              <span className=" text-start ">Estie F.</span>
            </div>
            <div className="review-card">
              <p className=" text-start fs-3 ">★★★★★</p>

              <p className="text-start fw-semibold">
                I love ReturnQueen. They have taken one large weekly chore out
                of my life. Having them pick up my returns and handle the
                process has given me valuable time. The days of waiting in line
                at my UPS store are behind me. Thank you ReturnQueen for making
                returns so much easier!!!
              </p>

              <span className=" text-start ">Layla W.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="last-section container-fluid px-4 py-5">
        <h1 className="text-center ">
          Your <span className="tag-text me-2 fw-bold text-success">new</span>
          shopping <br /> experience
        </h1>

        <div className="last-seciton-img container-fluid p-0 m-0">
          <img className="w-100 rounded-5" src={LastImg} alt="" />
          <div className="overlay-box d-flex align-items-center justify-content-center gap-3">
            <div className=" d-flex align-items-center gap-4">
              <img className="qr-img" src={Qr} alt="" />
              <p className="m-0 text-dark fw-semibold fs-5">
                Scan to download the <br /> ReturnQueen App
              </p>
            </div>
            
        
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
