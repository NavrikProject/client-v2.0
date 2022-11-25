import React from "react";
import Carousel from "react-elastic-carousel";
import jobImg1 from "../../images/job-com1.jpg";
import jobImg2 from "../../images/job-com2.jpg";
import jobImg3 from "../../images/job-com3.jpg";
const JobsSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <section className="yyu homeSec6">
      <div
        className="center addAnimate features-project-right2"
        data-class="fadeInBottom"
      >
        <h4>Practiwiz</h4>
        <h2>Featured Active Job Openings actively hiring</h2>
        <ul
          className="productSlide delay3 addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <Carousel breakPoints={breakPoints}>
            <li className="ps_item auto">
              <div>
                <aside>
                  <img src={jobImg1} alt="" />
                </aside>
                <h3>
                  Hardware Technology
                  <br />
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </h3>
              </div>
              <h3>Featured Active Job</h3>
              <h5>
                109,Midas, Sahar Plaza Complex,
                <br />
                Next to Kohinoor Hotel,
              </h5>
              <ul className="job5">
                <li>
                  <a href="">2 Opening</a>
                </li>
                <li>
                  <a href="">Follow</a>
                </li>
              </ul>
            </li>
            <li className="ps_item auto">
              <div>
                <aside>
                  <img src={jobImg2} alt="" />
                </aside>
                <h3>
                  Hardware Technology
                  <br />
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </h3>
              </div>
              <h3>Featured Active Job</h3>
              <h5>
                109,Midas, Sahar Plaza Complex,
                <br />
                Next to Kohinoor Hotel,
              </h5>
              <ul className="job5">
                <li>
                  <a href="">2 Opening</a>
                </li>
                <li>
                  <a href="">Follow</a>
                </li>
              </ul>
            </li>
            <li className="ps_item auto">
              <div>
                <aside>
                  <img src={jobImg3} alt="" />
                </aside>
                <h3>
                  Hardware Technology
                  <br />
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </h3>
              </div>
              <h3>Featured Active Job</h3>
              <h5>
                109,Midas, Sahar Plaza Complex,
                <br />
                Next to Kohinoor Hotel,
              </h5>
              <ul className="job5">
                <li>
                  <a href="">2 Opening</a>
                </li>
                <li>
                  <a href="">Follow</a>
                </li>
              </ul>
            </li>
          </Carousel>
        </ul>
        <div className="more">View All Job</div>
      </div>
    </section>
  );
};

export default JobsSection;
