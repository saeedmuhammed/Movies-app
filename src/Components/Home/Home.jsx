import React, { useContext} from 'react'
import { DataContext } from '../../DataContext';
import {  useNavigate } from 'react-router-dom';

export default function Home() {
  
let {movies , tv , actors} = useContext(DataContext);
let navigaet = useNavigate();

let imagePrefix = 'https://image.tmdb.org/t/p/w500';

  
  function showDetails (type,id)  {

   navigaet('/home/movieDetails',{ state: { id: id , type : type } });
   }

  
  return (
   <>


   <div className='pb-20'> 

   <div className='grid sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl  leading-[60px] sm:text-center lg:text-left'> Trending Movies  <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500 sm:text-center lg:text-left'> Treinding movies to watch </h3>

      </div>
     {movies.map((movie , index)=> index < 10 ?  <div onClick={()=>showDetails('movie',movie.id)} key={index} className='' > 
      <img src={imagePrefix+movie.poster_path} alt={movie.title} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {movie.title} </h1>  
     </div> : ''
)}


    </div>
    <div className='grid sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left order-last'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px] sm:text-center lg:text-left'> Trending Series <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500 sm:text-center lg:text-left'> Treinding series to watch </h3>

      </div>
     {tv.map((tv , index)=> index < 10 ? <div onClick={()=>showDetails('tv',tv.id)} key={index} className='' > 
      <img src={imagePrefix+tv.poster_path} alt={tv.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {tv.name} </h1>  
     </div> : ''
)}


    </div>
    <div className='grid  sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px] sm:text-center lg:text-left'> Trending Actors <br/> To Know <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500 sm:text-center lg:text-left'> Treinding actors to know </h3>

      </div>
     {actors.map((actor , index)=> index < 10 ? <div key={index} className='' > 
      <img src={imagePrefix+actor.profile_path} alt={actor.title} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {actor.name} </h1>  
     </div> : ''
)}


    </div>

   </div>
   
   
   </>
  )
}
