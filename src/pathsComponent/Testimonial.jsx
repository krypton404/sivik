import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="image"></div>
      <div className="comments">
        <div class="section-tittle section-tittle2 mb-25">
          <h2>Testimonial</h2>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
        </div>
        <div>
          <div
            class="single-testimonial position-relative slick-slide"
            style={{ width: "696px" }}
            tabindex="-1"
            role="tabpanel"
            id="slick-slide20"
            aria-describedby="slick-slide-control20"
            data-slick-index="0"
            aria-hidden="true"
          >
            <div class="testimonial-caption">
              <p>
                "The automated process starts as soon as your clothe go into the
                machine. This site outcome is gleaming clothe. Placeholder text
                commonly used. In publishing and graphic.
              </p>
            </div>

            <div class="testimonial-founder d-flex align-items-center">
              <div class="founder-img"></div>
              <div class="founder-text">
                <span>Robart Brown</span>
                <p>Creative designer at Colorlib</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
