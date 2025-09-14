import { IoLogoTwitter, IoLogoInstagram ,IoIosPhonePortrait} from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { MdOutlineEmail  } from "react-icons/md";
function Footer() {
    return (<div className="footer">
        <div className="f1">
            <label htmlFor="">Naam</label>
            <p>At NaamNYC, we work with high-end designers (both new and established), retail stores, and also private clients looking for that perfect custom piece or engagement ring.</p>
        </div>
        <div className="footer2">
            <div className="f2">
                <label htmlFor="">About us</label>
                <b>Services</b>
                <b>Gallery</b>
                <b>About us</b>
            </div>
            <div className="f3">
                <label htmlFor="">Support</label>
               <div>
                   <MdOutlineEmail /> <b>hello@naamnyc.com</b>
               </div>
                <div><IoIosPhonePortrait /><b>+12-345-6789</b></div>
                <div className="log"><IoLogoTwitter />
                    < TiSocialFacebook />
                    <IoLogoInstagram /></div>
            </div>
        </div>
    </div>
    );
}

export default Footer;