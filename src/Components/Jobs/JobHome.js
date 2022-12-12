import React from "react";
import { Link } from "react-router-dom";
import "./job.css";
import onLineSupport from "../../images/jobImages/online-support.png";
import global from "../../images/jobImages/global.png";
import clock from "../../images/jobImages/clock.png";
import analysis from "../../images/jobImages/analysis.png";
import piggyBank from "../../images/jobImages/piggy-bank.png";
import sales from "../../images/jobImages/sales.png";
import reading from "../../images/jobImages/reading.png";
import startup from "../../images/jobImages/startup.png";
import suitcase from "../../images/jobImages/suitcase.png";
import discount from "../../images/jobImages/discount.png";
const JobHome = () => {
  return (
    <>
      <section class="">
        <div class="qsb-header-container">
          <h1 class="qsb-title">Find your dream job now</h1>
          <div class="qsb-byLine">So many jobs for you to explore</div>
        </div>
        <div
          class="center addAnimate features-project-right2"
          data-class="fadeInBottom"
        >
          <section class="listing no-back section resources-bg specialities middle">
            <div class="body-part-list center">
              <div class="job-search">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter skills"
                    />
                  </li>
                  <li>
                    <select name="">
                      <option value="" selected>
                        Select experience
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                    </select>
                  </li>
                  <li>
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter location"
                    />
                  </li>
                  <li>
                    <input type="submit" value="Search" />
                  </li>
                </ul>
                <div class="clear"></div>
              </div>

              <div class="sec2">
                <ul>
                  <li>
                    <aside>
                      <i>
                        <img src={onLineSupport} alt="" />
                      </i>
                      <p>Remote</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={global} alt="" />
                      </i>
                      <p>MNC</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={analysis} alt="" />
                      </i>
                      <p>Temp WFH</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={piggyBank} alt="" />
                      </i>
                      <p>Banking</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={startup} alt="" />
                      </i>
                      <p>Startup</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={sales} alt="" />
                      </i>
                      <p>Analytics</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={discount} alt="" />
                      </i>
                      <p>Fresher</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={clock} alt="" />
                      </i>
                      <p>Sales</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={suitcase} alt="" />
                      </i>
                      <p>Marketing</p>
                    </aside>
                  </li>
                  <li>
                    <aside>
                      <i>
                        <img src={reading} alt="" />
                      </i>
                      <p>Software</p>
                    </aside>
                  </li>
                </ul>
                <div class="clear"></div>
              </div>

              <div class="job-card">
                <h2>Cloud Automation Engineer</h2>
                <ul>
                  <li>
                    <strong>Experience:</strong> 0-3 Yrs
                  </li>
                  <li>
                    <strong>Work Type:</strong> Office
                  </li>
                  <li>
                    <strong>Key Skills:</strong> Rgettreer
                  </li>
                  <li>
                    <strong>Office Address:</strong> Dubai
                  </li>
                  <li>
                    <strong>Salary: </strong>2,00,000 - 7,00,000
                  </li>
                  <li>
                    <strong>Qualification:</strong> Graduation
                  </li>
                  <li>
                    <strong>Employment Type:</strong> Full Time
                  </li>
                </ul>
                <div class="clear"></div>
                <p>
                  <strong>Note:</strong> Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <span>
                  <strong>Posted On:</strong> 17th November 2022
                </span>

                <div class="clear"></div>
                <article>
                  <a href="job-listing.html">View Job</a>
                  <a href="login.html">Login to Apply</a>
                </article>
                <div class="clear"></div>
              </div>
            </div>
          </section>
          <div className="allJobsButton">
            <Link style={{ color: "white" }} to="/all-jobs">
              View All Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobHome;
