import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/auth";

function LogIn() {
  const [valid, setValid] = useState("error");
  const navigate = useNavigate();

  // const Error = () => {
  //   let error = [];
  //   if (!(email, password)) {
  //     error.push("Please fill both Email and Password");
  //   }
  //   if (password < 6) {
  //     error.push("Password should be atleast 6 charcter");
  //   }
  //   if (!(email === "admin@gmail.com")) {
  //     error.push("wrong Email");
  //   }
  //   if (!(password === "admin123")) {
  //     error.push("wrong Password");
  //   }
  //   return error;
  // };
  const { Error, password, email, setEmail, setPassword } =
    useContext(authContext);
  function Check(e) {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      setValid("success");
      navigate("/overview");
    } else {
      let error = Error();
      setValid(error.length ? error : "");
    }
  }
  return (
    <>
      <Col xs={12} md={9} lg={10}>
        <div
          class="d-flex flex-column mt-3  justify-content-center border rounded"
          style={{ width: "98%", height: "500px" }}
        >
          <h2 style={{ color: "#6941C6", textAlign: "center" }}>Admin Login</h2>
          <Form
            onSubmit={Check}
            className="w-50 d-flex flex-column justify-content-center mx-auto"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <p className="text-danger text-center">{valid}</p>
            <Button variant="primary" type="submit">
              LogIn
            </Button>
          </Form>
        </div>
      </Col>
    </>
  );
}
export default LogIn;
