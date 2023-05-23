import React, { useState,useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import './Home.css'
import { useNavigate } from "react-router-dom";
import Details from "./Details";
function Home(){
    const [arr,setarr] = useState([]);
    const [check,setcheck] = useState(false); 
    const [id,setid] = useState('');
    const[apiData,setApiData] = useState([]);
    const nav = useNavigate();
    
    useEffect(()=>{
        axios.get('http://localhost:5004/createUser').then((res)=> {
            setarr(res.data);
        })
     },[])
    const handlesubmit=()=>{
        var f=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i].vehicle_number.toLowerCase()===id.toLowerCase()){
                f=1;
                localStorage.setItem('token',arr[i].vehicle_number);
                nav(`/details`);
            }
        }
        if(f===0){
            alert('Enter Valid Vehicle Number');
        }
    }
    return(
        <div className="home">
            <div className="row hdr1">
                <div className="col-md-3 name">
                    <h1>Vehicle Vault</h1>
                </div>
                <div className="col-md-7"></div>
                <div className="col-md-2"></div>
                {/* <div className="col-md-1 login">
                    <Link to="/signin"><button className="log" onClick={()=>handle(id)}>Login</button></Link>
                </div> */}
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 sgn">
                <div className="ts">
                    <br/>
                    <h1 style={{color:'black'}}>Enter Vehicle Number</h1>          
                    <br/>
                    <input type="text" className="vno" onChange={(e)=>setid(e.target.value)} placeholder="Vehicle Number"></input>
                    <br/>
                    <br/>
                    <button onClick={handlesubmit} className="bt">Get Details</button>
                    <br/><br/>
                    <h5 style={{color:'black'}}>OR</h5>
                    <br/>
                    <Link to="/signin"><button className="bt">Login</button></Link>
                    <br/><br/><br/><br/><br/> 
                </div>
                </div>
            <div className="col-md-3"></div>
                {/* <div className="col-md-3"></div>
                <div className="col-md-6 ts">
                    <br/>
                    <h1>Enter Vehicle Id</h1>          
                    <br/>
                    <input type="text" id="vno"></input>
                    <br/>
                    <br/>
                    <button id="bt">Find</button>
                    <br/><br/>
                    <h1>OR</h1>
                    <br/>
                    <button id="bt">Click here to Scan</button>
                    <br/><br/><br/><br/><br/> 
                </div> */}
            </div>
        </div>
        
    )
}
export default Home;