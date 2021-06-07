import validateInput from "./validation";
import { FaRegAddressCard } from "react-icons/fa";

import { Form, InputGroup } from "react-bootstrap";

export default function Address(props) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Address</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FaRegAddressCard />
            </InputGroup.Text>
          </InputGroup.Prepend>
          
          <Form.Control
            as="textarea"
            rows={3}
            className={`${props.loginData.address.classes}`}
            onBlur={(e) => {
              validateInput(e.target, props.loginData, props.setLoginData);
            }}
            name="address"
            placeholder="Street, Number, City, Zip"
          />
        </InputGroup>
        <span>{props.loginData.address.errors[0]}</span>
        <span>{props.loginData.address.errors[1]}</span>
      </Form.Group>
    </>
  );
}
