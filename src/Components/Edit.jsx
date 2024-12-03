import { MDBModalBody } from "mdb-react-ui-kit";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function Edit({ id, setBasicModal, GetData }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [image, setImage] = useState("");

  async function Data() {
    const response = await axios.get(
      `https://6745b3a8512ddbd807f93eb9.mockapi.io/post/peopleCo/${id}`
    );
    console.log(response.data);
    setName(response.data.name || "");
    setUsername(response.data.username || "");
    setEmail(response.data.Email || "");
    setStatus(response.data.name || "");
    setRole(response.data.role || "");
    setTeam(response.data.team || "");
    setImage(response.data.image || "");
  }

  useEffect(() => {
    Data();
  }, []);

  async function putData(e) {
    e.preventDefault();
    await axios.put(
      `https://6745b3a8512ddbd807f93eb9.mockapi.io/post/peopleCo/${id}`,
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
    setBasicModal(false);
    GetData();
    console.log(id);
  }
  return (
    <>
      <MDBModalBody>
        <div
          className="d-flex flex-column mt-3  justify-content-center border rounded"
          style={{ width: "100%", height: "500px" }}
        >
          <div className="w-100 d-flex flex-column justify-content-center mx-auto p-1">
            <h2 style={{ color: "#6941C6", textAlign: "center" }}>
              Update Member
            </h2>
            <Form onSubmit={putData}>
              {" "}
              {/* //onSubmit={postData} */}
              <Row className="mb-3">
                <Form.Group controlId="validationFormik01">
                  <Form.Label>Update Name</Form.Label>
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
                  <Form.Label>Update Username</Form.Label>

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
                  <Form.Label>Update Email</Form.Label>
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
                  <Form.Label>Update Status</Form.Label>
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
                  <Form.Label>Update Role</Form.Label>
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
                  <Form.Label>Update Team</Form.Label>
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
                <Form.Label>Update Image URL</Form.Label>
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
                Update Changes
              </Button>
            </Form>
          </div>
        </div>
      </MDBModalBody>
    </>
  );
}
export default Edit;
