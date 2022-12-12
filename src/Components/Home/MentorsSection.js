import React, { useEffect, useState } from "react";
import mentorImage1 from "../../images/mentors1.jpg";
import mentorImage2 from "../../images/mentors2.jpg";
import mentorImage3 from "../../images/mentors3.jpg";
import mentorImage4 from "../../images/mentors4.jpg";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import axios from "axios";

const MentorsSection = () => {
  const [mentorDetails, setMentorDetails] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  useEffect(() => {
    const getMentors = async () => {
      const res = await axios.get(
        `https://deploy-practiwiz.azurewebsites.net/api/mentor/get/all`
      );
      if (res.data.mentors) {
        setMentorDetails(res.data.mentors);
      }
      if (res.data.error) {
        setMentorDetails([]);
      }
    };
    getMentors();
  }, []);
  return (
    <section className="mentors homeSec6">
      <div
        className="center addAnimate features-project-right2"
        data-class="fadeInBottom"
      >
        <h4>Practiwiz</h4>
        <h2>Our Featured Mentors</h2>
        <p>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. */}
        </p>

        <ul
          className="whyGoForSf_slid delay3 addAnimate"
          data-class="fadeInBottom"
          data-aos="fade-up"
        >
          <Carousel breakPoints={breakPoints}>
            {mentorDetails?.slice(0, 6).map((mentorDetail) => (
              <div key={mentorDetail.mentor_dtls_id}>
                <li className="ps_item auto">
                  <aside>
                    <img
                      className="mentorImage"
                      src={mentorDetail.mentor_image}
                      alt=""
                    />
                  </aside>
                  <h3>
                    <Link
                      style={{ color: "#061e4e" }}
                      to={`/mentors-club/individual/${
                        mentorDetail.mentor_firstname.toLowerCase() +
                        "-" +
                        mentorDetail.mentor_lastname.toLowerCase()
                      }`}
                    >
                      {mentorDetail.mentor_firstname +
                        " " +
                        mentorDetail.mentor_lastname}
                    </Link>
                  </h3>
                  <h4>{mentorDetail.mentor_current_role}</h4>
                  <div className="star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </li>
              </div>
            ))}
          </Carousel>
        </ul>

        <div className="more">
          <Link style={{ color: "white" }} to="/mentors-club">
            View All Mentors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
