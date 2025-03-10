import { IoIosNavigate } from "react-icons/io";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { LiaCopyrightSolid } from "react-icons/lia";
import AskMeSection from "./components/Askme";
import Skills from "./components/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectFilter from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="ultimate-container container-fluid d-flex flex-column justify-content-center align-items-center">
        <nav className="nav-container navbar bg-body-tertiary fixed-top navbar-white">
          <div className="container-fluid">
            <h1
              className="my-name name-reveal"
              style={{ fontFamily: "Perpetua" }}
            >
              <span data-text="Karthikeya">Karthikeya </span>
              <span data-text="Doosa">Doosa</span>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Hey there,
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link active"
                      href="#aboutMe"
                      id="navbar-about"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#myExperience"
                      id="navbar-skills"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myResume"
                      id="navbar-resume"
                    >
                      Check My Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      aria-current="page"
                      href="#mySkills"
                      id="navbar-skills"
                    >
                      My Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myProjects"
                      id="navbar-projects"
                    >
                      My Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#myCert"
                      id="navbar-hire-me"
                    >
                      My Certifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="local-anchor-el nav-link"
                      href="#hireMe"
                      id="navbar-hire-me"
                    >
                      Want to Hire me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <About />
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="mb-2 p-2">
          <h2 className="text-center text-info">Expertise Offered</h2>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal">
              <span data-text="Full">Full </span>
              <span data-text="Stack">Stack </span>
              <span data-text="Developer">Developer</span>
            </p>
            <p className="text-reveal">
              <span data-text="MERN ">MERN </span>
              <span data-text="Stack">Stack </span>
              <span data-text="Developer">Developer</span>
            </p>
          </div>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal">
              <span data-text="Software">Software </span>
              <span data-text="Developer">Developer</span>
            </p>
            <p className="text-reveal">
              <span data-text="Web">Web </span>
              <span data-text="Developer">Developer</span>
            </p>
          </div>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal">
              <span data-text="Back">Back </span>
              <span data-text="End">End </span>
              <span data-text="Developer">Developer</span>
            </p>
            <p className="text-reveal">
              <span data-text="Front">Front </span>
              <span data-text="End">End </span>
              <span data-text="Developer">Developer</span>
            </p>
          </div>
          <div className="expertise-types m-1" style={{ fontFamily: "Roboto" }}>
            <p className="text-reveal">
              <span data-text="Application">Application </span>
              <span data-text="Developer">Developer</span>
            </p>
            <p className="text-reveal">
              <span data-text="React">React </span>
              <span data-text="Native">Native </span>
              <span data-text="Developer">Developer</span>
            </p>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-black rounded border border-light"
          style={{ backgroundColor: "#e1f1fa", width: "96vw" }}
          id="myExperience"
        >
          <h2 className="text-center text-info">Experience</h2>
          <div className="text-center pl-4 pr-4 p-3 w-100">
            <h4 className="experience-header">
              <b>Teaching Assistant - Nxtwave</b>
            </h4>
            <h6 className="experience-header">6 Months</h6>
          </div>
          <ul
            style={{
              listStyle: "disc",
              font: "22px Garamond, Perpetua",
              lineHeight: "1.6",
            }}
            className="text-black"
          >
            <li className="experience-li">
              As a Teaching Assistant for the CCBPian community, I offered
              expert mentorship in the MERN stack, helping learners navigate its
              challenges with ease. My focus was on simplifying complex
              concepts, debugging intricate issues, and fostering critical
              thinking to enable students to solve problems independently.
            </li>
            <li className="experience-li">
              With over 300+ queries resolved, I made learning engaging and
              practical, equipping students with confidence and real-world
              skills.
            </li>
          </ul>
          <div className="text-justify">
            <h4 style={{ color: "#4445ea", fontFamily: "Lora" }}>
              <b>Skills Acquired:</b>
            </h4>
            <ol
              style={{
                listStyle: "decimal",
                font: "20px Garamond, Perpetua",

                fontWeight: "600",
              }}
              className="text-dark"
            >
              {" "}
              <li>Debugging & troubleshooting</li>
              <li>Addressed full-stack queries with precision</li>
              <li>Problem-solving & analytical thinking</li>{" "}
              <li>Professional and a refined touch of formal response</li>
            </ol>
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-black rounded border border-black"
          id="myResume"
          style={{ backgroundColor: "#F6F6C8", width: "94vw" }}
        >
          <h2 className="text-center text-info">My Resume</h2>
          <h6
            className="m-4 resume-text text-center"
            style={{ fontWeight: "600" }}
          >
            Download My Resume:{" "}
            <a
              href="https://drive.google.com/file/d/1zc1uR0DR8SqljTwQRZuPCf--jORk-0fS/view?usp=sharing"
              className="resume-el"
            >
              <IoIosNavigate />
            </a>
          </h6>
          <div className="text-center pb-2">
            <marquee
              behavior="scroll"
              direction="right"
              scrollamount="8"
              width="40%"
            >
              <h4 className="text-center text-warning open-to-relocation">
                Open to Relocation
              </h4>
            </marquee>
          </div>
          <h4 className="mb-3 text-center">I'm flexible regarding job types</h4>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <Skills />
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div className="mb-2 p-4" id="myProjects">
          <h2 className="text-center text-info">My Projects</h2>
          <ProjectFilter />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="mb-2 p-4 text-dark rounded border border-dark"
          id="myCert"
          style={{ width: "94vw", backgroundColor: "#e1f1fa" }}
        >
          <h2 className="text-center text-info">My Certifications</h2>
          <div className="cert-container">
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840048/Screenshot_1099_m8bbkf.png"
              alt="IRC"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840467/Screenshot_1100_tb3izq.png"
              alt="React"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840499/Screenshot_1103_pktdia.png"
              alt="Node"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840532/Screenshot_1104_ocewaj.png"
              alt="Javascript"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395354/Screenshot_1113_zdqxtx.png"
              alt="Dynamic web application"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1736395265/Screenshot_1112_bv7wda.png"
              alt="Developer foundations"
              className="cert-images"
            />

            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840562/Screenshot_1101_w9wwmb.png"
              alt="Programming with Python"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1735840597/Screenshot_1102_mwwqvt.png"
              alt="Sql database"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739202289/Screenshot_1159_g9nela.png"
              alt="Responsive web application"
              className="cert-images"
            />
            <img
              src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1739168961/Screenshot_1156_m4mwqc.png"
              alt="Static web application"
              className="cert-images"
            />
          </div>
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div>
          <AskMeSection className="m-2" />
        </div>
        <hr style={{ width: "80%", border: "2px solid seashell" }} />
        <div
          className="want-to-hire-container mb-2 p-2 pb-1"
          id="hireMe"
          style={{ backgroundColor: "#F6F6C8" }}
        >
          <h2 className="text-center text-info">Want to Hire Me</h2>
          <div className="button-icons-container mt-4">
            <button type="button" className="button-icons">
              <a className="anchor-el" href="tel:9182318580">
                <MdOutlineCall />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="mailto:dkarthikeya888@gmail.com">
                <MdEmail />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a
                className="anchor-el"
                href="http://www.linkedin.com/in/karthikeya-doosa-210a42244"
              >
                <BiLogoLinkedinSquare />
              </a>
            </button>
            <button type="button" className="button-icons">
              <a className="anchor-el" href="https://github.com/Karthikeya-88">
                <VscGithub />
              </a>
            </button>
          </div>
        </div>
        <div className="text-center text-white m-0 p-0 d-flex justify-content-center align-items-center">
          <p style={{ fontFamily: "Perpetua" }}>
            Copyright{" "}
            <span>
              <LiaCopyrightSolid />{" "}
            </span>{" "}
            2025 Karthikeya. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
