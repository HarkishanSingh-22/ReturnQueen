import "../App.css";

import BussinessHero from "../assets/bussiness-hero.png";
import BrandsImg from "../assets/brands-img.webp";
import BrandsImg1 from "../assets/brand1.png";
import BrandsImg2 from "../assets/brand2.png";
import SaleImg from "../assets/sale-full-img.png";

import BussinessLeft from "../assets/bussiness-left.png";
import BussinessRight from "../assets/bussiness-right.png";

function Businesses() {
  return (
    <>
      <section className="w-full mt-5 py-5 px-5 text-center">
        <h1 className="bussiness-heading sm:text-lg fw-bolder mt-5 text-center">
          Discover <span className="italic me-2">new ways</span>to reach <br />
          shoppers and increase revenue
        </h1>
        <p className="text-lg tracking-wide text-center mt-2 tracking-wide">
          Expand your reach, streamline returns, and unlock resale revenue.
        </p>

        <button className="download-btn w-49 p-3 me-2 mb-3 rounded-5 mt-3">
          {" "}
          Parters with us
        </button>
        <button className="Explore-transparent-btn rounded-5 w-8 p-3">
          {" "}
          How it works
        </button>
      </section>

      <div className="container">
        <img className="w-full" src={BussinessHero} alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 container px-5 py-5 mt-4">
        <div className="text-1">
          <h3 className="fw-semibold">Diversify acquisition channels</h3>
          <p className="tracking-wider text-black">
            Reach new shoppers beyond ads and marketplaces to drive stronger
            discovery.
          </p>
        </div>
        <div className="text-1">
          <h3 className="fw-semibold">Boost brand visibility</h3>
          <p className="tracking-wider text-black">
            Showcase products to our engaged, community-driven audience.
          </p>
        </div>
        <div className="text-1">
          <h3 className="fw-semibold">Increase retention & loyalty</h3>
          <p className="tracking-wider text-black">
            Deliver seamless experiences that keep customers coming back.
          </p>
        </div>
        <div className="text-1">
          <h3 className="fw-semibold">Drive sustainable practices</h3>
          <p className="tracking-wide text-black">
            Turn returns into resale revenue and reduce environmental impact.
          </p>
        </div>
      </div>

      <section className="bulit-content w-100 bg-gray-100 p-5">
        <p className="text-4xl font-bold text-center">
          Built for modern{" "}
          <span className="italic me-2 font-normal">e-commerce</span>leaders
        </p>
        <p className="tracking-wide text-center text-sm text-gray-800 fw-semibold">
          From global fashion leaders to emerging lifestyle brands, our platform
          is designed to enhance the <br /> customer experience for retailers of
          all sizes
        </p>

        <div className="bulit-img py-5">
          <img src={BrandsImg} alt="" />
        </div>
      </section>

      <section className="container py-5">
        <p className="text-4xl font-bold mb-5  pb-2">
          {" "}
          <span className="italic me-3 font-normal">Strengthen</span>your brand
          presence
        </p>

        <div className="brands-cards grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="brand-card">
            <img src={BrandsImg1} alt="" />
            <h1 className="mt-3 mb-3">Seasonal collections</h1>
            <p className="text-gray-400 text-md">
              Highlight and feature your campaigns directly inside ReturnQueen
              to drive shopper engagement during peak moments.
            </p>
          </div>
          <div className="brand-card">
            <img src={BrandsImg2} alt="" />
            <h1 className="mt-3 mb-3">Personalized product hub</h1>
            <p className="text-gray-400 text-md">
              Showcase your products with tailored pages featuring your colors,
              logo, and messaging.
            </p>
          </div>
        </div>
      </section>

      <section className="Bussniess-sale w-100 bg-purple-800 py-5 px-4">
        <p className="text-4xl font-bold text-white text-center py-4 ">
          Unlock<span className="italic ms-2 font-normal me-2">new </span>sales
          channels
        </p>
        <p className="text-xl tracking-wide text-white text-center">
          Boost peer-to-peer visibility with built-in social sharing, likes, and
          shoppable product links.
        </p>

        <img src={SaleImg} alt="" className="container py-5" />
      </section>

      <section className="container py-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="left">
          <img src={BussinessLeft} alt="" />
        </div>
        <div className="right p-5">
          <span className="text-lg text-pink-500 ">Try-On (Beta)</span>
          <p className="text-5xl font-bold mt-3">
            Boost shopper{" "}
            <span className="italic me-2 font-normal">confidence</span>with
            virtual try-on
          </p>
          <p className="text-gray-400 text-lg tracking-wider">
            Let shoppers preview fit, color, and style in real time using their
            camera. Enable try-on so customers can decide to buy or keep,
            reducing returns and boosting confidence.
          </p>

          <button className="download-btn p-3 rounded-5 mt-3">Talks to us</button>
        </div>
      </section>
    </>
  );
}
export default Businesses;
