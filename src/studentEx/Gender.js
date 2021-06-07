import validateInput from "./validation" 

import {
    Form,
    Col,
    FormGroup,
    ToggleButtonGroup,
    ToggleButton,
  } from "react-bootstrap"



export default function Gender(props) {


    return  <>
    <FormGroup>
                    <Col>
                      <Form.Label column sm="2">
                        Gender
                      </Form.Label>
                    </Col>
                    <ToggleButtonGroup
                      className={`${props.loginData.gender.classes}`}
                      type="radio"
                      name="gender"
                      onBlur={(e) => {
                        validateInput(e.target,props.loginData,props.setLoginData);
                      }}
                    >
                      <ToggleButton variant="outline-danger" value="male">
                        Male
                      </ToggleButton>
                      <ToggleButton variant="outline-danger" value="female">
                        Female
                      </ToggleButton>
                      <ToggleButton variant="outline-danger" value="other">
                        Other{" "}
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <span>{props.loginData.gender.errors[0]}</span>
                  </FormGroup>
    </>    
}