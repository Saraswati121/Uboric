import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';





const Privecy = () => {
  return (
   <div style={{margin:"auto",textAlign:"center"}}>
    <h2 style={{color:"#257"}}>Terms & Condition</h2>
    <h4 style={{color:"#257",marginTop:"15px"}}>Home<MdKeyboardArrowRight/> Terms & Condition</h4>
    <div style={{width:"60%",margin:"auto",textAlign:"justify",fontSize:"larger"}}>
    <div style={{marginTop:"30px",letterSpacing:"0.5px"}}>First things first, privacy and security of your personal information is our priority. We assure you that the user or customer information collected through accessing, using, browsing or otherwise of the instant website, is safe, kept on a secure server and fully compliant with all of the relevant consumer laws. All payment transactions are made only through encrypted SSL technology Note: Our privacy policy is subject to change from time to time without notice. To make sure you are aware of the changes, please review this policy periodically. Further, this privacy statement does not apply to our business partners, affiliates or other third parties. Please review the privacy statements of the other parties with whom you may interact</div>

    <ol style={{fontWeight:"700"}}>WHAT USER OR CUSTOMER INFORMATION DOES UBORIC.COM COLLECT?
        <li style={{color:'#808080',marginTop:"50px"}}> Your contact details such as customer name, email address account password, phone number and shipping address</li>
        <li style={{color:'#808080',marginTop:"30px"}}>Your transaction or banking details such as credit/debit card number, cardholder name, expiration date and CVV and/or other information as required for internet banking or other payment instruments is not held by vegnonveg.com but is held by our Payment Gateway partner (RAZORPAY). Our payment gateway partner is “VeriSign Secured” and “PCI-Compliant” which ensures the highest standards of protection and security for your information.</li>
        <li style={{color:'#808080',marginTop:"30px"}}>Your previous orders and transactions including the product and pricing details, the date of purchase, transaction information, payment history etc.</li>
        <li style={{color:'#808080',marginTop:"30px"}}> Information from optional online surveys on our and/or third party sites (posted by UBORIC.com) which may include demographic information (like gender, age, income) as well as product and service preferences of users.</li>                           
        
    </ol>
    </div>
    </div>
  )
}

export default Privecy