import "./ContactInfo.css";

import logo from "../assets/img/logo/logo2.png";
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-row">
        <div>
          <div class="logo">
            <a href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
          <div class="footer-tittle">
            <div class="footer-pera">
              <p>
                Duis aute irure dolor inasfa reprehenderit in voluptate velit
                esse cillum
              </p>
            </div>
            <ul class="mb-20">
              <li class="number">
                <a href="#">10 (87) 738-3940</a>
              </li>
              <li class="number2">
                <a href="#">contact@carwash.com</a>
              </li>
            </ul>

            <ul class="footer-social">
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://bit.ly/sai4ull">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-tittle">
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
