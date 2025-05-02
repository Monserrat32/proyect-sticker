import { useState } from 'react';
import {AddCategory,GitGrid} from './components'
export const GitExpExpert = () => {

const [categories, setCategories] = useState(['One Punch'])

const onAddCategorie = (wewCategory) =>{
    if(categories.includes(wewCategory)) return
     setCategories([...categories,wewCategory])
}

  return (
   <>
          <p>GitExpert</p> 

          <AddCategory onNewCategory={onAddCategorie}/>
        
        
          {
          categories.map((category =>
                  
            <GitGrid key={category} category={category}/>
              
          ))
          }
       
   </>
  )
}   
