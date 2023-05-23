import Home from './Home';
import Details from './Details';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import Dashboard from './Dashboard';
import Passes from './Passes';
import Reports from './Reports';
import Profile from './Profile';
import GeneratePasses from './GeneratePasses';
import React, { useState } from 'react';
import './Flip.css';
import ProfileManagement from './ProfileManagement';
import Displaydata from './Displaydata';
import Totaltable from './Totaltable';
function App() {
  return (
    <>    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/generatepasses" element={<GeneratePasses/>}/>
          <Route path="/passes" element={<Passes/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profilemanagement" element={<ProfileManagement/>}/>
        </Routes>
    </>
  );
}

export default App;







// function FlipCard() {
  

//   return (
    
//   );
// }

// export default FlipCard;