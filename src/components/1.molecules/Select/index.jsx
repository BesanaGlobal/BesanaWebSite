//Archivo de header para seleccion de lenguaje


import * as React from 'react';
import { useState } from 'react';
import "../../../styles/navigation_len.css";


const Select = ({ label, optionsList, onSelect }) => {

  return (
    <div className="dropdown">
      <button className="dropbtn"><span> {label} </span><span className="nav-arrow fa fa-angle-down" /> </button>
      <div className="dropdown-content">
        {optionsList.map((option) => {
          return (
            <div key={option.description} >
              <a href="#" onClick={() => { onSelect(option) }}>
                <img className="trp-flag-image"  src={option.img} alt='' width='16px' height='16px' style={{marginRight: 5}}/><span>{option.description} </span>
              </a>
            </div>
          )
        })}
      </div>
    </div >
  );
}
export default Select