import axios from "axios";
import { createContext, useEffect, useState } from "react";




export let DataContext = createContext([]);

export  function DataContextProvider (props) {

    let [movies , setMovie] = useState([]);
    let [tv , setTv] = useState([]);
    let [actors , setActor] = useState([]);
  
  
    async function getData(mediaType ,callBack){
  try {
    
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fc933f3e9bcd8a0b1682223d6f45e624`);
  
    callBack(data.results);
  
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


 <DataContext.Provider value={{movies , tv ,actors}} >
    
    {props.children}
    
     </DataContext.Provider>


)


}