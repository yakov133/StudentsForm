import validateInput from "./validation";
import { FaLayerGroup } from "react-icons/fa";
import { Form, Col,InputGroup } from "react-bootstrap";

export default function Cours(props) {
  return (
    <>
      <Form.Group controlId="exampleForm.ControlSelect1">
        
          <Form.Label column sm="2">
            Course
          </Form.Label>
        
        
        <Col className="d-flex">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <FaLayerGroup />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          name="course"
          as="select"
          className={`${props.loginData.course.classes}`}
          onBlur={(e) => {
            validateInput(e.target, props.loginData, props.setLoginData);
          }}
        >
          <option>Choose Course</option>
          <option>JavaScript</option>
          <option>C++</option>
          <option>Pytone</option>
          <option>C#</option>
          <option>Java</option>
        </Form.Control>
        <span>{props.loginData.course.errors[0]}</span>
        </Col>
      </Form.Group>
    </>
  );
}
