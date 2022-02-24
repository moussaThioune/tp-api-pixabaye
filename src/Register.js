import React, {useState} from 'react'

const Register = () => {
    const[input, setInput]=useState('')
    const handleChange =()=>{

    }
    const handleClick=()=>{

    }
  return (
<div style={{marginRight: "850px"}}>
  <form>
  <div className="mb-3">
    <label  className="form-label">Nom</label>
    <input onChange={handleChange} type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Prenom</label>
    <input onChange={handleChange} type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleChange} type="email" className="form-control"  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input onChange={handleChange} type="password" className="form-control"/>
  </div>
 
  <button onClick={handleClick} type="submit" className="btn btn-success">Submit</button>
</form>
      </div>
  )
    
}

export default Register