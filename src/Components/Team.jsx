import { Form, Button } from "react-bootstrap";
import filter from "../Images/filter.png";
import { Link } from "react-router-dom";
function Team() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between pt-2 mx-2  border-bottom pb-2">
        <div className="d-flex flex-row  justify-content-between text-nowrap ">
          <div className="fw-bold">Team Members</div>
          <div
            className="rounded-pill border px-2 "
            style={{ color: "#6941C6", height: "26px" }}
          >
            100 Users
          </div>
        </div>
        <div className="d-flex flex-row">
          <Form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
          <img alt="..." src={filter} />
          <Link to={"/addMember"}>
            <Button
              type="button"
              className="btn text-light text-nowrap"
              style={{ backgroundColor: "#6941C6", border: "none" }}
            >
              {" "}
              + Add Member
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Team;
