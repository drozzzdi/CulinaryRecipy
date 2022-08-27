import './breakfast.css';
import {useEffect, useState} from "react";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

function Breakfast() {
  const [breakfast, setBreakfast]=useState([]);

useEffect(()=>{
  getBreakfast()
},[])

const getBreakfast=async()=>{
  const check=localStorage.getItem('breakfast');

  if(check){
    setBreakfast(JSON.parse(check))
  }else{
    const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=34b707a8e64c4c4687e1fa25a6377e58&number=9&tags=breakfast`);
            const data= await api.json();
            localStorage.setItem("breakfast", JSON.stringify(data.recipes))
            setBreakfast(data.recipes);
  }
}
  return (
    <div>
      <div className="wrapper" >
                <h3 className='breakfastH3'>Breakfast</h3>
                <Splide
                    options={{
                        perPage:4,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap:'1.2rem',
                    }}
                    >
                        {breakfast.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="card">
                                <Link to={"/recipe/"+recipe.id}>
                                    <p>{recipe.title}</p>
                                    <div className="gradient">
                                         <img src={recipe.image} alt={recipe.title}/>
                                    </div>
                                </Link>
                            </div>
                        </SplideSlide>
                    )
                })}
                </Splide>
                
            </div>
    </div>
  )
}

export default Breakfast;