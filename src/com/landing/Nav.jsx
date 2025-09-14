import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav() {
    // const ser=useRef(null)
    const nev = useNavigate()
    const [isop, setop] = useState(false)
    return (<nav>
        <div className="nav-body">
            <div className="hamburger" onClick={()=>{setop(!isop)}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 30 30"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path></svg>
            </div>
            <div className="nav-logo">FJ</div>
            <div className="nav-buttons">
                <button className="nav-button" onClick={() => { nev('/') }}>Home</button>
                <button className="nav-button" onClick={() => {
                    nev('/')
                    //  window.location.href="#ser"
                }}><a href="#services">Services</a></button>
                <button className="nav-button" onClick={() => { nev('/Custom_Jewelry') }}>Gallery</button>
                <button className="nav-button" onClick={() => { nev('/') }}><a href="#about">About us</a></button>
            </div>    <button className="brownbutton" onClick={() => { nev('/') }}><a style={{ color: 'white' }} href="/Contact_us">Contact</a></button>
       { isop &&    <div className="flotingnev">
                <button className="nav-button" onClick={() => { nev('/') ;setop(!isop)}}>Home</button>
                <button className="nav-button" onClick={() => {
                    nev('/')
                    setop(!isop)
                    //  window.location.href="#ser"
                }}><a href="#services">Services</a></button>
                <button className="nav-button" onClick={() => { nev('/Custom_Jewelry');setop(!isop) }}>Gallery</button>
                <button className="nav-button" onClick={() => { nev('/');setop(!isop) }}><a href="#about">About us</a></button>
            </div>}
        </div>
    </nav>);
}

export default Nav;