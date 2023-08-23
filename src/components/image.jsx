import * as React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { fontSize } from '@mui/system';
import toast, { Toaster } from 'react-hot-toast';
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { Link } from 'react-router-dom';



export const Image = ({
  id,
  image,
  name,
  price,
  
}) => {

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isSmallDevice = window.innerWidth < 900;
  const handleClick = () => {
    dispatch(addToCart(id));
    toast.success(t("Gallery.AddSucces"));
  };
  const lenguage=window.localStorage.getItem('country')??'USA'
  const curren=window.localStorage.getItem('currency')??'USD'
  let convertir=0;
 
  switch (lenguage) {
    case 'USA':
      convertir=price*1;
        break;
        
   case 'USA (es)':
          convertir=price*1;
            break;
    case 'Guatemala':
        convertir= (7.8 * parseFloat(price)).toFixed(2);
        
        break;
    case 'Colombia':
      
        convertir=(4171.57*parseFloat(price)).toFixed(2);
        break;
    case 'México':
        convertir=(17.28*parseFloat(price)).toFixed(2);
        
        break;
    case 'Panama':
          convertir=price
        break;
    default:
          convertir=price*1;

        break;
   }
  const urlImage='img/portfolio/'+image;

  return (
    <div className="producto">
        <div className="producto-img">
          <img src={ urlImage}
            style={{
              maxWidth: 180,
              maxHeight: 260,
              marginBottom: 0,
              marginTop: isSmallDevice ? 50 : 0,
            }}
            alt={name}
          />
        </div>
        <div className="producto-detalle">
          <div className="producto-footer">
            <h1>{name}</h1>
            <p>{curren} {convertir}</p>
         
          </div>
          <div className="producto-botones">
            <div >
           
              <a className='bt'  href={`${id}`}>{t("Gallery.Details")}</a>
            </div>
            <button style={{ cursor: 'pointer' }} className="btcart" onClick={handleClick}>{t("Gallery.AddCart")}</button>
            
          </div>
        </div>              
      </div>
  );
};