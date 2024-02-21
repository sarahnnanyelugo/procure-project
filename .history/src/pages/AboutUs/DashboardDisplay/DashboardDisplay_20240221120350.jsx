import Carousel from "react-bootstrap/Carousel";
import Dashboard from "../../../assets/images/happy.png";
import Requisition from "../../../assets/images/boxes.png";
import Statement from "../../../assets/images/afro.png";
import Inventory from "../../../assets/images/suit.png";
import "./dashboard-display.scss";
function DashboardDisplay() {
  return (
    <>
      <div className="dasboard-display-carousel mt">
        <Carousel>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 winged-imgs">
                <img className="" src={Statement} alt="Scholar" />
              </div>
              <div className="col-md-8 ">
                {" "}
                <div className="col-md-11 center-dashboard flexy">
                  <div className="col-md-6">
                    <h1>2</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                  <img
                    className="col-md-6"
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
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
              <div className="col-md-2 winged-imgs">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-11 flexy center-dashboard">
                  <div className="col-md-6">
                    <h1>2</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                  <img
                    className="col-md-6"
                    src={Requisition}
                    alt="Scholar"
                    width="100%"
                  />
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
              <div className="col-md-2 winged-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-11 flexy center-dashboard">
                  <div className="col-md-6">
                    <p>
                      <h1>3</h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                  <img
                    className="col-md-6"
                    src={Statement}
                    alt="Scholar"
                    width="100%"
                  />
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
              <div className="col-md-2 winged-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-11 flexy center-dashboard">
                  <div className="col-md-6">
                    <p>
                      <h1>4</h1>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </p>
                  </div>
                  <img
                    className="col-md-6"
                    src={Inventory}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default DashboardDisplay;
