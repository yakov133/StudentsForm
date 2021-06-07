import { Card, Col,Row, Button, Container, Table } from "react-bootstrap";
import { useState } from "react";

export default function Btn(props) {
//   const [order, setOrder] = useState(true);

  return (
    <>
      <Container fl>
      <Row className="justify-content-md-center">
      <Col md="auto">
      {props.order && (
        <Button
          className="btn"
          onClick={() => {
            props.setOrder(!props.order);
          }}
        >
          Alphabetical order
        </Button>
      )}
      {!props.order && (
        <Button
          className="btn"
          onClick={() => {
            // console.log(order);
            props.setOrder(!props.order);
            // return true;
          }}
        >
          Regular order
        </Button>
      )}
      </Col>
      </Row>
      </Container>
    </>
  );
}
