import React from 'react'
import Productcatagory from './Productcatagory'
import FootWare from './Footware'
import './style.css'
const FootWarebody = () => {
  return (
    <>
      <h1 style={{ color: 'darkgreen', letterSpacing: '5px' }}>Men's Ware</h1>
      <p style={{ color: 'darkgreen', letterSpacing: '5px' }}>
        Home -- Product--Foodware--MensWare
      </p>
      <div className="all-in">
        <div>
          <FootWare />
        </div>
      </div>
    </>
  )
}

export default FootWarebody
