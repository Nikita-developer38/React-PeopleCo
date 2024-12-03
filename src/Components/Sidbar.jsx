import { Col } from "react-bootstrap";
import black from "../Images/black.png";
import purple from "../Images/purple.png";
import { Link } from "react-router-dom";
function SideBars() {
  return (
    <>
      <Col xs={12} md={3} lg={2} style={{ backgroundColor: "#f8f9fa" }}>
        <div className="">
          <div className=" d-flex flex-column py-3" style={{ width: "15%" }}>
            <Link
              to={"/overview"}
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              {" "}
              <div className="d-flex flex-row">
                <img alt=".." className="me-3" src={black} />
                <div>Overview</div>
              </div>
            </Link>
            <Link
              to={"/PeopleDirectory"}
              style={{
                listStyle: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              {" "}
              <div className="d-flex flex-row py-3">
                <img alt=".." className="me-3" src={purple} />
                <div>Directory</div>
              </div>
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
}
export default SideBars;
