import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Tv() {
  let [series , setMovie] = useState([]);


  let imagePrefix = 'https://image.tmdb.org/t/p/w500';

  async function getData(){
try {
  
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=fc933f3e9bcd8a0b1682223d6f45e624`);


  console.log(data);
  setMovie(data.results.slice(0,));

} catch (error) {
  console.log(error);
}
   
   

  }
  
  
  useEffect(()=>{
    getData();
  },[]) //component did mount



  return (
    
    
    <>

        <div className='pb-16'>

        <h1 className='text-center text-4xl pt-10'> Series
          </h1>
          <hr className='w-[120px] m-auto mt-2' />
         
         
    <div className='grid grid-cols-5 mx-auto max-w-7xl gap-5 py-12'>
     {series.map((tv , index)=><div key={index} className='' > 
      <img src={imagePrefix+tv.poster_path} alt={tv.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {tv.name} </h1>  
    </div>
)}
</div>

        </div>

      


    </>


    
    
    
    )
}
