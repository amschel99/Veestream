import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import {Link} from "react-router-dom"
import { Typography } from "@mui/material";
function Navbar(): JSX.Element {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = (): void => {
    if (navRef.current !== null) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header>
      <Typography sx={{color:'yellow', textDecoration:'none'}} variant='h5' component={Link} to='/'>Veestream</Typography>
  
     
      <nav ref={navRef}>
        <a href="/usecases">Use cases</a>
        <a href="https://rapidapi.com/kariukiamschel9/api/veestream2">Documentation</a>
        <a href="https://rapidapi.com/kariukiamschel9/api/veestream2/pricing">Pricing</a>
        <a href="mailto:support@veestream.tech">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
