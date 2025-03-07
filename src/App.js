import { IoIosNavigate } from "react-icons/io";
import { MdEmail, MdOutlineCall } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { LiaCopyrightSolid } from "react-icons/lia";
import AskMeSection from "./components/Askme";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectFilter from "./components/Askme/Projects";

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
        <div
          className="about-me-container mb-2 p-2 rounded mt-5 pt-4"
          id="aboutMe"
        >
          <h2 className="text-center text-info">About Me</h2>
          <ul className="about-me-ul m-1">
            <li>
              I am Karthikeya from Karimnagar, Telangana. I hold an MBA in Human
              Resource Management (2024) and a Bachelor of Commerce in{" "}
              <b style={{ fontFamily: "Perpetua" }}>Computer Applications</b>{" "}
              (2022), blending business knowledge with a growing passion for
              technology.
            </li>
            <li>
              Immersing myself in Nxtwave’s cutting-edge curriculum has been
              pivotal in shaping me into a proficient full-stack developer,
              mastering MERN technologies like Node.js, React.js, and MongoDB
              while honing my ability to build scalable, user-centric solutions.
              <br />
              On top of that, I mastered essential Developer foundations,
              including core{" "}
              <b style={{ fontFamily: "Perpetua" }}>
                Computer science concepts, seamless Collaboration with Git, and
                efficient Command line navigation.
              </b>
            </li>
            <li>
              My journey into technology stems from a deep-seated enthusiasm for
              problem-solving and innovation. Equipped with expertise in
              programming and frontend development,{" "}
              <b style={{ fontFamily: "Perpetua" }}>
                I have seamlessly transitioned my focus toward creating
                impactful software solutions.
              </b>{" "}
            </li>
            <li>
              <b style={{ fontFamily: "Perpetua" }}>
                As a dedicated MERN stack developer,{" "}
              </b>{" "}
              I am eager to contribute my skills in full-stack, backend, or
              frontend development. I aim to collaborate with dynamic teams,
              drive technological progress, and craft innovative solutions that
              redefine user experiences.
            </li>
          </ul>
        </div>
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
          <ul style={{ listStyle: "disc" }} className="text-black">
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
              style={{ listStyle: "decimal" }}
              className="text-dark about-me-ul"
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
        <div className="my-skills-container mb-4 p-2" id="mySkills">
          <h2 className="text-center text-info">My Skills</h2>
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620556/Back-end_Development_bfh3ma.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Backend"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620774/Databases_woyeqq.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Database"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1727620964/Front-end_Development_m9qjx8.png"
                  className="d-block w-100"
                  style={{ borderRadius: "8px" }}
                  alt="Frontend"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
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
