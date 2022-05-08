import React,{useState} from 'react'
import Signup from './Signup'
import SignupSuccess from './SignupSuccess'

const Form = () => {

  const [formSubmit,setFormSubmit]=useState(false)

  const submitForm=()=>{
    setFormSubmit(true);
  }
  return (
    <div>
        {!formSubmit ? <Signup submitForm={submitForm}/>:<SignupSuccess />}
    </div>
  )
}

export default Form