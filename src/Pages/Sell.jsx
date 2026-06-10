import "../App.css";
import Qr from "../assets/Qr.png";
import StarIcon from "../assets/star-icon.svg";
import SellHero from "../assets/sell-hero.png";
import PosmarkRight from "../assets/posmark-img.png";

import ListImg1 from "../assets/list-img1.png";
import ListImg2 from "../assets/list-img-2.png";
import ListImg3 from "../assets/list-img3.png";

function SellPage() {
  return (
    <>
      <section className="sell-hero w-100 px-4 ">
  
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 py-5">
          <div className="sell-left ">
            <div className=" flex items-center border  rounded-full gap-2 px-3 py-2">
              <img src={StarIcon} alt="" />
              <p className="m-0 font-bold">New partnership with Poshmark</p>
            </div>
            <h1 className="fw-bold py-3 ">
              Sell on{" "}
              <span className="tag-text me-2 fw-semibold">Poshmark</span>
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

      <section className="poshmark-content px-4 py-5 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="poshleft-content">
            <h1>
              What is <span className="tag-text text-dark">Poshmark?</span>
            </h1>

            <p className="mb-0 tracking-wider fs-5 text-gray-500">
              Poshmark is the leading social marketplace for new and pre-owned
              fashion, with over 80 million registered users and a thriving
              community of buyers and sellers.
            </p>

            <div className="flex flex-col gap-3 py-3">
              <div className="flex items-start gap-3">
                <i className="bi bi-clock flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shrink-0"></i>

                <p className="tracking-wide text-black-500 text-lg mb-0">
                  More than 1 item sold every second on Poshmark
                </p>
              </div>

              <div className="flex items-start gap-3">
                <i className="bi bi-tags-fill flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shrink-0"></i>

                <p className="tracking-wide text-black-500 text-lg mb-0">
                  1M+ items were sold last week on Poshmark
                </p>
              </div>

              <div className="flex items-start gap-3">
                <i className="bi bi-person-circle flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shrink-0"></i>

                <p className="tracking-wide text-black-500 text-lg mb-0">
                  100M+ users in the Poshmark Community
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-full max-w-md"
              src={PosmarkRight}
              alt="Poshmark"
            />
          </div>
        </div>
      </section>

      <section className="list-items py-5 bg-gray-100">
        <h1 className="text-center fw-bold">
          List item in 3 <span className="italic">simple</span> steps
        </h1>
        <p className="text-center text-gray-600 tracking-wider text-lg ">
          No photos to take, no descriptions to write. Just click <br /> and
          sell with our seamless Poshmark integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 px-4 gap-4 py-5">
          <div className="list-card">
            <img src={ListImg1} alt="" />
            <h4 className="text-center fw-bold pt-3">
              Select the item for sale
            </h4>
            <p className="text-black tracking-wide text-center m-3 text-md">
              Found something worth reselling? Tap <b>Sell </b>next to any item
              in your ReturnQueen app.
            </p>
          </div>
          <div className="list-card">
            <img src={ListImg2} alt="" />
            <h4 className="text-center fw-bold pt-3">Review & publish</h4>
            <p className="text-black tracking-wide text-center m-3 text-md">
              We’ll open Poshmark with all item details pre-filled. Simply
              review, edit if needed, and tap <b>Publish.</b>
            </p>
          </div>
          <div className="list-card">
            <img src={ListImg3} alt="" />
            <h4 className="text-center fw-bold pt-3">
              Get notified when it sells
            </h4>
            <p className="text-black tracking-wide text-center m-3 text-md">
              Once it sells, you’ll get a notification right in the ReturnQueen
              app—easy and seamless.
            </p>
          </div>
        </div>
      </section>

      <section className="discount-section w-100 px-4 py-5">
        <p className=" text-center text-5xl fw-bolder">
          {" "}
          <span className="italic me-3">Unlock</span>these discounts <br /> on
          your subscription
        </p>
        <p className="text-gray-400 text-center tracking-wider fw-semibold mt-4 ">
          The more you sell on Poshmark through ReturnQueen, <br /> the more you
          save on your subscription!
        </p>
        <section className="px-6 py-5">
          <table className="container  py-5 border border-gray-300 text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-6 bg-white"></th>

                <th className="border border-gray-300 p-4 bg-gray-50">
                  <h3 className="text-3xl font-bold">$250+</h3>
                  <p className="text-lg text-gray-600">Monthly sales</p>
                </th>

                <th className="border border-gray-300 p-4 bg-gray-50">
                  <h3 className="text-3xl font-bold">$500+</h3>
                  <p className="text-lg text-gray-600">Monthly sales</p>
                </th>

                <th className="border border-gray-300 p-4 bg-gray-50">
                  <h3 className="text-3xl font-bold">$1000+</h3>
                  <p className="text-lg text-gray-600">Monthly sales</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-300 p-5 text-left font-semibold">
                  Monthly plan
                </td>

                <td className="border border-gray-300 p-5 font-semibold">
                  $10 off
                </td>

                <td className="border border-gray-300 p-5">
                  <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-md font-semibold">
                    1 month free
                  </button>
                </td>

                <td className="border border-gray-300 p-5">
                  <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-md font-semibold">
                    3 month free
                  </button>
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-5 text-left font-semibold">
                  Annual plan
                </td>

                <td className="border border-gray-300 p-5 font-semibold">
                  $10 off
                </td>

                <td className="border border-gray-300 p-5 font-semibold">
                  $25 off
                </td>

                <td className="border border-gray-300 p-5">
                  <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-md font-semibold">
                    $50 off
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center mt-4">
            <div className="btn download-btn px-4  rounded-5">List Item</div>
          </div>
        </section>
      </section>

      <section className="asked-question-div container">
        <p className="text-5xl text-black font-bold text-center">
          Frequently asked questions
        </p>


      </section>
    </>
  );
}
export default SellPage;
