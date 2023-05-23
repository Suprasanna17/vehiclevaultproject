import axios from "axios";
import React,{useState,useEffect} from 'react';

const Displaydata = () => {
    let [data, setData] = useState([]) // let data = []
    let api = "http://localhost:8009/demo";
    useEffect(() => {
        axios.get(api).then((response) => {
            console.log(response.data)
            setData(response.data);            
        });
      }, []);
    return (
        <div className="App">
            <br />
            {/* <h2>Display Data</h2> */}
            {data.map((user,key)=>
               { return (
                    <>
                        
                    </>
              ) })}
        </div>
    )
}
export default Displaydata