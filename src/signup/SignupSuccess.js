import React from 'react'
// import "./App.css"

const SignupSuccess = () => {
  
  return (
    <div>
      <h3 style={{color:"blue"}}>My account</h3>
      <h3 style={{color:"blue"}}>Home - My account</h3>
      
      <div style={{ display:'flex'}}>
      <div style={{height:"500px",width:"400px"}}>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Dashboard</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/orders/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Order</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/downloads/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Download</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/edit-address/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Address</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/edit-account/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Account Detail</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/request-quote/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Quotes</h1></a>
        <a style={{textDecoration:"none"}} href='https://www.uboric.com/my-account/erf-my-account/'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Submission</h1></a>
        <a style={{textDecoration:"none"}} href='/Logout'><h1 style={{height:"auto",width:"80%",backgroundColor:"teal"}}>Logout</h1></a>
      </div>

      <div style={{height:"500px",width:"80%"}}>
        <h3>HELLO</h3>
        <h3>WELCOME TO UBORIC</h3>
        <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
      </div>

      </div>
      
    </div>
  )
}

export default SignupSuccess