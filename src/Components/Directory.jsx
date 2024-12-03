import { Col } from "react-bootstrap";
import Team from "./Team";
import TeamMember from "./TeamMember";
function Directory() {
  return (
    <>
      <Col xs={12} md={9} lg={10}>
        <div
          className="d-flex flex-column mt-3  justify-content-start border rounded"
          style={{ width: "98%", height: "500px" }}
        >
          <Team />
          <TeamMember />
        </div>
      </Col>
    </>
  );
}

export default Directory;
