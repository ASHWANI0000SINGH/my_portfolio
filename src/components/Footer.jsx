import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>


        <h2>Ashwani Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
        <span style={{font:"message-box"}}>@all right reserved 2022</span>
      </div>

      <aside>
        {/* <h2>Social Media</h2> */}

        <article>
          <a href="https://twitter.com/@ashwani74508943" target={"blank"}>
            <BsTwitter />
          </a>
          <a href="https://instagram.com/singhashwanikumar793" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ASHWANI0000SINGH" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;