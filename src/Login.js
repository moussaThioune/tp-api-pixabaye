import React, {useState} from 'react'

const Login = () => {
    const[input, setInput]=useState('')
    const handleChange =()=>{

    }
    const handleClick=()=>{

    }
  return (
   <div  style={{marginRight: "850px"}}>
    <form  >
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input onChange={handleChange} type="email" className="form-control"  />
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input onChange={handleChange} type="password" className="form-control"/>
    </div>
   
    <button  onClick={handleClick} type="submit" className="btn btn-success">Submit</button>
  </form>
  </div>
  )
}

export default Login