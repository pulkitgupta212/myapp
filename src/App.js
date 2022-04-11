import logo from './logo.svg';
import './App.css';
import Dev from './dev';
import Header from './components/header';
import Cards from './components/itemCards';
import Cardview from './components/Cardview';

import Dashboard from './dashboard';
function App() {
  return (
   <>
   {/* <Dashboard/> */}
    <Header/>
    <div style={{display:"flex",gap:'10px',flexDirection:"row"}}>
    <Cards/>
    <Cardview/>""
    {/* {<div style={{ fontSize:"100px", width:"100%",height:"100vh",display:"flex", border:"2px solid black"}}> } */}
  {/* <h3 style={{padding:"auto",}}>  Welcome</h3> */}
   
    </div>
    {/* </div> */}
   </>
  );
}

export default App;
