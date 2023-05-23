import React from "react";
import './App.css';
import './Dashboard.css';
import './Passes.css';
import './bootsrap.css';
import './GeneratePasses.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button,ButtonGroup,Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRef } from "react";
import Home from "./Home";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
function Passes(){ 
    const location = useLocation();
    const [Pass, SetPass] = useState([])
    const [arr2, Setarr2] = useState([])
    const [arr3, Setarr3] = useState([])
    const [arr4, Setarr4] = useState([])
    useEffect(()=>{
       axios.get('http://localhost:5004/createUser').then((res)=> {
         for(let i=0;i<res.data.length;i++){
            if(res.data[i].vehicle_type==='two wheeler'){
                arr2.push(res.data[i]);
            }
            else if(res.data[i].vehicle_type==='three wheeler'){
                arr3.push(res.data[i]);
            }
            else{
                arr4.push(res.data[i]);
            }
         }
       })
    },[])
    const two = () =>{
        const arr=[];
        for(let i=0;i<arr2.length/2;i++){
            arr.push(arr2[i]);
        }
       SetPass(arr);
    }
    const three = () =>{
        const arr=[];
        for(let i=0;i<arr3.length/2;i++){
            arr.push(arr3[i]);
        }
       SetPass(arr);
    }
    const four = () =>{
        const arr=[];
        for(let i=0;i<arr4.length/2;i++){
            arr.push(arr4[i]);
        }
       SetPass(arr);
    }
    console.log(Pass);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const [log, Setlog] = useState(false);
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
    const logoutFunction=(e)=>{
        Setlog(true);
    }
    if(log){
        return(
            <Home/>
        )
    }
    //api -> axios.get()  -> 2) state = [] 3 ) 
    return(
        <>
            <div className="div1">
                <div className='sidebar'>
                    <div className='sp'></div>
                    <h3 className='link'>Vehicle Vault</h3>
                    {/* <Link to="/profile" className="und"><p className='lk'>&nbsp;<i className="fas fa-user" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Profile</p></Link> */}
                    <Link to="/dashboard" className="und"><p className='lk'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Passes</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                        {/* <Link to="/profile" className="und"><p className='lk1'>&nbsp;<i className="fas fa-user" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Profile</p></Link> */}
                    <Link to="/dashboard" className="und"><p className='lk1'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                        </div>
                    </div>
                    <div className="box">
                    <div className="row" id="la1">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <ButtonGroup className="mb-8 btns">
                        <Button onClick={two}>Two Wheelers</Button>
                        <Button onClick={three}>Three Wheelers</Button>
                        <Button onClick={four}>Four Wheelers</Button>
                    </ButtonGroup>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 tb">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Vehicle ID</th>
                                <th>Vehicle Model</th>
                                </tr>
                      </thead>
                        <tbody>
                            {
                                Pass.map((ele,i)=>{
                                    return <tr>
                                       <td >{ele.name}</td>
                                       <td>{ele.vehicle_number}</td>
                                       <td>{ele.vehicle_model}</td>
                                     </tr>
                                   })
                   
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Passes;