import "./Header.css";
const Header = () => {
  const mobile = "+10 (78) 675-9064";
  const email = "technology@industry.com";
  const time = "Sun - Fri (10AM - 7PM)";
  return (
    <div className="header">
      <div>
        <ul>
          <li className="bar">
            <div>{mobile}</div>
          </li>
          <li className="bar">
            <div>{email}</div>
          </li>
          <li className="bar">
            <div>{time}</div>
          </li>
        </ul>
      </div>
      <div class="header-info-right d-none d-md-block">
        <ul class="header-social">
          <li>
            <a href="#">
              <i class="fab fa-facebook">F</i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i class="fab fa-instagram">I</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin-in">L</i>
            </a>
          </li>
          <li>
            {" "}
            <a href="#">
              <i class="fab fa-youtube">Y</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
