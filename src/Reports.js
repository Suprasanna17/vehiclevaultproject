import React from "react";
import './App.css';
import './Dashboard.css';
import './Reports.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './bootsrap.css';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import {Form} from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useRef } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import './Flip.css';
import ReactCardFlip from "react-card-flip";
function Reports(){
    const location = useLocation();
    const [arr,Setarr] = useState([]);
    const [arr1,Setarr1] = useState([]);
    const [arr2,Setarr2] = useState([]);
    const [arr3,Setarr3] = useState([]);
    const [total,Settotal] = useState([]);
    const [two,Settwo] = useState(0);
    const [three,Setthree] = useState(0);
    const [four,Setfour] = useState(0);
    const [ovrl,Setovrl]=useState(0);
    const [temp,Settemp] = useState([]);
    const [data,Setdata] = useState([]);
    const [log, Setlog] = useState(false);
    const [date,setDate]=useState('');
    const [college,setCollege]=useState('');
    useEffect(()=>{
        axios.get('http://localhost:5004/createUser').then((res)=> {
          for(let i=0;i<res.data.length;i++){
             arr.push(res.data[i]);
          }
        })
     },[])
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const dropdown = () => {
        myRef1.current.style.display = 'none';
        myRef2.current.style.display = 'block';
        myRef3.current.style.display = 'block';
    };
    const close = () => {
        myRef1.current.style.display = 'block';
        myRef2.current.style.display = 'none';
        myRef3.current.style.display = 'none';
    }; 


  const divRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(date);
    // console.log(college);
    // Example condition: show the div if the input value is "yes"
    // console.log(typeof(date));
    // console.log(date);
    // console.log(college);
    Setarr1([]);
    Setarr2([]);
    Setarr3([]);
    Settotal([]);
    Settwo(0);
    Setthree(0);
    Setfour(0);
    Setovrl(0);
    percentageoverall=100;
    for(let i=0;i<arr.length/2;i++){
        if(arr[i].date===date && arr[i].college===college){
            total.push(arr[i]);
        }
        if(arr[i].date===date && arr[i].college===college && arr[i].vehicle_type==='two wheeler'){
            arr1.push(arr[i]);
            console.log(arr[i]);
        }
        if(arr[i].date===date && arr[i].college===college && arr[i].vehicle_type==='three wheeler'){
            arr2.push(arr[i]);
            console.log(arr[i]);
        }
        if(arr[i].date===date && arr[i].college===college && arr[i].vehicle_type==='four wheeler'){
            arr3.push(arr[i]);
            console.log(arr[i]);
        }
    }
    Settwo(arr1.length);
    Setthree(arr2.length);
    Setfour(arr3.length);
    Setovrl(total.length);
  };
    var percentageoverall,peraec,peracoe,peracet;
    if(ovrl===0){
        percentageoverall =0;
        peraec= 0;
        peracoe= 0;
        peracet= 0;
    }
    else{
    console.log({ovrl});
    let t=`${ovrl}`;
    const ovral1= t*100/t;
    percentageoverall = `${ovral1}`;
    let twoper=`${two}`;
    const two1= parseInt(Math.round(twoper*100/t));
    peraec= `${two1}`;
    let threeper=`${three}`;
    const three1= parseInt(Math.round(threeper*100/t));
    peracoe= `${three1}`;
    let fourper=`${four}`;
    console.log({four});
    const four1= parseInt(Math.round(fourper*100/t));
    peracet= `${four1}`;
    }
    const logoutFunction=(e)=>{
        Setlog(true);
    }
    if(log){
        return(
            <Home/>
        )
    }
    return(
        <>
            <div className="div1">
                <div className='sidebar'>
                    <div className='sp'></div>
                    <h3 className='link'>Vehicle Vault</h3>
                    <Link to="/dashboard" className="und"><p className='lk' >&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Reports</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                        <Link to="/profile" className="und"><p className='lk1'>&nbsp;<i className="fas fa-user" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Profile</p></Link>
                    <Link to="/dashboard" className="und"><p className='lk1'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                        </div>
                    </div>
                    <div className="box">
                        <br/>
                        <br/><br/>
            <center>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 inp">
                    <Form>
                        <Form.Group controlId="form.Select">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" style={{width:"50%"}} value={date} onChange={(e) => setDate(e.target.value)}/>    
                        </Form.Group>
                        <br/>
                        <Form.Label>Select College</Form.Label>
                        <Form.Control as="select" placeholder="Select College" value={college} style={{width:"50%"}} onChange={(e) => setCollege(e.target.value)} >
                            <option value="Select College">Select College</option>
                            <option value="AEC">AEC</option>
                            <option value="ACOE">ACOE</option>
                            <option value="ACET">ACET</option>
                        </Form.Control>
                        <br/>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Get Report</Button>
                    </Form>
                </div>
            </div>
            </center>
            <br/>
            <div className="row pies">
            <div className="col-md-2">
            <CircularProgressbar value={percentageoverall} text={`${percentageoverall}%`} className="bar"/>
            <br/>
            <br/>
            <h5>Overall Passes - {ovrl}</h5>
            </div>
            <div className="col-md-2">
            <CircularProgressbar value={peraec} text={`${peraec}%`} />
            <br/>
            <br/>
            <h5>Two Wheelers - {two}</h5>
            </div>
            <div className="col-md-2">
            <CircularProgressbar value={peracoe} text={`${peracoe}%`} />
            <br/>
            <br/>
            <h5>Three Wheelers - {three}</h5>
            </div>
            <div className="col-md-2 ">
            <CircularProgressbar value={peracet} text={`${peracet}%`} />
            <br/>
            <br/>
            <h5>Four Wheelers - {four}</h5>
            </div>
           </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reports;






// import React from "react";


// function Report(){
    
//     return(
//         <>
//         <br/>
//         <br/>
            
//         </>
//     )
// }
// export default Report;