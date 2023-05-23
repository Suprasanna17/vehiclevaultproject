import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { MDBDataTable } from 'mdbreact';
import './ProfileManagement.css';
import { Table } from 'react-bootstrap';
import Totaltable from './Totaltable';
function ProfileForms(){
    const fref = useRef(null);
    const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (fref.current) {
        fref.current.reset();
      }
  }
  const handleClear = () => {
    if (fref.current) {
      fref.current.reset();
    }
    alert("Successfull");
  };
function Createform(){
    const [username,setUser]=useState('');
    const [password,setPass]=useState('');
    const formRef = useRef(null);
    const formRef2=useRef(null);
    const handleSubmit=async(e)=>{

        const data={
            username:username,
            password:password
        }
        e.preventDefault();
        const res=await fetch('http://localhost:5004/logindata',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }
    return(
            <form onSubmit={handleSubmit} ref={fref}>
            <div className="cform">
            <table>     
                <center><h2>Create Profile</h2></center>
                <br/>

                <tr>
                    <td style={{backgroundColor: "white"}}><input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='Enter useranme' style={{borderRadius:"6px"}}></input></td>
                </tr>

                <tr>
                    <td style={{backgroundColor: "white"}}><input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='Enter Password' style={{borderRadius:"6px"}}></input></td>
                </tr>
                <br/>
                <tr>
                    <td  style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Create" style={{backgroundColor:"#0E8388",color:"white",width:"50%",borderRadius:"6px"}} onClick={handleClear}></input></td>
                </tr>
            </table>
        </div>
        </form>
    )
}
function Updateform(){
    const [data,setdata] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5004/createUser').then((res)=> setdata(res.data));
     },[])
     console.log(data);
    return (
        <>
        <center>
        <div className="tform">   
            <br/><br/>
            <center><h2>Get Profiles</h2></center>     
            <Totaltable/>
        </div>
        </center>
        </>
    );
    
}
function Deleteform(){
    const [username,setUser]=useState('');
    const formRef = useRef(null);
    const handleSubmit=async(e)=>{

        const data={
            username:username,
        }
        e.preventDefault();
        const res=await fetch('http://localhost:5004/deletedata',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    }
    
    return(
        <form onSubmit={handleSubmit} ref={fref}>
        <div className="cform">


        <table>   
                 <center><h2>Delete Profile</h2></center>
                 <br/>
            <tr>
                <td style={{backgroundColor: "white"}}><input type="text" placeholder='Enter username' style={{borderRadius:"6px"}} onChange={(e)=>setUser(e.target.value)}></input></td>
            </tr>
            <br/>
            <tr>
                <td  style={{textAlign:"center",backgroundColor:"white"}} colspan="2"><input type="submit" value="Delete" style={{backgroundColor:"#0E8388",color:"white",width:"50%",borderRadius:"6px"}} onClick={handleClear}></input></td>
            </tr>
        </table>
    </div>
    </form>
    )
}

    return(
        <div className="containerFluid profm">
            <div className="row">
                <div className="profmb" style={{marginTop:"10%",display:"flex",justifyContent:"center",justifyContent:'spaceBetween',justifyContent:"space-around"}}>
                    <Button variant="success" className='col-md-3' onClick={() => handleClick('button1')}>Get Profiles</Button>
                    <Button variant="warning" className='col-md-3' onClick={() => handleClick('button2')}>Create Profile</Button>
                    <Button variant="danger" className='col-md-3' onClick={() => handleClick('button3')} >Delete Profile</Button>
                </div>
            </div>



            <div className='profmform'>
            {selectedButton === 'button1' && <Updateform />}
      {selectedButton === 'button2' && <Createform />}
      {selectedButton === 'button3' && <Deleteform />}
        </div>
        </div>
    )
}
export default ProfileForms;