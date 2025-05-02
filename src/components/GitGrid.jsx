import { useEffect, useState } from 'react';
import {GitGridItem} from './GitGridItem';
import {getGifts} from '../helpers/getGifts';
import { useFechGifts } from '../hooks/useFechGifts';


export const GitGrid = ({category}) => {
 
  const {img,isLoading} = useFechGifts(category);
 
  console.log(isLoading);
  

  return (
    <>
        <h3>{category}</h3>
        {
           isLoading&&( <h2>Cargando ...</h2>)
        }
       
        <div className='card-grid'>
             {/*  */}
            {img.map((img)=>(
              <GitGridItem 
              key={img.id}
              {...img}/>
                    // <li key={id}>{title}</li>
            ))} 
        </div>
       

            
      
        
    </>
  )
}
