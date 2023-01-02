import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Ashwani.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#experience">
        Timeline
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a>
      <a onClick={() => setMenuOpen(false)} href="#technologies">
        Technologies
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>

      <a onClick={() => setMenuOpen(false)} href="https://drive.google.com/file/d/1KnY9IXw00OsxoVZMs6R1De8_Ln3pox6j/view?usp=drivesdk">
        CV
      </a>
    </div>
    <a href="mailto:singhashwanikumar793@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;