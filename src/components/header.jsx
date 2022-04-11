import React from 'react'

export default function Header() {
    return (
        <div style={{ margin:"2px",display: "flex", justifyContent:'space-between', alignItems: "center", width: "100%", height: "50px", backgroundColor: "lightblue" }}>
            <div style={{ display: 'flex', gap: "10px" }}>
                <h3 style={{color:"white"}}>Home</h3>
                <h3 style={{color:"white"}}>About us</h3>
            </div>
            
            <div style={{ display: 'flex',alignItems:"center", gap: "10px" }}>
                <input type="text"  style={{height:"30px"}}/>
                <h3 style={{color:"white"}}>Search</h3>
            </div>
        </div>
    )
}
