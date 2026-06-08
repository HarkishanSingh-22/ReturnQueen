import "../App.css";
import Qr from "../assets/Qr.png";
import StarIcon from "../assets/star-icon.svg";
import SellHero from "../assets/sell-hero.png";
import PosmarkRight from "../assets/posmark-img.png"

function SellPage() {
  return (
    <>
      <section className="sell-hero w-full px-4 ">
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 py-5">
          <div className="sell-left ">
            <div className=" flex items-center border  rounded-full gap-2 px-3 py-2">
              <img src={StarIcon} alt="" />
              <p className="m-0 font-bold">New partnership with Poshmark</p>
            </div>
            <h1 className="fw-bold py-3 ">
              Sell on{" "}
              <span className="tag-text me-2 fw-semibold">
                Poshmark
              </span>
              with ReturnQueen app — and earn points
            </h1>

            <p className="m-0 mt-4 fw-semibold tracking-wide text-gray-600">
              Easily list items you no longer need — directly through the app.
              Earn rewards for every sale.
            </p>
            <div className="qr-box mt-2">
              <img className="qr-img" src={Qr} alt="" />
              <p>Scan to download the ReturnQueen App</p>
            </div>

            <div className="sell-text flex gap-2 mt-3 ">
              <p className="mb-0">
                {" "}
                <span>
                  <i class="bi bi-check2 text-purple "></i>
                </span>
                Instant listing
              </p>
              <p className="mb-0">
                {" "}
                <span>
                  <i class="bi bi-check2"></i>
                </span>
                Auto-fill info
              </p>
              <p className="mb-0">
                {" "}
                <span>
                  <i class="bi bi-check2"></i>
                </span>
                No extra fees
              </p>
            </div>
          </div>
          <div className="sell-right">
            <img className="img-fluid hero-sale-img" src={SellHero} alt="" />
          </div>
        </div>
      </section>

      <section className="poshmark-content w-100 px-4 py-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="poshleft-content">
            <h1>
              What is <span className="tag-text text-dark">Poshmark?</span>
            </h1>
            <p className="mb-0 tracking-wider fs-5 text-gray-500">
              Poshmark is the leading social marketplace for new and pre-owned
              fashion, with over 80 million registered users and a thriving
              community of buyers and sellers.
            </p>

        <div className="poshicon-div flex flex-col gap-3 py-3 0">
            <i class="bi bi-clock bg-gray-300 px-2 py-1 rounded-full"></i>
            <p className="mb-0 tracking-wide text-gray-500 text-lg">More than 1 item sold every second on Poshmark</p>
            <i class="bi bi-clock bg-gray-300 px-2 py-1 rounded-full"></i>
            <p className="mb-0 tracking-wide text-gray-500 text-lg">More than 1 item sold every second on Poshmark</p>
            <i class="bi bi-clock bg-gray-300 px-2 py-1 rounded-full"></i>
            <p className="mb-0 tracking-wide text-gray-500 text-lg">More than 1 item sold every second on Poshmark</p>
        </div>

          </div>
          <div className="poshright ">
            <img  className="w-3/3 text-center" src={PosmarkRight} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
export default SellPage;
