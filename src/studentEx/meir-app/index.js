import { useState } from "react"
import Whether from "./inputsWeather/WhetherInputs"
import Card from "./showCard/ShowWhether"

export default function App() {

    const [city,setCity]= useState("");
    const [state,setState]= useState("");
    const [data,setData] = useState("")

    


    return<>
        <Whether city={city} setCity={setCity} setState={setState} state={state} setData={setData}/>
        {data ? <Card data={data}/> : ""}
    </>
    
}