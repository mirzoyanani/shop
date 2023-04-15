
import { NavLink } from "react-router-dom";
import React from "react";
import './Header.module.css'
import { useSelector } from "react-redux";

function Header() {
  const basketItems = useSelector((state) => state.basket.items);
  let basketCount = basketItems.length

  return (
    <div id="header" style={{height:'50px',backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
      <ul style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <NavLink  to="/">Home</NavLink >
        < NavLink to="/">About as</NavLink>
        <NavLink to="/">Contact</NavLink>
        <div>
        <NavLink to="/basket"> <img   className='baskett' style={{width:'50px'}} src="./basket.png"/></NavLink>
         <p className="num">{basketCount}</p>
        </div>
        
      </ul>
    </div>
  );
}
export default Header;