import validateInput from "./validation";
import { FaUserAlt } from "react-icons/fa";

import { Row, Col, Form, InputGroup } from "react-bootstrap";

export default function Username(props) {
  return (
    <>
      <Form.Label column sm="2">
        UserName
      </Form.Label>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <FaUserAlt />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              className={`${props.loginData.username.classes}`}
              type="text"
              name="username"
              placeholder="Enter Username"
              onBlur={(e) => {
                validateInput(e.target, props.loginData, props.setLoginData);
              }}
            />
          </InputGroup>
          <span>{props.loginData.username.errors[0]}</span>
          <span>{props.loginData.username.errors[1]}</span>
        </Col>
      </Form.Group>
    </>
  );
}
