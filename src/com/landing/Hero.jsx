import { GoArrowRight } from "react-icons/go";
import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import Footer from "./footer/footre";

// Import images as modules
import heroImg1 from "../../assets/langing/d8ed920b6816cd3e5f5d9d985d3423441eab420c.jpg";
import heroImg2 from "../../assets/langing/14270df758009382a8dbc563ef85457c8ac58fdf.jpg";
import service1 from "../../assets/hero/7a66555aec02a32240a69056c64279ad3fa5b1d3.jpg";
import service2 from "../../assets/hero/d8ed920b6816cd3e5f5d9d985d3423441eab420c (1).jpg";
import service3 from "../../assets/hero/4ae747a069283996be445b3fa292360b1c32fe58.png";
import lifestyle from "../../assets/hero/a3114f463a43ba305431d8d89dd22c8dd1c90093.png";
import insta1 from "../../assets/hero/96ba5fb4a7ae0bdc65592649de3a99b0ab658e4a.png";
import insta2 from "../../assets/hero/4970bc039883716b687a6e9ce88768cb65009c6c.png";
import insta3 from "../../assets/hero/3073c5d484015ed402697d330e2d4b9fd95eb3e3.png";
import insta4 from "../../assets/hero/50dd03e914c688ff6d032b1e7ee63ef9a36938a9.png";
import aboutImg from "../../assets/hero/137ab227d072a48fcdf0eb12e441c52d71c2a7d1.jpg";

function Hero() {
  return (
    <div className="hero-body">
      <div className="s1">
        <div className="s1-left">
          <h1>Beautiful, masterful design never goes out of fashion.</h1>
          <div style={{ display: "flex", gap: "2em" }}>
            <button
              className="brownbutton"
              onClick={() => {
                window.location.href = "/Contact_us";
              }}
            >
              Contact
            </button>
            <button
              className="nav-button"
              onClick={() => {
                window.location.href = "/Custom_Jewelry";
              }}
            >
              Gallery <GoArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="s1-right">
          <div className="s1img">
            <img src={heroImg1} alt="" />
          </div>
          <img className="s1img2" src={heroImg2} alt="" />
        </div>
      </div>

      <h2 id="services">Our Services</h2>

      <div className="section">
        <img src={service1} alt="" />
        <div className="sect-right">
          <h2>Custom Jewelry</h2>
          <p>
            Our team specializes in designing and crafting complex custom
            jewelry in gold or platinum. Our 3D designers can work with even the
            most complex ideas and create a digital model for you to approve
            before committing to production.
          </p>
          <button className="brownbutton">Read more</button>
        </div>
      </div>

      <div className="section rev">
        <img src={service2} alt="" />
        <div className="sect-right">
          <h2>Engagement Ring</h2>
          <p>
            Our team of 3d modelers and jewelers can create literally any ring
            you can imagine, including complex designs. We're opening up our
            services to private clients, so you can get a beautiful, designer
            quality engagement ring at an affordable price.
          </p>
          <button className="brownbutton">Read more</button>
        </div>
      </div>

      <div className="section">
        <img src={service3} alt="" />
        <div className="sect-right">
          <h2>Jewelry Manufacturing</h2>
          <p>
            We work with you to make sure your jewelry is produced exactly as
            you specify and with impeccable standards. We can manufacture a
            unique collection for your store, or even work with custom orders
            for your customers.
          </p>
          <button className="brownbutton">Read more</button>
        </div>
      </div>

      <div className="s4">
        <img src={lifestyle} alt="" />
        <div className="s2-right">
          <h1>No limits to the lifestyle you deserve.</h1>
          <p>
            Contact us and we’ll reply you back with personalized plan and
            quote.
          </p>
          <button>Send Your Design Idea</button>
        </div>
      </div>

      <div className="s5" id="contact">
        <h1>Connect us on Instagram</h1>
        <div className="s5-main">
          <img src={insta1} alt="" />
          <div className="s5centrimg">
            <img src={insta2} style={{ marginBottom: "auto" }} alt="" />
            <img src={insta3} alt="" />
          </div>
          <img src={insta4} alt="" />
        </div>
        <button className="brownbutton">Instagram</button>
      </div>

      <h2 id="about">About us</h2>
      <div className="s6-b0">
        <div className="s6">
          <img src={aboutImg} alt="" />
          <div className="s6-main">
            <p>
              At NaamNYC, we work with high-end designers (both new and
              established), retail stores, and also private clients looking for
              that perfect custom piece or engagement ring.
            </p>
            <p>
              Our studio combines over 20 years of experience with a modern
              focus on 3d printing technology. While we specialize in custom
              design and digital modeling, we're also a respected high-end
              jewelry manufacturer.
            </p>
            <p>
              Our expert team of jewelers and designers will take your custom
              design idea all the way from concept to reality.
            </p>
            <div className="s6-logos">
              <IoLogoTwitter />
              <TiSocialFacebook />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        <button className="brownbutton">Contact us</button>
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
