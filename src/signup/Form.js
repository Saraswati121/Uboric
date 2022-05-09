import React, { useState } from "react";
import Signup from "./Signup";
import SignupSuccess from "./SignupSuccess";
import Navbar from "../component/Navbar/Navbar";
const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const submitForm = () => {
    setFormSubmit(true);
  };
  return (
    <>
      <Navbar />
      <div>
        {!formSubmit ? <Signup submitForm={submitForm} /> : <SignupSuccess />}
      </div>
    </>
  );
};

export default Form;
