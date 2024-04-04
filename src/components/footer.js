import React from "react";
import "./skills.css";
import faceIcon from "../assets/icons/facebook-icon.svg";
import instaIcon from "../assets/icons/insta-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import whatsIcon from "../assets/icons/whats-icon.svg";
import linke from "../assets/icons/linkedin-icon.svg";
import phone from "../assets/icons/phone-icon.svg";
import mailIcon from "../assets/icons/mail-icon.svg";

const Footer = () => {
    return (
        <div className="my-5 mx-5 px-xl-5" id="contact">
            <div className="contactContainer">
                <div className="row">
                    <div className="contactLeft ">
                        <h1 className="subtitle"> Contact Me </h1>
                        <p>
                            <img className="emailImg mx-1 me-2" src={mailIcon} width={"23px"} alt="" />
                            dhanushdhanu95130@gmail.com
                        </p>
                        <p>
                            <img className="phoneImg mb-1" src={phone} width={"26px"} alt="" />{" "}
                            9513084360
                        </p>
                        <div className="socialIcon d-flex">
                            <a
                                className="w-75 "
                                href="https://www.facebook.com/ragnardhanush/about"
                            >
                                <img src={faceIcon} width={"38px"} alt="facebook" />{" "}
                            </a>
                            <a className="w-75 " href="https://twitter.com/Dhanush4555">
                                <img src={twitterIcon} alt="twitter" width={"38px"} />
                            </a>
                            <a
                                className="w-75 "
                                href=" https://www.instagram.com/invites/contact/?i=118zmd8bfm0ru&utm_content=mwft8tn"
                            >
                                <img src={instaIcon} width={"38px"} alt="Instagram" />{" "}
                            </a>
                            <a className="w-75 " href="https://wa.me/qr/5Z3AAA4KRRGIF1 ">
                                <img src={whatsIcon} width={"38px"} alt="whatsApp" />{" "}
                            </a>
                            <a
                                className="w-100 "
                                href="https://www.linkedin.com/in/dhanush-dhanu-66b08a180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                            >
                                <img src={linke} width={"38px"} alt="linkedIn" />
                            </a>
                        </div>
                        <div className="h-100 mt-5">
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
                    <div className="contactRight">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />
                            <textarea
                                name="Message"
                                rows="6"
                                placeholder="Your Message"
                            ></textarea>
                            <button className="submitBtn text-white" type="submit">
                                {" "}
                                SUBMIT{" "}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
