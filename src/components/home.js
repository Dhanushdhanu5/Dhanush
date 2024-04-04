import React from "react";
import "./home.css";
import bagIcon from "../assets/icons/icon-bag.png";

const Home = () => {

  return (
    <div className="my-5">
      <section id="intro">
        <div className="introContent">
          <span className="hello"> Hello , </span> <br />
          <span className="introText">
            I'm <span className="introName"> Dhanush k c </span> <br />
            <span className="sencodText" >Fullstack Developer</span>
          </span>
          <p className="mainText" width={"620px"}>
            A highly driven and meticulous student looking for an developing
            role in software field with room for advancement .Having a strong
            dedication on lifelong learning and improvement ,good analytical and
            communication ability to use my knowledge and ability to benefit the
            organisation .looking for an opportunity to put what I have learn in
            the classroom to use and get real word experience in the software
            sector
          </p>
          <div className="d-flex align-items-center gap-4">
            <button className="button">
              <img src={bagIcon} alt="icon" /> Hire me
            </button>
            <div className="h-100">
              <a
                href="https://drive.google.com/file/d/1DJXb6Y4GBgK6rOMb7aKZUDFuAiZWVXUO/view?usp=sharing"
                target="blank"
                download
                className="button2"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
