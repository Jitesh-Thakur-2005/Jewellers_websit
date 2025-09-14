import { IoLogoTwitter, IoLogoInstagram, IoIosPhonePortrait } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import "./pag2.css";

// Import the image properly
import contactImg from "../../assets/hero/7d04e0197fdac22789af197659436cc41ed170a9.png";

function Cont_us() {
  return (
    <div className="cont-us">
      <h1>Contact us</h1>
      <div className="cont-main">
        <img src={contactImg} alt="Contact" />
        <div className="cont-info">
          <div>
            <label htmlFor="">Address</label>
            <p>62 W. 47th Street, Suite #608, New York, NY 10036</p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <p>hello@finejewelry.com</p>
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <p>+12-345-6789</p>
          </div>
          <div>
            <label htmlFor="">Social Media</label>
            <div className="logo">
              <IoLogoTwitter />
              <TiSocialFacebook />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          height: "4rem",
        }}
      >
        <button className="brownbutton">Back to Home</button>
      </div>
    </div>
  );
}

export default Cont_us;
