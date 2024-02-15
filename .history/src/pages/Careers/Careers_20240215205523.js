import React from "react";
import "./careers.scss";
import Banner from "../../assets/images/career-banner.png";
import Img from "../../assets/images/procured.png";
import Icon from "../../assets/images/procured.png";
import Navbar from "../../components/Navbar/Navbar";
export const Careers = () => {
  return (
    <>
      <div id="cover">
        <img src={Banner} width="100%" className="vid" />
        <div className=" col-md-12 overlay2">
          <Navbar colo="#fff" />
          <center>
            {" "}
            <div className="col-md-4 col-12 mtt mobile-padding">
              {" "}
              <h1>Careers</h1>
              <p className="col-md-11">
                We are building an exciting future of bulk procurement together.
                Join Us!!
              </p>
            </div>
          </center>
        </div>
      </div>

      <div className="prerks-div">
        <center className="career-title ">
          <h1>Come work with us</h1>
          <p>We would help your career growth exponentially</p>
        </center>
        <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-3 g-2 g-lg-3 mobile-padding">
          <div className="col">
            <div className="perks">
              <h5>Rapid Career Advancement</h5>
              <p>
                You will often experience rapid growth, providing you with
                opportunities for career advancement. As we expand, there is a
                need for skilled professionals to take on leadership roles,
                allowing for quick career progression.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="perks">
              <h5>Global Reach and Networking</h5>
              <p>
                We operate on a global scale, providing you with opportunities
                to work on international projects, collaborate with teams from
                different regions, and build a global professional network.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="perks">
              <h5>Data-Driven Decision-Making</h5>
              <p>
                Making Informed decisions relies heavily on data analytics. Get
                the chance to work with large datasets, conduct market analysis,
                and contribute to data-driven strategies, enhancing their
                analytical skills.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 offset-md-3 procured">
          <img src={Img} width="100%" />
        </div>
        <div className="flexy">
          <div className="col-md-8 offset-md-2 row row-cols-1 row-cols-lg-2 g-2  g-lg-4 no-m second-row">
            {" "}
            <div className="col">
              <div className="perks">
                <h5>
                  Continuous Learning <br />
                  Opportunities
                </h5>
                <p>
                  The ever-evolving nature of the industry requires us to stay
                  updated on the latest trends, technologies, and strategies. We
                  invest in training & development programs, fostering a culture
                  of continuous learning.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="perks">
                <h5>
                  Competitive Compensation <br /> Packages
                </h5>
                <p>
                  We offer competitive salary and benefits packages to attract
                  and retain top talent. This can include performance bonuses,
                  stock options, and other incentives that contribute to overall
                  job satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2 green-bg" />
        </div>
        <center>
          <button className="app-btn">View open roles</button>
        </center>
        <div className="col-md-10 offset-md-1 mt5 grey-div">
          <h2>Who we hire</h2>
          <p>
            We’re looking for those who wants to grow and standout in their
            career.
          </p>
          <div className=" row row-cols-1 row-cols-lg-3 g-2  g-lg-4 no-m ">
            <div className="col">
              <div clasName="perks2">
                <img src={Icon} height="52px" />
                <h5>Continuous Learners</h5>
                <p>
                  Joining our team entails collaborating with the most committed
                  people who strive for mastery. However, growth is expected and
                  not just a possibility. You’ll be forcing yourself to step
                  outside of your comfort zone with the aid of resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prefooter-div col-md-8 offset-md-2 col-10 offset-1">
        <center>
          <h2>Ready to get started?</h2>
          <p>Register now to browse millions of goods from vetted vendors.</p>
          <button className="app-btn">Get started</button>
        </center>
      </div>
    </>
  );
};
