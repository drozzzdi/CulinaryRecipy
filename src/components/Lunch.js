import "./lunch.css";
import {useEffect, useState} from "react";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

function Lunch() {
  const [lunch, setLunch]=useState([]);

  useEffect(()=>{
    getLunch()
  },[])

  const getLunch=async()=>{
    const check=localStorage.getItem('soup');

    if(check){
      setLunch(JSON.parse(check))
  } else{
      const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=34b707a8e64c4c4687e1fa25a6377e58&number=9&tags=soup`);
      const data= await api.json();
      localStorage.setItem("soup", JSON.stringify(data.recipes))
      setLunch(data.recipes);
  }
  }

  return (
    <div>
       <div className="wrapper" >
                <h3 className="lunchH3">Soup</h3>
                <Splide
                    options={{
                        perPage:4,
                        arrows:false,
                        pagination:false,
                        drag:'free',
                        gap:'1.2rem',
                    }}
                    >
                        {lunch.map((recipe)=>{
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

export default Lunch;