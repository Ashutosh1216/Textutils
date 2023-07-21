import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useLocation
// } from "react-router-dom";
//let name="harry";
function App() {
 const[mode,setMode]=useState('light');
 const[alert,setAlert]=useState(null);
 const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout (()=>{
  setAlert(null);
 },1500)
 }
 const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode has been enabled","success");
  document.title='TextUtils-Dark Mode';
  // setInterval(()=> {
  //   document.title='TextUtils - Dark hmmm';
  // },2000);
  // setInterval(()=> {
  //   document.title='TextUtils - Dark hm';
  // },1500);
  // }
  }
  else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("light mode has been enabled","success");
  document.title='TextUtils-Light Mode';
  }
 }
  return (
    <>
{/* <Navbar title="TextUtil2" aboutText="About TextUtils"/> */}
{/* <Router> */}
<Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch> */}
      {/* <Route path="/about" exact>
        <About />
      </Route> */}
      {/* <Route path="/" exact> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
      {/* </Route> */}
{/*  </Switch> */}

   </div>
   {/* </Router> */}
    </>
  );
}

export default App;
