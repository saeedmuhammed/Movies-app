import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  let navigate = useNavigate();
  let[errors,setError]=useState([]);
  let[loading , setLoading] = useState(false);
   let[user , setUser] =useState({
    first_name:'',last_name:'',age:0,email:'',password:''
   });

   function getUser(e){

    let myUser = {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser);
   }


   async function submitForm(e){
    e.preventDefault();
    setLoading(true);

    let validationResponse = validateForm();

    if(validationResponse.error) {
     
      setError(validationResponse.error.details);
      setLoading(false);
    }
    else {
      setError([]);
      
      try {
     
        let { data } = await axios.get('https://645af92c65bd868e9327c24e.mockapi.io/register'); //fake api all time get false
        setLoading(true);
        if(!data[0].success){
          console.log('Done');
          localStorage.setItem('user',JSON.stringify(user)); 
          setTimeout(()=>{
            setLoading(false); 
            navigate('/login');
          },1000)
          
        }
        else {
          setLoading(false);
          console.log("error from api");
        }


      } catch (error) {
        setLoading(false);
        console.log("error from api");
        console.log(error);
      }
     

    }


   }

   function validateForm(){

      let scheme = Joi.object({
        first_name : Joi.string().min(2).max(10).required(),
        last_name:Joi.string().min(2).max(10).required(),
        age : Joi.number().min(18).max(50).required(),
        email : Joi.string().email({ tlds: { allow: ['com', 'net', 'org'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')),
      });

      return scheme.validate(user,{abortEarly:false});

   }




  return (
    <>
      <div className='text-center w-[500px] m-auto h-[72vh]'>

      <h1 className='my-10 text-4xl'> Signup</h1>

      

      <div className=''>
      <form onSubmit={submitForm}>

        {errors.map((error,index) => 
          <div key={index} className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-2" role="alert">
          <span className="block sm:inline">{error.message.includes('password')? 'Invalid Password': error.message }</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          </span>
        </div>
        )}
        <input onChange={getUser} type='text' placeholder='First Name' className='w-full my-4 p-2 rounded' name='first_name'></input>
        <input onChange={getUser} type='text' placeholder='Last Name' className='w-full my-4 p-2 rounded' name='last_name'></input>
        <input onChange={getUser} type='age' placeholder='Age' className='w-full my-4 p-2 rounded' name='age'></input>
        <input onChange={getUser} type='email' placeholder='Email' className='w-full my-4 p-2 rounded' name='email'></input>
        <input onChange={getUser} type='password' placeholder='Password' className='w-full my-4 p-2 rounded' name='password'></input>
        {loading? <button disabled type="button" className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 font-medium rounded-lg text-lg px-8 py-3 text-center mr-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:bg-red-700 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
</button> :  <button type='submit' className='bg-red-700 px-[55px] py-3 text-lg rounded-lg pl-14 ' > Signup </button>
 }
 


      </form>
    
      </div>

      </div>
     
    
    
    
    
    </>
  )
}
