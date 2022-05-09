        import React from 'react'
        import styled from "styled-components"
        import { Routes, Route, Link} from "react-router-dom";
        import { IoMdArrowDropright } from 'react-icons/io';
         


        const Catediv = styled.div`
        border:1px solid #808099;
        height:20px;
        padding:20px;
        `
        const Para = styled.p`
        color:#808080;
        margin-top:20px;
        `

        const Category = () => {
        return (
            <div>
                <div style={{height:"600px",width:"70%",display:"flex",cursor:"pointer",margin:"auto"}}>
                <div style={{width:"21%",cursor:"pointer",marginTop:"20px"}}>
                    <Catediv>Fashion<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Kitchen<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Accessories<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Health & persional Care<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Electronics<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Electric Appliances<IoMdArrowDropright  style={{marginLeft:"170px",marginTop:"-100px",padding:"20px",color:"#808080"}} /></Catediv>
                    <Catediv>Paintings</Catediv>
                    <Catediv>Anti Puncure Liquid</Catediv>
                </div>

                <div style={{display:"flex"}}>
                <div style={{fontWeight:"bold",padding:"30px"}}>
                    Foot Wear
                    <p>Men's footwear</p>
                    
                 {/* <Link  to="/category/Casual" > <Para>Clasual Chappels/Slippers</Para> </Link> */}
                 <Para>Clasual Chappels/Slippers</Para>
                    <Para>Clasual Sandels</Para>
                    <Para>Clasual Party Shoes</Para>
                    <Para>Chappel/Slippers</Para>
                    <Para>Crocs</Para>
                    <Para>Flip Flops</Para>
                    <Para>Loafers</Para>
                    <Para>Mojdi</Para>
                    <Para>Sneakers</Para>
                    <Para>Sport's Sendels</Para>
                    <Para>Sport's Shooes</Para>
                </div>
                <p style={{fontWeight:"700",padding:"45px"}}>Scoks</p>
                <div style={{fontWeight:"700",padding:"50px"}}>Product Clouser
                    <div style={{marginTop:"10px",color:"#808080"}}>Lace Up</div>
                    <div style={{marginTop:"10px",color:"#808080"}}>Slip On</div>
                    
                </div>
                <b style={{fontWeight:"700",padding:"30px"}}>Clothing
                    <div style={{marginTop:"10px",color:"#808080"}}>Men's Clothing</div>
                    <div style={{marginTop:"10px",color:"#808080"}}>Women's Clothing</div>
                </b>
                </div>

                </div>
            </div>
        )
        }

        export default Category
