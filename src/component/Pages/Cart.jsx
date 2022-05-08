import React from 'react'

const Cart = () => {
  return (
      <div style={{marginLeft:"1100px"}}>
    <div style={{height:"400px",width:"300px",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px",padding:"5px"}}>
        <h1 style={{color:'#1e516c'}}>Sign In</h1>
        <div style={{margin:'auto',justifyContent:"center",textAlign:"center"}}>
        <button style={{padding:"20px",backgroundColor:"white",border:"none"}}>CREATE AN ACCOUNT</button>
        <div>
            <label style={{marginRight:"150px"}}>UserName or Email*</label><br />
            <input style={{padding:"12px",width:"250px"}} type="text" id='email'/><br />
            <label style={{marginRight:"220px"}}>Password*</label><br />
            <input  style={{padding:"12px",width:"250px"}} type="text"  id='password'/>

        </div>
        <h3 style={{color:"#808080"}}>LOST YOUR PASSWORD?</h3>
        <button style={{padding:"10px",backgroundColor:"#fd6",width:"250px",marginTop:"30px"}} id="submit">Log in</button>
        </div>
    </div>
    </div>
  )
}

export default Cart