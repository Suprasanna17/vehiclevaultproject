import React from "react";
import './App.css';
import './Dashboard.css';
import './bootsrap.css';
import './GeneratePasses.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRef } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
function Dashboard(){
    const [name,SetName] = useState('');
    const [mobile,SetMobile] = useState('');
    const [email,SetEmail] = useState('');
    const [date,SetDate] = useState('');
    const [vehicle_type,SetType] = useState('');
    const [vehicle_model,SetModel] = useState('');
    const [vehicle_number,SetNumber] = useState('');
    const [college,SetCollege] = useState('');
    const [log, Setlog] = useState(false);
    let fref1 = useRef(null);
    const fref2 = useRef(null);
    const fref3 = useRef(null);
    const fref4 = useRef(null);
    const fref5 = useRef(null);
    const fref6 = useRef(null);
    const fref7 = useRef(null);
    const fref8 = useRef(null);
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
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(name,mobile);
        const res=await fetch('http://localhost:5004/createUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name,mobile,email,date,vehicle_type,vehicle_model,vehicle_number,college})
        })
    }
    const formRef = useRef(null);

  const handleClear = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    alert("Pass is Generated");
  };
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
                    {/* <Link to="/profile" className="und"><p className='lk'>&nbsp;<i className="fas fa-user" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Profile</p></Link> */}
                    <Link to="/dashboard" className="und"><p className='lk'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Generate Passes</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                        {/* <Link to="/profile" className="und"><p className='lk1'>&nbsp;<i className="fas fa-user" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Profile</p></Link> */}
                    <Link to="/dashboard" className="und"><p className='lk1'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <div onClick={logoutFunction} className="und logout"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></div>
                        </div>
                    </div>
                    <div className="box">
                    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Form.Group controlId="form.Name" id="k1" className="k2">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" placeholder="Enter name" ref={fref1} onChange={(e)=>SetName(e.target.value)} id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Number" id="k1">
            <Form.Label><b>Phone Number</b></Form.Label>
            <Form.Control type="text" placeholder="94********" ref={fref2} onChange={(e)=>SetMobile(e.target.value)} id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Email" id="k1">
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control type="email" placeholder="name@example.com" ref={fref3} onChange={(e)=>SetEmail(e.target.value)} id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Email" id="k1">
            <Form.Label><b>Date</b></Form.Label>
            <Form.Control type="date" ref={fref4} onChange={(e)=>SetDate(e.target.value)} id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>Vehicle Type</b></Form.Label><br/>
            <Form.Control as="select" ref={fref5}  onChange={(e)=>SetType(e.target.value)} id="inp" className="slt">
                <option>&nbsp;Select Vehicle Type</option>
                <option value={"two wheeler"}>two Wheeler</option>
                <option value={"three wheeler"}>three Wheeler</option>
                <option value={"four wheeler"}>four Wheeler</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>Vehicle Model</b></Form.Label>
            <Form.Control type="text" ref={fref6}  onChange={(e)=>SetModel(e.target.value)} placeholder="Model" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Vno" id="k1">
            <Form.Label><b>Vehicle Number</b></Form.Label>
            <Form.Control type="text" ref={fref7}  onChange={(e)=>SetNumber(e.target.value)} placeholder="Enter Vehicle Number" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>College</b></Form.Label><br/>
            <Form.Control as="select" ref={fref8}  onChange={(e)=>SetCollege(e.target.value)} id="inp" className="slt">
                <option>&nbsp;Select College</option>
                <option value={"AEC"}>AEC</option>
                <option value={"ACET"}>ACET</option>
                <option value={"ACOE"}>ACOE</option>
            </Form.Control>
        </Form.Group>
        <br/>
        <center><Button id="genbtn" type="submit" onClick={handleClear}>Generate Pass</Button></center>
        
      </Form>
    </Container> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;