import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import './Details.css';
import { Link } from "react-router-dom";
function Details(){
    const [arr,setarr] = useState([]);
    const [details,setdetails] = useState([]);
    const vnum = localStorage.getItem('token');
    useEffect(()=>{
        axios.get('http://localhost:5004/createUser').then((res)=> {
            for(let i=0;i<res.data.length;i++){
            if(res.data[i].vehicle_number.toLowerCase()===vnum.toLowerCase()){
                arr.push(res.data[i]);
            }
        }
        setdetails(arr);
        })
     },[])
     console.log(details);
return(
    <>
    <div className="Detailsmain">
    <div className="i1">
        <p>VEHICLE VAULT</p>
        <Link to="/" className="und"><p>Back</p></Link>
    </div>
    <div className="i2">
        <h3>DETAILS</h3>
    <table border="1" id="id1">
            {
                details.map((ele,i)=>{
                return (<tbody>
                    <tr>
            <td className="td">Name</td>
            <td className="td">{ele.name}</td>
        </tr>
        <tr>
            <td className="td">Contact No</td>
            <td className="td">{ele.mobile}</td>
        </tr>
        <tr>
            <td className="td">Email Id</td>
            <td className="td">{ele.email}</td>
        </tr>
        <tr>
            <td className="td">Vehicle type</td>
            <td className="td">{ele.vehicle_type}</td>
        </tr>
        <tr>
            <td className="td">Vehicle Model  </td>
            <td className="td">{ele.vehicle_model}</td>
        </tr>
        <tr>
            <td className="td">Vehicle Number</td>
            <td className="td">{ele.vehicle_number}</td>
        </tr>
        <tr>
            <td className="td">College</td>
            <td className="td">{ele.college}</td>
        </tr>   
        </tbody>     )    
            })
            }
    </table>
    </div>
</div>
</>
)}
export default Details;