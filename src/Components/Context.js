import { createContext, useState} from "react";
import {useEffect } from 'react';
export const allContext =createContext();


function CustomProvider({children}){

    const [islogedin,setIslogedin]=useState(true);
    
    const [user,setUser]=useState({
        email:"",
        password:""
    });
   // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1

    let API_key="&api_key=db95773a7fb212ba790d71f6adac0e7e";
    let base_url="https://api.themoviedb.org/3";
    let url=base_url+"/movie/top_rated?=popularity.desc"+API_key;
     
     const[toprated,setToprated]=useState([])
    const [set,setUrl]=useState(url);
      
      useEffect(()=>{
          fetch(url).then(res=>res.json()).then(data=>{
            setToprated(data.results);
              console.log(data.results)
          });
      },[set])
  
    

    return <allContext.Provider value={{islogedin, setIslogedin,user,setUser,toprated,setToprated}}>
        {children}
    </allContext.Provider>
}
export  default  CustomProvider;
 