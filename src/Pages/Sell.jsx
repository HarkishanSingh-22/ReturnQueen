import "../App.css";
import Qr from "../assets/Qr.png";
import StarIcon from "../assets/star-icon.svg";
import SellHero from "../assets/sell-hero.png";
import PosmarkRight from "../assets/posmark-img.png";

import ListImg1 from "../assets/list-img1.png";
import ListImg2 from "../assets/list-img-2.png";
import ListImg3 from "../assets/list-img3.png";

import PoshmarkBanner from "../assets/poshmark-banner.webp";

import GoogleIcon from "../assets/google-icon.png";
import AppleIcon from "../assets/apple-icon.png";

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
        <p className="text-5xl text-black font-bold text-center mb-5">
          Frequently asked questions
        </p>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What kind of items can I sell through ReturnQueen on Poshmark?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You can sell a wide range of items on Poshmark, including
                clothing, shoes, accessories, and more. Whether they’re past the
                return window or just things you’re ready to part with, you can
                quickly list them for sale right in the app and reach Poshmark’s
                huge community of shoppers.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How do I list on Poshmark in just a few taps?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Listing on Poshmark through ReturnQueen is super simple, just a
                few taps and you’re good to go: <br />
                1️⃣ In the ReturnQueen app, connect your shopping accounts so
                your purchases sync automatically. <br />
                2️⃣ Find the item you want to sell and tap the “Sell” button.{" "}
                <br />
                3️⃣ You’ll be redirected to the Poshmark app, where you can add a
                few details like item condition, price, and any extra notes.{" "}
                <br />
                4️⃣ If you don’t have a Poshmark account, you can create one
                right there. And that’s it! Your listing will be live on
                Poshmark in minutes.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Do I need to take new photos or write descriptions?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes, you can! Once you’ve sold your item on Poshmark,
                ReturnQueen can handle the pickup for you—right from your
                doorstep. Just schedule your pickup in the ReturnQueen app, and
                one of our drivers will take care of it. It’s a convenient way
                to handle your sales without any extra hassle.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                What are the fees for this service?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                There are no added fees to list your items on Poshmark through
                ReturnQueen.
              </div>
            </div>
          </div>
          <div class="accordion-item mb-5">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed tracking-wide"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Can I edit the listing after it's created on Poshmark?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Yes! You can edit the listing right in the Poshmark app.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posmark-Banner */}
      <section className="posmark-banner-section container-fluid p-3 p-md-4">
        <div className="posmark-banner rounded-5 p-3 p-md-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="banner-left-content">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <img
                  className="qr-img w-32 sm:w-40 object-contain shrink-0"
                  src={Qr}
                  alt=""
                />

                <div className="text-center sm:text-start">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    Ready to turn <br />
                    clutter into <span className="italic">cash?</span>
                  </p>

                  <p className="text-sm text-white fw-semibold tracking-wide mt-3">
                    Click “sell” on unwanted purchase item to create your first
                    Poshmark listing!
                  </p>

                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-4">
                    <img
                      src={AppleIcon}
                      className="h-10 md:h-12 object-contain"
                      alt=""
                    />
                    <img
                      src={GoogleIcon}
                      className="h-10 md:h-12 object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={PoshmarkBanner}
                alt=""
                className="w-full max-w-md lg:max-w-lg h-65 object-contain "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SellPage;
