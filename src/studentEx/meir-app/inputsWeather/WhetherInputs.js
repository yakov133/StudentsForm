import "./WhetherInputs.css";
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";

export default function App(props) {
  function getInfo(e) {
    e.preventDefault()
    let obj = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.setState}&appid=d6abf8802df77ac560227b518149b6d5`)
    .then((response) => response.json())
    .then((data) => {props.setData({city:props.city,temp:data.main.temp, img:data.weather[0].icon, link:`https://en.wikipedia.org/wiki/${props.city}` })});
    

  }
  return (
    <>
      <Form className="row justify-content-md-center">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              City:
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              onBlur={(e) => {
                props.setCity(e.target.value);
              }}
              placeholder="enter city"
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              State:
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                id="inlineFormInputGroup"
                onBlur={(e) => {
                  props.setState(e.target.value);
                }}
                placeholder="enter state"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Button
              type="submit"
              className="mb-2"
              onClick={(e) => {
                getInfo(e);
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
