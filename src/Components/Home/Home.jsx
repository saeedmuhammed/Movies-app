import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  

  let [movies , setMovie] = useState([]);
  let [tv , setTv] = useState([]);
  let [actors , setActor] = useState([]);

  let imagePrefix = 'https://image.tmdb.org/t/p/w500';

  async function getData(mediaType ,callBack){
try {
  
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fc933f3e9bcd8a0b1682223d6f45e624`);

  callBack(data.results.slice(0,10));

} catch (error) {
  console.log(error);
}
   
   

  }
  
  
  useEffect(()=>{
    getData('movie',setMovie);
    getData('tv',setTv);
    getData('person',setActor);

  },[]) //component did mount
  
  
  
  return (
   <>
   <div className='pb-20'> 

   <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Movies <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding movies to watch </h3>

      </div>
     {movies.map((movie , index)=><div key={index} className='' > 
      <img src={imagePrefix+movie.poster_path} alt={movie.title} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {movie.title} </h1>  
     </div>
)}


    </div>
    <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left order-last'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Series <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding series to watch </h3>

      </div>
     {tv.map((tv , index)=><div key={index} className='' > 
      <img src={imagePrefix+tv.poster_path} alt={tv.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {tv.name} </h1>  
     </div>
)}


    </div>
    <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Actors <br/> To Know <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding actors to know </h3>

      </div>
     {actors.map((actor , index)=><div key={index} className='' > 
      <img src={imagePrefix+actor.profile_path} alt={actor.title} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {actor.name} </h1>  
     </div>
)}


    </div>

   </div>
   
   
   </>
  )
}
