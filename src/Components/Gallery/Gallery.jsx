
import React, { useContext} from 'react'
import { DataContext } from '../../DataContext';


export default function Gallery() {

  let {actors} = useContext(DataContext);
  let imagePrefix = 'https://image.tmdb.org/t/p/w500';

 


  return (
    
    
    <>

        <div className='pb-16'>

        <h1 className='text-center text-4xl pt-10'> Actors
          </h1>
          <hr className='w-[120px] m-auto mt-2' />
         
         
    <div className='grid sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 mx-auto max-w-7xl gap-5 py-12'>
     {actors.map((actor , index)=><div key={index} className='' > 
      <img src={imagePrefix+actor.profile_path} alt={actor.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {actor.name} </h1>  
    </div>
)}
</div>

        </div>

      


    </>


    
    
    
    )
}
