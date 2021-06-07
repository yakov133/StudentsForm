import Rigester from "./FormModal"
import StudentsTable from "./Table/Table"
import { useState,useEffect } from "react";
import { Button } from "react-bootstrap";


export  default function App(){
    const [data, setDate] = useState("");
    
    useEffect(() => {
        let DAL = JSON.parse(localStorage.getItem("DAL"));
        if(DAL){
            setDate(DAL);
        }
      },[]);

    return<>
    
    <Rigester setDate={setDate} />
    <StudentsTable data={data} />
    </>
}