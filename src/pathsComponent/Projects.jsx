import { useRef } from "react";
import bg from "../assets/img/background/bg3.jpg";

import arrow from "../assets/img/services/right-arrow.svg";
import "./Projects.css";

const Projects = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  return (
    <div className="projects">
      <div className="project-row">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={(e) => {
            ref1.current.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            ref1.current.style.opacity = 0;
          }}
        >
          <div ref={ref1}>
            <a
              href="services.html"
              class="btn_10 hero-btn"
              data-animation="bounceIn"
              data-delay=".8s"
              tabindex="0"
              style={{
                textDecoration: "none",
                color: "white",
                animationDelay: "0.4s",
                padding: "20px 0px 20px 20px",
              }}
            >
              Check Our Services <img src={arrow} />
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={(e) => {
            ref2.current.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            ref2.current.style.opacity = 0;
          }}
        >
          <div ref={ref2}>
            <a
              href="services.html"
              class="btn_10 hero-btn"
              data-animation="bounceIn"
              data-delay=".8s"
              tabindex="0"
              style={{
                textDecoration: "none",
                color: "white",
                animationDelay: "0.4s",
                padding: "20px 0px 20px 20px",
              }}
            >
              Check Our Services <img src={arrow} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={(e) => {
            ref3.current.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            ref3.current.style.opacity = 0;
          }}
        >
          <div ref={ref3}>
            <a
              href="services.html"
              class="btn_10 hero-btn"
              data-animation="bounceIn"
              data-delay=".8s"
              tabindex="0"
              style={{
                textDecoration: "none",
                color: "white",
                animationDelay: "0.4s",
                padding: "20px 0px 20px 20px",
              }}
            >
              Check Our Services <img src={arrow} />
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: "100%",
            height: "100%",
          }}
          onMouseEnter={(e) => {
            ref4.current.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            ref4.current.style.opacity = 0;
          }}
        >
          <div ref={ref4}>
            <a
              href="services.html"
              class="btn_10 hero-btn"
              data-animation="bounceIn"
              data-delay=".8s"
              tabindex="0"
              style={{
                textDecoration: "none",
                color: "white",
                animationDelay: "0.4s",
                padding: "20px 0px 20px 20px",
              }}
            >
              Check Our Services <img src={arrow} />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "red",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="services.html"
          class="btn_10 hero-btn"
          data-animation="bounceIn"
          data-delay=".8s"
          tabindex="0"
          style={{
            textDecoration: "none",
            color: "white",
            animationDelay: "0.4s",
            padding: "20px 0px 20px 20px",
          }}
        >
          More Project <img src={arrow} />
        </a>
      </div>
    </div>
  );
};
export default Projects;
