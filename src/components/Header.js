import React from 'react';
import './Header.css';
import Netflix from '../logo/Netflix.png'

export default ()=>{
    return(
        <header>
           <div className='header--logo'>
        <img src={Netflix}/>
           </div>
        </header>
        
    )
}