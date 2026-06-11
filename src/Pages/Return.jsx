import "../App.css";
import Return from "../assets/return-hero.png";
import Qr from "../assets/Qr.png";

function ReturnPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  container py-5 mt-5 px-4">
        <div className="left-return mt-5">
          <p className="text-purple-500 font-semibold text-2xl">
            You shop. We return.
          </p>
          <p className="text-6xl font-bold mb-2 ">Home Pickups</p>
          <p className="text-xl tracking-wide">
            Returns picked up from your doorstep
          </p>

          <div className="return-icon-box flex flex-col gap-0 ">
            <div className="return-icon flex items-center gap-2">
              <i class="bi bi-check2 text-green-400 text-2xl font-bold"></i>
              <p className="text-lg mb-0">No packaging or printing</p>
            </div>
            <div className="return-icon flex items-center gap-2">
              <i class="bi bi-check2 text-green-400 text-2xl font-bold"></i>
              <p className="text-lg mb-0">No packaging or printing</p>
            </div>
            <div className="return-icon flex items-center gap-2">
              <i class="bi bi-check2 text-green-400 text-2xl font-bold"></i>
              <p className="text-lg mb-0">No packaging or printing</p>
            </div>

            <div className=" d-flex align-items-center gap-4 mt-4 border-gray-300">
              <img className="qr-img" src={Qr} alt="" />
              <p className="m-0 text-dark fw-semibold fs-5">
                Scan to download the <br /> ReturnQueen App
              </p>
            </div>
          </div>
        </div>
        <div className="right-return mt-4">
          <img className="return-hero" src={Return} alt="" />
        </div>
      </div>
    </>
  );
}
export default ReturnPage;
