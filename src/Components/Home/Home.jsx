import React, { useContext} from 'react'
import { DataContext } from '../../DataContext';

export default function Home() {
  
let {movies , tv , actors} = useContext(DataContext);


let imagePrefix = 'https://image.tmdb.org/t/p/w500';

  
  
  return (
   <>
   <div className='pb-20'> 

   <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Movies  <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding movies to watch </h3>

      </div>
     {movies.map((movie , index)=> index < 10 ?  <div key={index} className='' > 
      <img src={imagePrefix+movie.poster_path} alt={movie.title} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {movie.title} </h1>  
     </div> : ''
)}


    </div>
    <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left order-last'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Series <br/> To Watch <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding series to watch </h3>

      </div>
     {tv.map((tv , index)=> index < 10 ? <div key={index} className='' > 
      <img src={imagePrefix+tv.poster_path} alt={tv.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {tv.name} </h1>  
     </div> : ''
)}


    </div>
    <div className='grid grid-cols-6 mx-auto max-w-7xl gap-5 py-12'>
      <div className='col-span-2 text-left'>
         <hr className='mb-2' />
         <h1 className='text-5xl leading-[60px]'> Trending Actors <br/> To Know <br/> Right Now</h1>
         <h3 className='text-2xl text-gray-500'> Treinding actors to know </h3>

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
