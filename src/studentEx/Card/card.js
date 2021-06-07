import { Card, Table } from "react-bootstrap";
import "./card.css"
export default function MakeCard(props) {
    let elm = props.data[props.id]
  return (
    <>
      {props.data 
      ?
       <Card>
        <Card.Header as="h5" style={{backgroundColor: "rgb(172, 168, 43)",color: "white"}}>Sneak Peek</Card.Header>
        <Card.Body style={{color: "teal"}}>
          <Card.Title>Student details</Card.Title>
          <Card.Text>Username: {elm.username}</Card.Text>
          <Card.Text>Email: {elm.email}</Card.Text>
          <Card.Text>Course: {elm.course}</Card.Text>
          <Card.Text>Address: {elm.address}</Card.Text>
          <Card.Text>Gender: {elm.gender}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center text-muted" style={{backgroundColor: "black" ,Color: "white"}}>made by ® yakov kassa</Card.Footer>
      </Card> 
      :
       props.setCard(false)}
    </>
  );
}
