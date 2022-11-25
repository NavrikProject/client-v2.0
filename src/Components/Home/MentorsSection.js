import React from "react";
import mentorImage1 from "../../images/mentors1.jpg";
import mentorImage2 from "../../images/mentors2.jpg";
import mentorImage3 from "../../images/mentors3.jpg";
import mentorImage4 from "../../images/mentors4.jpg";
import Carousel from "react-elastic-carousel";

const MentorsSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <section className="mentors homeSec6">
      <div
        className="center addAnimate features-project-right2"
        data-class="fadeInBottom"
      >
        <h4>Practiwiz</h4>
        <h2>Our Featured Mentors</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>

        <ul
          className="whyGoForSf_slid delay3 addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <Carousel breakPoints={breakPoints}>
            <li className="ps_item auto">
              <aside>
                <img src={mentorImage1} alt="" />
              </aside>
              <h3>Md Dalwar Hossain</h3>
              <h4>Web Developer</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </li>
            <li className="ps_item auto">
              <aside>
                <img src={mentorImage2} alt="" />
              </aside>
              <h3>Priyanka Chowdhury</h3>
              <h4>Web Analyzer</h4>

              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </li>
            <li className="ps_item auto">
              <aside>
                <img src={mentorImage3} alt="" />
              </aside>
              <h3>Nazma Begum</h3>
              <h4>Digital Marketer</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </li>
            <li className="ps_item auto">
              <aside>
                <img src={mentorImage4} alt="" />
              </aside>
              <h3>Soneya Akther</h3>
              <h4>SEO Expert</h4>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </li>
            <li className="ps_item auto">
              <aside>
                <img src={mentorImage2} alt="" />
              </aside>
              <h3>Priyanka Chowdhury</h3>
              <h4>Web Analyzer</h4>

              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </li>
          </Carousel>
        </ul>

        <div className="more">View All Mentors</div>
      </div>
    </section>
  );
};

export default MentorsSection;
