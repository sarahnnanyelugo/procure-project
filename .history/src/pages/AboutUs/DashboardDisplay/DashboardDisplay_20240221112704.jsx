import Carousel from "react-bootstrap/Carousel";
import Dashboard from "../../../assets/images/happy.png";
import Requisition from "../../../assets/images/boxes.png";
import Statement from "../../../assets/images/date.png";
import Inventory from "../../../assets/images/suit.png";
import "./dashboard-display.scss";
function DashboardDisplay() {
  return (
    <>
      <div className="col-md-12 emptied flexy flexyM">
        <div className="inner col-md-10 col-10"></div>
        <div className="innerW col-md-2 col-2"></div>
      </div>
      <div className="dasboard-display-carousel ">
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Statement} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                  <center className="mt2">
                    <h3>Streamlined Payroll Accounting</h3>
                  </center>
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Requisition}
                    alt="Scholar"
                    width="100%"
                  />
                  <center className="mt2">
                    <h3>Incisive Income Statement</h3>
                  </center>
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Statement} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Statement}
                    alt="Scholar"
                    width="100%"
                  />
                  <center className="mt2">
                    <h3>Concise Income Summary</h3>
                  </center>
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Inventory} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Inventory}
                    alt="Scholar"
                    width="100%"
                  />
                  <center className="mt2">
                    <h3>Inventory Control Solution</h3>
                  </center>
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="col-md-12 emptied2 flexy flexyM">
        <div className="innerW2 col-md-2 col-2"></div>
        <div className="inner col-md-10 col-10"></div>
      </div>
    </>
  );
}

export default DashboardDisplay;
