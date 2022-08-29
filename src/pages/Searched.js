import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './searched.css';

function Searched() {

    const [searchedRecipes,setSearchedRecipes]=useState([]);
    let params=useParams();

  const getSearched= async(name)=>{
    const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=34b707a8e64c4c4687e1fa25a6377e58&query=${name}`);
    const recipes=await data.json();
    setSearchedRecipes(recipes.results)
    };
  useEffect(()=>{
    getSearched(params.search)
  },[params.search]);


  return (
    <div className='flex'>
        {searchedRecipes.map((item)=>{
          return(
            <Link to={"/recipe/" + item.id}>
              <div className='cardSerched' key={item.id}>
                <img src={item.image} alt=''/>
                <h4 className="h4cuisines">{item.title}</h4>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default Searched