import "./Why.css";
import arrow from "../assets/img/services/right-arrow.svg";
const Why = () => {
  return (
    <div className="why">
      <div className="why-wrapper">
        <div className="why-choose-us">WHY CHOOSE US</div>
        <div>
          <div>
            <h2>We Are Largest Independent Manufacturing Company</h2>
            <p class="about-cap-top">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
          </div>
          <div className="numbers">
            <div>
              <div className="number">450+</div>
              <div class="pera-count">
                <p>Successfully completed projects</p>
              </div>
            </div>
            <div>
              <div className="number">800</div>
              <div class="pera-count">
                <p>Highly specialised employees</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "red", width: "170px", display: "flex" }}
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
              Learn More <img src={arrow} />
            </a>
          </div>
        </div>
      </div>
      <div className="video"></div>
    </div>
  );
};
export default Why;
