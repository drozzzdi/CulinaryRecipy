import "./cuisine.css";
import React,{useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';

function Cuisine(){
    const [cuisine, setCuisine]=useState([]);
    let params=useParams();

    const getCuisine= async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=34b707a8e64c4c4687e1fa25a6377e58&cuisine=${name}`);
        const recipes=await data.json();
        setCuisine(recipes.results)
    }

    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])

    return(
        <div className="flex">
            {cuisine.map((item)=>{
                return(
                    <Link to={"/recipe/" + item.id}>
                        <div className="cardCuisine" key={item.id}>
                            <img src={item.image} alt=""/>
                            <h4 className="h4cuisine">{item.title}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
export default Cuisine;