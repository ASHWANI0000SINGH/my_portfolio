import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypewriterClass from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import  me from "../assets/me.png"
const Home = () => {
  const clientCount=useRef(null);
  const projectCount=useRef(null);

  const animations = {
    h2: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  const animationClientsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  return (
    <div id="home">

    <section>
      <div>
        <motion.h2 {...animations.h1}>
          Hi, I Am <br /> Ashwani Singh
        </motion.h2>

        <TypewriterClass
          options={{
            strings: ["A Developer", "A Designer", "A Creator"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: "typewriterpara",
          }}
        />

        <div>
          <a href="mailto:singhashwanikumar793@gmail.com">Hire Me</a>
          <a href="#work">
            Projects <BsArrowUpRight />
          </a>
        </div>

        <article>
          <p>
            +
            { (
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            )}
          </p>
          <span>Clients Worldwide</span>
        </article>

        <aside>
          <article>
            <p>
              +
              
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  100
                </motion.span>
              
            </p>
            <span>Projects Done</span>
          </article>

          <article data-special>
            <p>Contact</p>
            <span>singhashwanikumar793@gmail.com</span>
          </article>
        </aside>
      </div>

    </section>
    <section>
      <img src={me} alt="Ashwani" />
    </section>
    <BsChevronDown />
  </div>
);
};


export default Home;
