import React from "react";
import userImage1a from "../../images/user1a.jpg";
import userImage2a from "../../images/user2a.jpg";
import userImage3a from "../../images/user3a.jpg";
import Carousel from "react-elastic-carousel";

const TestimonialSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <section className="testimonials homeSec3">
      <figure className="addAnimate" data-class="fadeIn" data-aos="fade-in">
        <div
          className="center addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <h4>Testimonial</h4>
          <h2>What Are Students Says</h2>
          <>
            <ul
              className="productSlide delay3 addAnimate"
              data-class="fadeInBottom"
            >
              <Carousel breakPoints={breakPoints}>
                <li className="ps_item auto">
                  <h3>Testimonial Name</h3>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <div>
                    <aside>
                      <img src={userImage1a} alt="" />
                    </aside>
                    <p>
                      Mike Fisher<span>Owner Ford</span>
                    </p>
                  </div>
                </li>
                <li className="ps_item auto">
                  <h3>Testmonial Name</h3>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <div>
                    <aside>
                      <img src={userImage2a} alt="" />
                    </aside>
                    <p>
                      Mike Fisher<span>Owner Ford</span>
                    </p>
                  </div>
                </li>
                <li className="ps_item auto">
                  <h3>Testmonial Name</h3>
                  <div className="star">
                    <i className="fa fa-star checked"></i>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <div>
                    <aside>
                      <img src={userImage3a} alt="" />
                    </aside>
                    <p>
                      Mike Fisher<span>Owner Ford</span>
                    </p>
                  </div>
                </li>
                <li className="ps_item auto">
                  <h3>Testmonial Name</h3>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <div>
                    <aside>
                      <img src={userImage1a} alt="" />
                    </aside>
                    <p>
                      Mike Fisher<span>Owner Ford</span>
                    </p>
                  </div>
                </li>
              </Carousel>
            </ul>
          </>
        </div>
      </figure>
    </section>
  );
};

export default TestimonialSection;
