import React from "react";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";
// import logo from "../../images/Practiwiz-logo.png";
const Footer = () => {
  return (
    <>
      <section className="footer1">
        <div
          className="center addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <aside className="footer_menu">
            <ul>
              {/* <li>
                <img src={logo} alt="logo" />
              </li> */}
              <li>
                <a href="/about-us">About Us</a>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Useful Links</a>
                <ul className="footerMenuSub">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">IT Training</a>
                  </li>
                  <li>
                    <a href="#">Business Training</a>
                  </li>
                  <li>
                    <a href="#">Methodology</a>
                  </li>
                  <li>
                    <a href="/mentors-club">Mentor Club</a>
                  </li>
                  <li>
                    <a href="/jobs">Jobs</a>
                  </li>
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li>
                <a href="">Useful Links</a>
                <ul className="footerMenuSub">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">IT Training</a>
                  </li>
                  <li>
                    <a href="#">Business Training</a>
                  </li>
                  <li>
                    <a href="#">Methodology</a>
                  </li>
                  <li>
                    <a href="/mentors-club">Mentor Club</a>
                  </li>
                  <li>
                    <a href="/jobs">Jobs</a>
                  </li>
                  <li>
                    <a href="/privacy-policies">Privacy & Policies</a>
                  </li>
                  <li>
                    <a href="/terms-conditions">Terms & Conditions</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Contact Us</a>
                <p>
                  <i className="fa-solid fa-location-dot"></i> B 1/5 Safdarjung
                  Enclave Africa Avenue New Delhi Pin-110029 <br />
                  <i className="fa-solid fa-phone"></i> (120) 3569310
                  <br />
                  <i className="fa-solid fa-envelope"></i> contact@practiwiz.com
                </p>
                <p></p>
                <ul className="card">
                  <li>
                    <img src={card1} alt="" />
                  </li>
                  <li>
                    <img src={card2} alt="" />
                  </li>
                  <li>
                    <img src={card3} alt="" />
                  </li>
                  <li>
                    <img src={card4} alt="" />
                  </li>
                  <li>
                    <img src={card5} alt="" />
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <footer>
        <div className="center addAnimate" data-class="fadeInBottom">
          <aside>
            <h5>Follow Us on</h5>
            <div className="socialMedia">
              <a href="" target="_blank" className="facebook"></a>
              <a href="" target="_blank" className="twitter"></a>
              <a href="" target="_blank" className="link"></a>
              <a href="" target="_blank" className="youtube"></a>
              <a href="" target="_blank" className="ins"></a>
            </div>
          </aside>
          <aside className="copyright">
            Practiwiz &copy; 2022 | This site is developed by Practiwiz Team.
            All rights reserved.
            <ul>
              <li>
                <a href="">Disclaimer </a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;
