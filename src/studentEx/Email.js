import validateInput from "./validation" 

import {
    Row,
    Col,
    Form,
    InputGroup
  } from "react-bootstrap"


  export default function Email(props) {

    return  <>
    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Col sm="10">
                        <InputGroup hasValidation>
                          <InputGroup.Text>@</InputGroup.Text>
                          <Form.Control
                            className={`${props.loginData.email.classes}`}
                            type="Email"
                            name="email"
                            placeholder="Enter email"
                            onBlur={(e) => {
                              validateInput(e.target,props.loginData,props.setLoginData);
                            }}
                          />
                        </InputGroup>
                        <span>{props.loginData.email.errors[0]}</span>
                        <span>{props.loginData.email.errors[1]}</span>
                      </Col>
                    </Form.Group>
    </>
      
  }