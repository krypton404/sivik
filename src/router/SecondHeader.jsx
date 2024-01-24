import "./SecondHeader.css";
import logo from "../assets/img/logo/logo.png";
import { useState } from "react";
const SecondHeader = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div class="second-header">
      <div class="logo">
        <a href="index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <div class="second">
        <div class="main-menu f-right d-none d-lg-block">
          <div>
            <a className={"hover-underline-animation"} href="/">
              Home
            </a>
          </div>
          <div>
            <a className={"hover-underline-animation"} href="/service">
              Services
            </a>
          </div>
          <div>
            <a className={"hover-underline-animation"} href="project.html">
              Projects
            </a>
          </div>
          <div>
            <a className={"hover-underline-animation"} href="about.html">
              About
            </a>
          </div>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className={"hover-underline-animation"} href="blog.html">
              Blog
            </a>
            {isDropdownVisible && (
              <div class="submenu">
                <div>
                  <a href="blog.html">Blog</a>
                </div>
                <div>
                  <a href="blog_details.html">Blog Details</a>
                </div>
                <div>
                  <a href="elements.html">Elements</a>
                </div>
              </div>
            )}
          </div>
          <div>
            <a className={"hover-underline-animation"} href="contact.html">
              Contact
            </a>
          </div>
          <div>
            <a>&#x1F50E;&#xFE0E;</a>
          </div>
          <div className={"freeQuote"}>
            <div>Get Free Quote</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
