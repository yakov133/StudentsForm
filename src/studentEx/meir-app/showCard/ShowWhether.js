import "./ShowWhether.css";
import {
  Form,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function CardData(props) {
    let Cels_temp= Math.floor(props.data.temp-273);
    


  return (
    <>
      <Container >
        <Row className="rowMardgin justify-content-md-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${props.data.img}.png`} />
          <Card.Body>
            <Card.Title>City ditailes:</Card.Title>
            <Card.Text>
              {`In the City: ${props.data.city}`}
            </Card.Text>

            <Card.Text>
              {`It's ${Cels_temp} \xB0C be aware`}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={`${props.data.link}`}>Card Link</Card.Link>
          </Card.Body>
        </Card>
        </Row>
      </Container>
    </>
  );
}
