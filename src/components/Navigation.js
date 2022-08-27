import React from 'react';
import "./navigation.css";
import {FaPizzaSlice,FaHamburger,FaFish} from 'react-icons/fa';
import {GiNoodles, GiChopsticks,GiSausage,GiBull,GiBread} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <div className='list'>
            <NavLink className='sLink' to={'/cuisine/French'}>
              <div className='navWrapper'>
                  <GiBread/>
              </div>
                <h4>French</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/Italian'}>
            <div className='navWrapper'>
                <FaPizzaSlice/>
            </div>
                <h4>Italian</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/American'}>
            <div className='navWrapper'>
                <FaHamburger/>
            </div>
                <h4>American</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/German'}>
            <div className='navWrapper'>
                <GiSausage/>
            </div>
                <h4>German</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/Thai'}>
            <div className='navWrapper'>
                <GiNoodles/>
            </div>
                <h4>Thai</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/Chinese'}>
            <div className='navWrapper'>
                <GiChopsticks/>
            </div>
                <h4>Chinese</h4>
            </NavLink>
            <NavLink className='sLink' to={'/cuisine/Spanish'}>
            <div className='navWrapper'>
                <GiBull/>
            </div>
                <h4>Spanish</h4>
            </NavLink>
        </div>
  )
}

export default Navigation;