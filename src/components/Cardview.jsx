import React from 'react'
import Shoes1 from '../images/shoes1.jpeg'

export default function Cardview() {
  return (
   
      <div style={{ padding: "5px", height: "59vh", width: "300px", border: "2px solid black", borderRadius: "10px", position: "relative" }}>
        <svg style={{ position: "absolute", right: "10px", top: "10px" }}
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>

        <img style={{ padding: "2%", borderRadius: "10px", height: "60%", width: "95%" }} src={Shoes1} alt="" />
        <div style={{ display: "flex", justifyContent: "center" }}><h4 > Nike Shoes</h4></div>
        <button style={{
          backgroundColor: "yellow", border: "2px solid black", display: "flex", justifyContent: "center",
          alignItems: "center", width: "95%", height: "35px", margin: "auto"
        }}><p>Add to Cart</p> </button>


      </div >









 
 
  )
}
