import { useState } from "react";
import { Card, Col, Button ,Container, Table } from "react-bootstrap";
import MakeCard from "../Card/card";
import Btn from "./TableOrder"
import "./Table.css";

export default function StudentsTable(props) {
  
  const [card, setCard] = useState({stat:false});
  const [order,setOrder] = useState(true);
  
  // // props.data.sort((a,b)=>{return b.username - a.username})
  // let temp = [...props.data];
  // // console.log("sorting",temp.sort((a,b)=>b.username-a.username));
  // console.log(temp);

  // const sorting = ()=>{
  //   return  [3,2,1].sort((a,b) => { return a - b })
  // }
  // let temp2=sorting();

  // console.log("sorting",temp2);
  
  // console.log("sorting", [...props.data].sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)));

  return (
    <>
      <h1 className="text-center"> Free sigin up for Courses </h1>
   
        <Btn order={order} setOrder={setOrder}/>
      
      <Container className="d-flex">
      <Col>
      <Table  striped bordered hover>
        <thead>
          <tr>
            <th>Usernames:</th>
          </tr>
        </thead>
        <tbody>
          {order && props.data
            ? props.data.map((elm) => {
                return (
                  <tr onClick={() => setCard({state: !card.state, id: elm.id})}>
                    <th>{elm.username}</th>
                  </tr>
                );
              })
            : ""}
            {!order && props.data
            ? [...props.data].sort((a,b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0)).map((elm) => {
                return (
                  <tr onClick={() => setCard({state:!card.state,id:elm.id})}>
                    <th>{elm.username}</th>
                  </tr>
                );
              })
            : ""}

        </tbody>
      </Table>
      </Col>
      <Col className="down">
        {card.state && <MakeCard data={props.data} id={card.id} setCard={setCard}/>}
      </Col>
      </Container>
    </>
  );
}
