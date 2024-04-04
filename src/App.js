import "./App.css";
import Home from "./components/home";
import "./components/home.css";
import logo from "./assets/icons/letter-d.png";
import contactLogo from "./assets/icons/chat-4-line.png";
import { useRef } from "react";
import AboutMe from "./components/about-me";
import Footer from "./components/footer";
import menuIcon from "./assets/icons/menu-line.png"

function App() {
  const sectionRef = useRef(null);
  const sectionAboutRef = useRef(null);
  const sectionPortfolioRef = useRef(null);

  const scrollToHome = () => {
    window.scrollTo(0, 0);
  };
  const scrollToAbout = () => {
    sectionAboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    sectionAboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    sectionPortfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className={`sticky-top top-0 bg-black`}>
        <nav className="navbar px-lg-5 px-3">
          <img src={logo} alt="logo" className="logo" width={"60px"} />
          <div className=" d-sm-block d-none">
            <span className="menuListItem mx-lg-4 mx-2" onClick={scrollToHome}>
              {" "}
              Home
            </span>
            <span className="menuListItem mx-lg-4 mx-2" onClick={scrollToAbout}>
              {" "}
              About{" "}
            </span>
            <span
              className="menuListItem mx-lg-4 mx-2"
              onClick={scrollToSkills}
            >
              {" "}
              Skills
            </span>
            <span
              className="menuListItem mx-lg-4 mx-2"
              onClick={scrollToPortfolio}
            >
              {" "}
              Portfolio
            </span>
          </div>

          <a
            href="tel:+91 9513084360"
            className="contactBtn mx-1 p-2 d-sm-block d-none "
          >
            <img
              src={contactLogo}
              alt="logo"
              width={"19px"}
              className="contactImg me-2 "
            />
            Contact Me
          </a>



          <div className='d-sm-none d-flex justify-content-end  '>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src={menuIcon} width={"15px"} height={"15px"} alt='' /></button>

            <div class="offcanvas offcanvas-end offcanvasBackground" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h4 className='offcanvasHeading' id="offcanvasRightLabel ">Portfolio</h4>

                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">

                <ul className='text-white'>
                  <li className="canvasOptions text-white mx-lg-4 mx-2" onClick={scrollToHome}>
                    Home
                  </li>
                  <li className="canvasOptions text-white mx-lg-4 mx-2" onClick={scrollToAbout}>
                    About
                  </li>
                  <li className="canvasOptions text-white mx-lg-4 mx-2" onClick={scrollToSkills}>
                    Skills
                  </li>
                  <li className="canvasOptions text-white mx-lg-4 mx-2" onClick={scrollToPortfolio}>
                    Portfolio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>




      </div>




      <div ref={sectionRef}>
        <Home />
      </div>
      <div ref={sectionAboutRef}>
        <AboutMe />
      </div>
      <div ref={sectionPortfolioRef}>
        <Footer />
      </div>

    </div>
  );
}

export default App;
