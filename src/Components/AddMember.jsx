import { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddMember() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  async function postData(e) {
    e.preventDefault();
    await axios.post(
      "https://6745b3a8512ddbd807f93eb9.mockapi.io/post/peopleCo",
      {
        name: name,
        username: username,
        email: email,
        status: status,
        role: role,
        team: team,
        image: image,
      }
    );
    setName("");
    setUsername("");
    setEmail("");
    setStatus("");
    setRole("");
    setTeam("");
    setImage("");
    navigate("/PeopleDirectory");
  }

  return (
    <>
      <Col xs={12} md={9} lg={10}>
        <div
          className="d-flex flex-column mt-3  justify-content-center border rounded"
          style={{ width: "98%", height: "500px" }}
        >
          <div className="w-50 d-flex flex-column justify-content-center mx-auto">
            <h2 style={{ color: "#6941C6", textAlign: "center" }}>
              Add New Member
            </h2>
            <Form onSubmit={postData}>
              <Row className="mb-3">
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="validationFormik02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik04">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option>Select</option>
                    <option value="Active">Active</option>
                    <option value="Offline">Offline</option>
                    <option value="Busy">Busy</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik04">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  >
                    <option>Select</option>
                    <option value="Product Designer">Product Designer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Fullstack Developer">
                      Fullstack Developer
                    </option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="UI Designer">UI Designer</option>
                    <option value="QA Engineer">QA Engineer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik05">
                  <Form.Label>Team</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={team}
                    onChange={(e) => {
                      setTeam(e.target.value);
                    }}
                  >
                    <option>Select</option>
                    <option value="Design">Design</option>
                    <option value="Product">Product</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Technology">Technology</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group controlId="validationFormik05">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "#6941C6", border: "none" }}
                className="mx-auto my-2 d-flex justify-content-center"
              >
                Add Member
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </>
  );
}

export default AddMember;
