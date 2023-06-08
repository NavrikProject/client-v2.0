import React from "react";
import {
  Div,
  Div1,
  Div2,
  Fancy,
  FlexDiv,
  H4,
  H5,
  Li,
  RegisterButton,
  Section,
  TestimonialP,
  Title,
  Title2,
} from "./SrinivasStyles";
import MentorImg from "../../../images/mentor/srinivas rm bg.png";
import Carousel from "react-elastic-carousel";
import "./MentorLanding.css";
import "./Learn.css";
import { Link } from "react-router-dom";
const SrinivasLanding = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <Section>
      <Div>
        <section id="about" class="about">
          <div class="container">
            <div class="section-title">
              <Title>FRUSTATED WITH YOUR SALARY !</Title>
              <Title2>BUT NOT SURE HOW TO GET THE ONE YOU DESERVE</Title2>
              <Title2>Book Your Slot to get your dream salary</Title2>
            </div>

            <div class="row">
              <FlexDiv class="row">
                <Div1 class="col-lg-6">
                  <ul>
                    <H5>
                      <span>GET WORLD CLASS SALARY NEGOTIATION COACHING</span>
                    </H5>
                    <Li>
                      <i class="fa fa-chevron-right"></i>Researching your market
                      value and setting your salary goals.
                    </Li>
                    <Li>
                      <i class="fa fa-chevron-right"></i> To crafting a
                      compelling case for why you deserve more money.
                    </Li>
                    <Li>
                      <i class="fa fa-chevron-right"></i> To learn skills and
                      strategies for negotiations
                    </Li>
                    <Li>
                      <i class="fa fa-chevron-right"></i> A proper guide for
                      building confidence
                    </Li>
                    <Li>
                      <i class="fa fa-chevron-right"></i> An online workshop to
                      get all what you deserve.
                    </Li>
                    <Li>
                      <i class="fa fa-chevron-right"></i> Guide you through the
                      negotiation process from start to finish
                    </Li>
                  </ul>
                  <RegisterButton class="green-round-button">
                    <a
                      href="https://www.practiwiz.com/mentors-club/individual/srinivas-rao"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register now!
                    </a>
                  </RegisterButton>
                </Div1>
                <Div2 class="c">
                  <img src={MentorImg} alt="" />
                </Div2>
              </FlexDiv>
            </div>
          </div>
        </section>
        <Fancy class="fancy col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <p>
            Has helped over 1000 professionals to achieve their professional
            goals through one-on-on @coaching sessions
          </p>
        </Fancy>
        {/* <section id="testimonials" class="testimonials">
        <div class="container position-relative">
          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item">
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="testimonial-item">
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section> */}
      </Div>
      {/* section 5 starts */}
      <div className="tatsu-nwf4XuEZuq NC oC tatsu-section-offset g">
        <div className="QC oC HB">
          <div className="tatsu-section-pad-inner">
            <div className="RC">
              <div className="dC be-preview oC tatsu-z5BTTBgRhe XC UC WC YC">
                <div className="TC j">
                  <div className="VC">
                    <div className="ZC mD oC tatsu-column-no-bg cC tatsu-p-Ph-XbPO eC j lB nB yB">
                      <div className="tatsu-column-inner gradientClass">
                        <div className="aC">
                          <div className="jC mB oB zB">
                            <div className="tatsu-module tatsu-4E2RivsYK h4 eD tatsu-title-wrap-h4 mD h">
                              <h4 className="tatsu-title hD A F H I O e j">
                                Limited Slots Available.Register Soon !
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="hC">
                          <div className="iC"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dC be-preview oC tatsu-q_hUgciB1d XC UC WC YC AB">
                <div className="TC j QB">
                  <div className="contentDivDesc">
                    <div>
                      <p>
                        This is a must-attend event for anyone who wants to
                        learn how to negotiate their salary effectively and
                        confidently. Whether you're just starting out in your
                        career or looking to make a career move, this webinar
                        will equip you with the skills and knowledge you need to
                        succeed.
                      </p>
                      <br />
                      <p>
                        Don't miss out on this valuable opportunity to take
                        control of your career and your financial future.
                        Register today for Practiwiz's "How to Negotiate Your
                        Salary" webinar and start earning what you're worth!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dC be-preview oC tatsu-GWxCCJh8bV XC UC WC YC">
                <div className="TC mC j">
                  <div className="VC">
                    <div className="ZC mD oC tatsu-column-no-bg cC tatsu-UfdnZZsSxR eC j lB nB yB">
                      <div className="tatsu-column-inner gradientClass">
                        <div className="aC">
                          <div className="jC mB oB zB">
                            <div className="tatsu-module rC vC tatsu-dZcRvoGuW mD none h B C E T">
                              <div className="tC KB iB jB">
                                <button
                                  className="tatsu-form-submit typo-button wC form-btn-none B C E T "
                                  type="submit"
                                >
                                  <div className="tatsu-form-primary-text">
                                    <a
                                      href="https://www.practiwiz.com/mentors-club/individual/srinivas-rao"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      BOOK NOW
                                    </a>
                                  </div>
                                  <div className="tatsu-form-secondary-text"></div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hC">
                          <div className="iC"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="PC">
          <div className="OC"></div>
        </div>
        <div className="SC tatsu-section-overlay x"></div>
      </div>
      {/* section 5 ends */}

      {/* <Carousel breakPoints={breakPoints}>
        <PsItemUl>
          <PsItem className="ps_item auto"></PsItem>
          <PsItem className="ps_item auto"></PsItem>
        </PsItemUl>
      </Carousel> */}
      <section
        className="testimonials"
        style={{ margin: "40px 0px", textAlign: "center" }}
      >
        <figure className="addAnimate" data-class="fadeIn" data-aos="fade-in">
          <div
            className="center addAnimate"
            data-class="fadeInBottom"
            data-aos="fade-up"
          >
            <>
              <ul
                className="productSlide delay3 addAnimate"
                data-class="fadeInBottom"
              >
                <Carousel
                  autoPlaySpeed="3000"
                  enableAutoPlay="true"
                  breakPoints={breakPoints}
                >
                  <li
                    className="ps_item auto border"
                    style={{ textAlign: "center" }}
                  >
                    <TestimonialP>
                      <i class="fa-solid fa-quote-left"></i> This site is worth
                      all the appreciations and bows . I was so worried about
                      how should I make my resume look perfect and let me tell
                      you , I was helped throughout from the selection of
                      perfect words to the way my resume should look like. So
                      helpful it was ! Thankyou so much . Much appreciated . All
                      the best ! And I would personally suggest everyone to try
                      this. This is definately gonna help !
                      <i class="fa-solid fa-quote-right"></i>
                    </TestimonialP>
                    <H4>Meghna Singh</H4>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li
                    className="ps_item auto border"
                    style={{ textAlign: "center" }}
                  >
                    <TestimonialP>
                      <i class="fa-solid fa-quote-left"></i>This site is worth
                      all the appreciations and bows . I was so worried about
                      how should I make my resume look perfect and let me tell
                      you , I was helped throughout from the selection of
                      perfect words to the way my resume should look like. So
                      helpful it was ! Thankyou so much . Much appreciated . All
                      the best ! And I would personally suggest everyone to try
                      this. This is definately gonna help !
                      <i class="fa-solid fa-quote-right"></i>
                    </TestimonialP>
                    <H4>Meghna Singh</H4>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li
                    className="ps_item auto border"
                    style={{ textAlign: "center" }}
                  >
                    <TestimonialP>
                      <i class="fa-solid fa-quote-left"></i> This site is worth
                      all the appreciations and bows . I was so worried about
                      how should I make my resume look perfect and let me tell
                      you , I was helped throughout from the selection of
                      perfect words to the way my resume should look like. So
                      helpful it was ! Thankyou so much . Much appreciated . All
                      the best ! And I would personally suggest everyone to try
                      this. This is definately gonna help ! Bots and interacted
                      with customers
                      <i class="fa-solid fa-quote-right"></i>
                    </TestimonialP>
                    <H4>Meghna Singh</H4>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </li>
                  <li
                    className="ps_item auto border"
                    style={{ textAlign: "center" }}
                  >
                    <TestimonialP>
                      <i class="fa-solid fa-quote-left"></i> This site is worth
                      all the appreciations and bows . I was so worried about
                      how should I make my resume look perfect and let me tell
                      you , I was helped throughout from the selection of
                      perfect words to the way my resume should look like. So
                      helpful it was ! Thankyou so much . Much appreciated . All
                      the best ! And I would personally suggest everyone to try
                      this. This is definately gonna help !
                      <i class="fa-solid fa-quote-right"></i>
                    </TestimonialP>
                    <H4>Meghna Singh</H4>
                    <div className="star">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                  </li>
                </Carousel>
              </ul>
            </>
          </div>
        </figure>
      </section>
    </Section>
  );
};

export default SrinivasLanding;
