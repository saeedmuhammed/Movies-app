import React, { useEffect, useState } from 'react'
import style from './MovieDetails.module.css'
import img from '../../images/wallpaperflare.com_wallpaper.jpg'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';



export default function MovieDetails() {
 
    let location = useLocation();

    let [movieName,setName] = useState('');
    let [overview,setOverview] = useState('');
    let [category,setCategory]=useState([]);
    let [reviews , setReview] = useState(0);
    let [image , setImage] = useState('');
    let [images , setImages] = useState([]);
    let imagePrefix = 'https://image.tmdb.org/t/p/original';
    
    async function getData (type , id) {

        let {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=fc933f3e9bcd8a0b1682223d6f45e624`);
        if (type === 'movie') {
            let {genres,original_title,overview,vote_count , backdrop_path}= data;
            setName(original_title);
            setOverview(overview);
            setCategory(genres);
            setReview(vote_count);
            setImage(backdrop_path);
         
        }   
        else {
            let {genres,original_name,overview,vote_count , backdrop_path}= data;
            setName(original_name);
            setOverview(overview);
            setCategory(genres);
            setReview(vote_count);
            setImage(backdrop_path);
        
        }  
       

    }
    async function getImages(type ,id){

        let{data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=fc933f3e9bcd8a0b1682223d6f45e624`)
        let images =data.backdrops.slice(0,3); 
        setImages(images);
        
    }


    useEffect(()=> {

        getData( location.state.type ,location.state.id);
        getImages(location.state.type , location.state.id);
        
    } ,[]);


    return (
        
        <>
        
        <div className={style.landpage}>
            <img src={imagePrefix+image} alt="" />
            <div className={style.overlay}> </div>
            <div className={style.details}>
                <h1> {movieName} </h1>
                <h2> {category.map((type , index)=> index === 0 ?  type.name :  ' / ' + type.name)} </h2>

                <div className="flex items-center stars">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <h3> ( {reviews} reviews )</h3>
                </div>

                <p> {overview} </p>
                <span className='text-center px-5 py-2 text-white absolute bottom-[-80px] border-white border-[3px]'>
                    <Link> Watch Now </Link>

                </span>

         

            </div>

            <div className={style.images}>
                {images.map((image,index)=>
                     <img key={index} src={imagePrefix+image.file_path} alt="" />     
                )}
          
            </div>
        

        </div>
    
        

        </>
    )
}
