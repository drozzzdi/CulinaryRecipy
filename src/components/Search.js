import React from 'react';
import "./search.css";
import {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import {IoIosRestaurant} from 'react-icons/io';

function Search() {

    const [input,setInput]=useState('');
    const navigate=useNavigate();

    const formHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    }

  return (
    <div className='searchWrapper'>
        <Link className='textdecor' to={"/"}>
            <div className='logo'>
                <IoIosRestaurant className="logoRestaurant"></IoIosRestaurant>
                <h3 className='logoName'>Yummy</h3>
            </div>
        </Link>
         <form onSubmit={formHandler}>
            <FiSearch className='biSearch'></FiSearch>
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input}/>
        </form>
    </div>
   
  )
}

export default Search;