import React from "react";
import userImage1a from "../../images/user1a.jpg";
import userImage2a from "../../images/user2a.jpg";
import userImage3a from "../../images/shwetha-testimonial.jpeg";
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
                  <h3>JUMPSTART to RPA LIVE BOT DEVELOPMENT</h3>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p>
                    Thank you team Navrik for helping me start my RPA career. I
                    am RPA certified but lacked the real-project experience
                  </p>
                  <p>
                    Tarun sir and team guided me throughout the Practiwiz
                    programme to gain real-life project experience in which i
                    created the live Bots and interacted with customers
                  </p>
                  <div>
                    <aside>
                      <img
                        className="testimonialImage"
                        src={userImage3a}
                        alt=""
                      />
                    </aside>
                    <p>
                      Shwetha Tyagi<span>RPA Developer</span>
                    </p>
                  </div>
                </li>
                <li className="ps_item auto">
                  <h3>JUMPSTART to RPA LIVE BOT DEVELOPMENT</h3>
                  <div className="star">
                    <i className="fa fa-star checked"></i>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p>
                    Great Course!! Everyone should go for it without having
                    second thoughts.. I am RPA certified but I don't have
                    practical experience on creating the BOT's. They have helped
                    me in creating the Live BOT's.
                  </p>
                  <p>
                    Good content and explanation for beginner, with this course
                    am ready to work on live projects.
                  </p>
                  <div>
                    <aside>
                      <img
                        className="testimonialImage"
                        src={
                          "https://lh3.googleusercontent.com/a/ALm5wu0lFgzquamYfPNku2GBPG_Yv3qg826TcjP8NVFxD3I=s288-p-rw-no"
                        }
                        alt=""
                      />
                    </aside>
                    <p>
                      Mahesh Bandari<span>Full stack developer</span>
                    </p>
                  </div>
                </li>
                <li className="ps_item auto">
                  <h3>JUMPSTART to RPA LIVE BOT DEVELOPMENT</h3>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p>
                    This UI Path Application is excellent RPA it is just like
                    assigning a Command to a Robot to open my App and do
                    whatever input is assigned to it very interesting.
                  </p>
                  <p>
                    Looking forward to make use of Practiwiz and learn this tool
                    properly and make use of it in real world scenario
                  </p>
                  <div>
                    <aside>
                      <img
                        className="testimonialImage"
                        src={
                          "https://lh3.googleusercontent.com/a/ALm5wu0lFgzquamYfPNku2GBPG_Yv3qg826TcjP8NVFxD3I=s288-p-rw-n"
                        }
                        alt="img"
                      />
                    </aside>
                    <p>
                      Sai Prasad<span>Illustrator</span>
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
