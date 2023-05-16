import React from 'react'
import logo from '../../images/logo-dark.webp'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <>
    <div className='w-full flex justify-between p-2  py-4 z-[10] relative'> 

    <div className='flex'>
      <div className='mr-5'>
        
        <NavLink to={props.loginUser === null ? '#' :'/home' }     > 
        <img src={logo} alt=""/>
        </NavLink>
      </div>
      { props.loginUser === null ? '' : 
      
      <div>
      <ul className='flex'>
         <li className='px-2'> <NavLink to='/home'>Home</NavLink></li>
         <li className='px-2'><NavLink to='/movies'>Movies</NavLink></li>
         <li className='px-2'><NavLink to='/tv'>Tv</NavLink></li>
         <li className='px-2'><NavLink to='/gallery'>Gallery</NavLink></li>
       </ul>
      </div>
      
      }
    
   
    </div>
    <div className='flex '>
      <div className='mr-3 xs:hidden md:flex '>
        {props.loginUser !== null ? <h4 className='inline mr-5 '>Hello!  {props.loginUser.name} </h4>  :''}
        <a href="http://google.com"><i className="fa-brands fa-facebook px-2"></i></a>
        <a href="http://google.com"><i className="fa-brands fa-twitter px-2"></i></a>
        <a href="http://google.com"><i className="fa-brands fa-instagram px-2"></i></a>
      </div>
      <div>
        <ul className='flex'>
          {props.loginUser === null ? [ <li key={0} className='px-2'><NavLink to='/register'>Register</NavLink></li> ,
          <li key={1} className='px-2'><NavLink to='/login'>Login</NavLink></li>] : <li onClick={props.logout} className='px-2'>Logout</li> }   
         
          
       
        </ul>
      </div>
    </div>



    </div>




    </>    
  )
}
