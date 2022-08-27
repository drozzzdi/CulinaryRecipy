import React from 'react';
import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import './recipe.css';

function Recipe() {

        let params=useParams();
        const [details,setDetails]=useState({});
        const[activeTab,setActiveTab]=useState('instructions');

        const fetchDetails=async()=>{
            const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=34b707a8e64c4c4687e1fa25a6377e58`);
            const detailData=await data.json();
            setDetails(detailData);
        }
    
    useEffect(()=>{
        fetchDetails();
    },[params.name]);

  return (
    <div className='detailWrapper'>
        <div>
            <h2>{details.title}</h2>
            <img className="img" src={details.image} alt=''/>
        </div>
        <div className='info'>
            <button onClick={()=>setActiveTab('instructions')} className={activeTab==='instructions'?'act':''}>Instructions</button>
            <button onClick={()=>setActiveTab('ingredients')} className={activeTab==='ingredients'?'act':''}>Ingredients</button>
            {activeTab==="instructions" &&(
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
                </div>
            )}
            {activeTab==='ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient)=>(
                        <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
            </ul>
            )}
            
            
        </div>
    </div>
  )
}

export default Recipe