import React from 'react'
import imgs from "../assets/images/skills.jpg";
import ExperiImgs from "../assets/images/experience.jpg";
import EducImgs from "../assets/images/education.jpg";

const AboutMe = () => {
    return (
        <div className="d-flex justify-content-center ">
            <div className="skillsContainer rounded-5 p-5">
                <div className="containerText aa">About Me</div>
                <p className="aboutText">
                    I am Dhanush I have completed BBA with CGPA of 6.9. Later on I had
                    taken Almnd Full Stack Development Certification Course which
                    spanned 16 weeks
                </p>
                <div className="  d-flex justify-content-center  rounded-5 ">
                    <div className=" d-xl-flex  gap-5 cardList">
                        <div className="work">
                            <img
                                className="rounded-3 cardSkills"
                                src={imgs}
                                alt="images"
                                width={"280px"}
                                height={"350px"}
                            />
                            <div className="layer">
                                <h3> Skills </h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>ReactJS</li>
                                    <li>JavaScript</li>
                                    <li>ExpressJS</li>
                                    <li>NodeJS</li>
                                    <li>PSQL</li>
                                    <li>Postman</li>
                                </ul>
                            </div>
                        </div>
                        <div className="work">
                            <img
                                className="rounded-3 cardExperience"
                                src={ExperiImgs}
                                alt="images"
                                width={"280px"}
                                height={"350px"}
                            />
                            <div className="layer">
                                <h3> Experience </h3>
                                <p className="experiText">
                                    I have completed a full-stack development course in almond
                                    in a duration of 4 months.
                                </p>
                            </div>
                        </div>
                        <div className="work">
                            {" "}
                            <img
                                className="rounded-3 cardSkills"
                                src={EducImgs}
                                alt="images"
                                width={"280px"}
                                height={"350px"}
                            />
                            <div className="layer">
                                <h3> Education </h3>
                                <p>
                                    <span className="headingText">Bachelor's degree </span>{" "}
                                    <br />
                                    BBA(Bachelor of Business Administration)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe