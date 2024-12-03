import { Col } from "react-bootstrap";
function Overview() {
  return (
    <>
      <Col xs={12} md={9} lg={10}>
        <div
          class="d-flex flex-column mt-3  justify-content-start border rounded"
          style={{ width: "98%", height: "500px" }}
        >
          <div className="p-3">
            <h1>Welcome, Nikita....</h1>
          </div>
        </div>
      </Col>
    </>
  );
}
export default Overview;
