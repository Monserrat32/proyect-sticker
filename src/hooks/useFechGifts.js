import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";


export const useFechGifts = (category) => {
     const [img, setImgs] = useState([]);
     const [isLoading, setIsloading] = useState(true)

     const getImages = async ()=>{
        const  newImagenes  = await  getGifts(category);
        setImgs(newImagenes);
        setIsloading(false);
     } 
     
      useEffect(()=>{
        getImages();
      },[])
  
  return {
    img:img,
    isLoading:isLoading
  }
   
  
}
