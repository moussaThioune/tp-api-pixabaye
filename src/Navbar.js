import React from 'react'
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <nav style={{backgroundColor:"#2A7E"}} className='nav justify-content-end  navbar navbar-light mt-2'>
     <ul className='nav nav-pills nav-fill'>
       <li>
       <Link className="nav-link" to="/">ContactList</Link>
       </li>
       <li nav-item>
       <Link  className="nav-link"  to="/about">About</Link>
       </li>
       <li nav-item>
       <Link className="nav-link" to="/gallery">Gallery</Link>
       </li>
       <li nav-item>
       <Link className="nav-link " to="/register">SignUp</Link>
       </li>
       <li nav-item>
       <Link className="nav-link" to="/login">Login</Link>
       </li>
     </ul>
     
      </nav>
  
  )
}

export default Navbar