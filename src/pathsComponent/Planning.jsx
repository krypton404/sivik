import bg from "../assets/img/background/bg3.jpg";
import arrow from "../assets/img/services/right-arrow.svg";
const Planning = () => {
  return (
    <div
      //   background-image={`url(${bg})`}
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        height: "700px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }}>
        <div style={{ backgroundColor: "white", padding: "50px" }}>
          <h5>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#000",
                // textTransform: "capitalize",
                marginBottom: "30px",
                display: "block",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "red";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#000";
              }}
            >
              We have all your needs, from micro macro planning
            </a>
          </h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <p class="emargenc-cap">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <div
            style={{ backgroundColor: "red", width: "230px", display: "flex" }}
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
              Check Our Services <img src={arrow} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Planning;
