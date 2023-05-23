import React, {useState,useEffect} from "react";
import './Signin.css';import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useRef } from "react";
import axios from "axios";
function Signin(){    
    const id1 = useRef(null);
    const [form,SetForm]=useState('');
    const [isLoggin,SetIsLoggin]=useState(false);
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    let [data, setData] = useState([]) // let data = []
    let api = "http://localhost:5004/logindata";
    useEffect(() => {
        axios.get(api).then((response) => {
            console.log(response.data)
            setData(response.data);            
        });
      }, []);
    const SetLog=(name,value)=>{
        data.forEach((ele)=>{
             if(name===ele.username){
                   if(password==ele.password){
                    SetIsLoggin(true);
                   }
                   else{
                        id1.current.style.display = 'block';
                   }
             }
             else{
                  id1.current.style.display = 'block';
             }
        })
    }
    if(isLoggin){
        return(
            <Dashboard/>
        )
    }
    return (
        <>
        <div className="lgin">
        <div className="row">
                <div className="col-md-3 name">
                    <h1>Vehicle Vault</h1>
                </div>
                <div className="col-md-9"></div>
            </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 lgn">
                <div className="sbox">
                    
            <h2 style={{textAlign:"center",width:"100%"}}>Log In</h2> 
                <br/>
                <Form>
        <Form.Group controlId="form.UserName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Username"  onChange={(e)=>{setName(e.target.value); console.log(e.target.value)}}/>
        </Form.Group>

        
        <Form.Group controlId="form.Pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" name="password" onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}} />
        </Form.Group>
        <br/>
        <h6 style={{color:'Blue', display:'none'}} ref={id1} >Invalid Details</h6>
        <br/>
        <center><Button onClick={()=>SetLog(name,password)} className="bgp">Log in</Button></center>
      </Form>
</div>
            </div>
            <div className="col-md-3"></div>
        </div>
        </div>
        </>
    )
}
export default Signin;