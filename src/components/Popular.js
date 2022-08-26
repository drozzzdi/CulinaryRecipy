import "./popular.css";
import { useEffect, useState } from "react";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

function Popular() {

    const [popular, setPopular]=useState([]);

    useEffect(()=>{
        getPopular()
    },[])

    const getPopular=async()=>{
        const check=localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check))
        }
        else{
            const api=await fetch (`https://api.spoonacular.com/recipes/random?apiKey=34b707a8e64c4c4687e1fa25a6377e58&number=9`)
            const data= await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes);
        }
    }

  return (
    <div className="popularWrapper">
         <div className="wrapper" >
                <h3 className="popularH3">Popular</h3>
                <Splide
                    options={{
                        perPage:4,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap:'1.2rem',
                    }}
                    >
                        {popular.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="card">
                                <Link to={'/recipe/'+recipe.id}>
                                    <div className="gradient">
                                        <p>{recipe.title}</p>
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

export default Popular;