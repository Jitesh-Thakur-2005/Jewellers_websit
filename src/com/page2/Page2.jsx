import "./pag2.css";
import { GoArrowRight } from "react-icons/go";

// Import images as modules
import customJewelryImg from "../../assets/hero/7a66555aec02a32240a69056c64279ad3fa5b1d3.jpg";
import hardWorkImg from "../../assets/hero/50dd03e914c688ff6d032b1e7ee63ef9a36938a9.png";
import manufacturingImg from "../../assets/hero/4970bc039883716b687a6e9ce88768cb65009c6c.png";
import engagementRingImg from "../../assets/hero/d8ed920b6816cd3e5f5d9d985d3423441eab420c (1).jpg";
import jewelryManuImg from "../../assets/hero/4ae747a069283996be445b3fa292360b1c32fe58.png";

function Page2() {
  return (
    <div className="pag2">
      <h2>Custom Jewelry</h2>

      <div className="section">
        <img src={customJewelryImg} alt="Custom Jewelry" />
        <div className="sect-right">
          <p>
            Our team specializes in designing and crafting complex custom
            jewelry in gold or platinum. Our 3D designers can work with even the
            most complex ideas and create a digital model for you to approve
            before committing to production.
          </p>
          <p>
            More and more consumers are seeking out custom and unique jewelry,
            so it's important to include products that aren't found in other
            stores.
          </p>
        </div>
      </div>

      <div className="section rev">
        <img src={hardWorkImg} alt="Hard Work" />
        <div className="sect-right">
          <h2>Let Us Do the Hard Work</h2>
          <p>
            Everyone knows that the jewelry industry is highly competitive. It
            takes just the right measure of innovation, quality and determination
            to succeed. But producing the perfect product can use up precious
            time and resources. Working with NaamNYC allows you to easily expand
            your jewelry inventory and grow your business.
          </p>
        </div>
      </div>

      <div className="section">
        <img src={manufacturingImg} alt="Manufacturing" />
        <div className="sect-right">
          <p>
            We work with you to make sure your jewelry is produced exactly as
            you specify and with impeccable standards. We can manufacture a
            unique collection for your store, or even work with custom orders
            for your customers.
          </p>
          <p>NaamNYC is your one-stop shop for all your manufacturing needs.</p>
        </div>
      </div>

      <div className="pag2-s1">
        <h3>
          Contact us and we’ll reply you back with personalized plan and quote.
        </h3>
        <button className="brownbutton">Get a Free Quote</button>
      </div>

      <div className="pag2-s2">
        <div className="p2-l">
          <img src={engagementRingImg} alt="Engagement Ring" />
          <h2>Engagement Ring</h2>
          <button className="nav-button">
            Gallery <GoArrowRight size={20} />
          </button>
        </div>
        <div className="p2-r">
          <img src={jewelryManuImg} alt="Jewelry Manufacturing" />
          <h2>Jewelry Manufacturing</h2>
          <button className="nav-button">
            Gallery <GoArrowRight size={20} />
          </button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          alignContent: "center",
          justifyContent: "center",
          height: "10rem",
        }}
      >
        <button
          className="brownbutton"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Page2;
