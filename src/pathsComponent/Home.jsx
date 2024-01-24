import bg from "../assets/img/background/background.jpg";
import arrow from "../assets/img/services/right-arrow.svg";
import redarrow from "../assets/img/services/right-arrow-red.svg";
import services1 from "../assets/img/services/services1.svg";
import services2 from "../assets/img/services/services2.svg";
import services3 from "../assets/img/services/services3.svg";
import services4 from "../assets/img/services/services4.svg";
import "./Home.css";
import { useState } from "react";
import Planning from "./Planning";
import Why from "./Why";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import ContactInfo from "./ContactInfo";
const First = () => {
  return (
    <div
      className="firstRoot"
      style={{ backgroundImage: `url(${bg})`, width: "100%", height: 680 }}
    >
      <div class="hero-caption text-center">
        <h1
          data-animation="fadeInUp"
          data-delay=".4s"
          class=""
          style={{ animationDelay: "0.4s" }}
        >
          Best technology and awesome service we offer
        </h1>
        <p
          data-animation="fadeInUp"
          data-delay=".4s"
          class=""
          style={{ animationDelay: "0.4s" }}
        >
          Ullamcorper fringi tortor consec adipis elit sed do eiusmod tempor.
        </p>
        <a
          href="services.html"
          class="btn_10 hero-btn"
          data-animation="bounceIn"
          data-delay=".8s"
          tabindex="0"
          style={{ animationDelay: "0.4s" }}
        >
          Check Our Services <img src={arrow} />
        </a>
      </div>
    </div>
  );
};

const Second = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  return (
    <div className="secondRoot" style={{ height: 600 }}>
      <div>
        <span>Services</span>
        <h2>
          A height level service provider that recommended to any companies
        </h2>
      </div>
      <div className="services">
        <div
          onMouseEnter={() => {
            setIsVisible1(true);
          }}
          onMouseLeave={() => {
            setIsVisible1(false);
          }}
        >
          <div>
            <img src={services1} />
          </div>
          <div>
            <h5>Power and Energ</h5>
            <a className={isVisible1 ? "visible" : "hidden"} hrer={"#"}>
              Learn More <img src={redarrow} />
            </a>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsVisible2(true);
          }}
          onMouseLeave={() => {
            setIsVisible2(false);
          }}
        >
          <div>
            <img src={services2} />
          </div>
          <div>
            <h5>Power and Energ</h5>
            <a className={isVisible2 ? "visible" : "hidden"} hrer={"#"}>
              Learn More <img src={redarrow} />
            </a>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsVisible3(true);
          }}
          onMouseLeave={() => {
            setIsVisible3(false);
          }}
        >
          <div>
            <img src={services3} />
          </div>
          <div>
            <h5>Power and Energ</h5>
            <a className={isVisible3 ? "visible" : "hidden"} hrer={"#"}>
              Learn More <img src={redarrow} />
            </a>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsVisible4(true);
          }}
          onMouseLeave={() => {
            setIsVisible4(false);
          }}
        >
          <img src={services4} />
          <div>
            <h5>Power and Energ</h5>
            <a className={isVisible4 ? "visible" : "hidden"} hrer={"#"}>
              Learn More <img src={redarrow} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <First />
      <Second />
      <Planning />
      <Why />
      <Projects />
      <Testimonial />
      <ContactUs />
      <ContactInfo />
    </>
  );
};
export default Home;
