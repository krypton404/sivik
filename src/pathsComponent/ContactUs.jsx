import "./ContactUs.css";
import arrow from "../assets/img/services/right-arrow.svg";

const ContactUs = () => {
  return (
    <>
      <div className="contactusred"></div>
      <div className="contactus">
        <div class="content">
          <h2>Any help needed?</h2>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "red",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "40px",
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
            Contact Us <img src={arrow} />
          </a>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
