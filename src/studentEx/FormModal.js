import "./FormModal.css";
import React, { useState } from "react";
import validateInput from "./validation";
import Username from "./Username";
import Email from "./Email";
import Address from "./Address";
import Cours from "./Cours";
import Gender from "./Gender";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Rigester(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () =>
  {
    setLoginData({
      username: {
        value: "",
        errors: [],
        classes: "",
        validations: {
          required: true,
        },
      },
  
      email: {
        value: "",
        errors: [],
        classes: "",
        validations: {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        },
      },
  
      course: {
        value: null,
        errors: [],
        classes: "",
        validations: {
          required: true,
        },
      },
  
      address: {
        value: "",
        errors: [],
        classes: "",
        validations: {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        },
      },
  
      gender: {
        value: "",
        errors: [],
        classes: "",
        validations: {
          required: true,
        },
      },
    });
  setShow(true);
}
  const [loginData, setLoginData] = useState({
    username: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },

    email: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },

    course: {
      value: null,
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },

    address: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      },
    },

    gender: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },
  });

  function chekingRiquered() {
    let allTrueValues = true;
    let student = {};
    for (const key in loginData) {
      let elm = loginData[key];
      validateInput({ value: elm.value, name: key }, loginData, setLoginData);
      student = { ...student, [key]: elm.value };
      if (!elm.value && allTrueValues) {
        allTrueValues = false;
      }
    }

    setShow(!allTrueValues);
    
    if (allTrueValues) {
      let DAL = JSON.parse(localStorage.getItem("DAL"));
      if (!DAL) {
        DAL = [];
        DAL.push({ id: DAL.length, ...student });
        localStorage.setItem("DAL", JSON.stringify(DAL));
      } else {
        DAL.push({ id: DAL.length, ...student });
        localStorage.setItem("DAL", JSON.stringify(DAL));
      }
      props.setDate(DAL);
    }
  }
  function DeletLocalStorege() {
    localStorage.clear();
    props.setDate("");
  }

  return (
    <>
      <Container className=" d-flex text-center">
        <Col>
          <Button variant="primary" onClick={handleShow}>
            Creat Student
          </Button>
        </Col>

        <Col>
          <Button variant="primary" onClick={DeletLocalStorege}>
            Delete Storge
          </Button>
        </Col>
      </Container>

      {/* first section*/}
      <Modal size="xl" show={show} onHide={() => setShow(false)}>
        <Modal.Header className="text-center my-modal" closeButton>
          <Col>
            <Modal.Title>Student Detailes </Modal.Title>
            <p>Hello Student! please fill your deatils</p>
          </Col>
        </Modal.Header>

        {/* second section*/}
        <Modal.Body className="my-modal">
          {
            <Form>
              <Container>
                <Row>
                  <Col>
                    <Username
                      loginData={loginData}
                      setLoginData={setLoginData}
                    />
                  </Col>

                  <Col>
                    <Email loginData={loginData} setLoginData={setLoginData} />
                  </Col>
                </Row>
              </Container>

              <Container>
                <Address loginData={loginData} setLoginData={setLoginData} />
              </Container>

              <Container>
                <Row>
                  <Col>
                    <Cours loginData={loginData} setLoginData={setLoginData} />
                  </Col>

                  <Gender loginData={loginData} setLoginData={setLoginData} />
                </Row>
              </Container>
            </Form>
          }
        </Modal.Body>
        <Modal.Footer className="my-modal">
          <Container>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              onClick={() => {
                chekingRiquered();
              }}
              type="submit"
            >
              Submit
            </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}
