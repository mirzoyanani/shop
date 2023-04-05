
import { NavLink } from "react-router-dom";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './Header.module.css'

function Header() {
  return (
    <div id="header" style={{height:'50px',backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
      <ul style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
        <li  to="*">Home</li>
        <li to="/login">About as</li>
        <li to="/login">Contact</li>
         <li><img style={{width:'50px'}} src="./basket.png"/></li>
      </ul>
    </div>
  );
}
export default Header;