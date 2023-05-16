
import React, { useContext} from 'react'
import { DataContext } from '../../DataContext';
import { useNavigate } from 'react-router-dom';


export default function Tv() {
 
  let {tv} = useContext(DataContext);
  let navigaet = useNavigate();


  let imagePrefix = 'https://image.tmdb.org/t/p/w500';

 
  function showDetails (type,id)  {

    navigaet('/home/movieDetails',{ state: { id: id , type:type } });
    }
  return (
    
    
    <>

        <div className='pb-16'>

        <h1 className='text-center text-4xl pt-10'> Series
          </h1>
          <hr className='w-[120px] m-auto mt-2' />
         
         
    <div className='grid sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 mx-auto max-w-7xl gap-5 py-12'>
     {tv.map((tv , index)=><div onClick={()=>showDetails('tv',tv.id)} key={index} className='' > 
      <img src={imagePrefix+tv.poster_path} alt={tv.name} className='cursor-pointer' />
      <h1 className='cursor-pointer text-md text-center pt-2'> {tv.name} </h1>  
    </div>
)}
</div>

        </div>

      


    </>


    
    
    
    )
}
