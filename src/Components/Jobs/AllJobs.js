import React from "react";
import "./job.css";
import JobCard from "./JobCard/JobCard";

const AllJobs = () => {
  return (
    <>
      <section className="all-jobs-section">
        <div
          className="addAnimate features-project-right2"
          data-class="fadeInBottom"
        >
          <section className="listing no-back section resources-bg specialities middle">
            <div className="body-part-list center">
              <div className="col-sm-3">
                <div className="left-sidebar">
                  <h2>Category</h2>
                  <div className="panel-group category-products" id="accordian">
                    {/* <!--category-productsr--> */}
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#sportswear"
                          >
                            <span className="badge pull-right"></span>
                            Office Boy/Peon <span>22</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#mens"
                          >
                            <span className="badge pull-right"></span>
                            Cook/Chef <span>22</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordian"
                            href="#womens"
                          >
                            <span className="badge pull-right"></span>
                            Delivery Person <span>5</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Driver Car/Bike <span>88</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Domestic Help <span>01</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Carer<span>7</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Nurse <span>05</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Security Guard <span>40</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a href="#">
                            Telecaller/BPO <span>82</span>
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* <!--/category-productsr--> */}
                  <div className="ads">
                    <h2>Google Ads</h2>
                    <div>
                      <img src="images/ads.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-9 padding-right">
                <div className="features_items">
                  {/* <!--<h2 className="title text-center"></h2>--> */}
                  <div className="top-tital">
                    <h2>
                      Showing results for <strong>all jobs</strong>
                    </h2>
                    <div className="right-view">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="clr"></div>
                  <div className="col-sm-12">
                    <div className="product-image-wrapper">
                      <JobCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AllJobs;
