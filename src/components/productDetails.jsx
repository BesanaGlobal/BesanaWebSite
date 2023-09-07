import * as React from 'react';
import { useState, useEffect } from 'react';
import "../styles/detail.css";
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { addToCart } from "../actions/shoppingAction";
import toast, { Toaster } from 'react-hot-toast';
import useHook from '../pages/product/hook.js'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export const ProductDetails = (props, data) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    let { id } = useParams();
    let convertir = 0;
    const lenguage = window.localStorage.getItem('country') ?? 'USA'
    const curren = window.localStorage.getItem('currency') ?? 'USD'
    const symbol = getCurrencySymbol(curren)
    const { product } = useHook(id)
    const price = product.price

    switch (lenguage) {
        case 'USA':
            convertir = price * 1;
            break;
        case 'USA (es)':
            convertir = price * 1;
            break;
        case 'Guatemala':
            convertir = (7.8 * parseFloat(price)).toFixed(2);
            break;
        case 'Colombia':
            convertir = (4171.57 * parseFloat(price)).toFixed(2);
            break;
        case 'México':
            convertir = (17.28 * parseFloat(price)).toFixed(2);
            break;
        case 'Panama':
            convertir = price
            break;
        default:
            convertir = price * 1;
            break;
    }
    function getCurrencySymbol(currency) {
        switch (currency) {
          case 'USD':
            return '$';
          case 'EUR':
            return '€';
          case 'GBP':
            return '£';
          case 'CAD':
            return 'C$';
          case 'GTQ':
            return 'Q';
          case 'COP':
            return '$';
          case 'MXN':
            return '$';
          case 'PYG':
            return '₲';
          case 'PAB':
            return 'B/.';
          default:
            return '';
        }
      }
    const handleClick = () => {
        console.log(id)
        dispatch(addToCart(product.idProd));
        toast.success(t("Gallery.AddSucces"));
    };
    const [productItem, setproductItem] = useState({});
    const [descriptionItem, setdescription] = useState("");
    const urlImage = 'img/portfolio/' + product.img;
    var titulo = '';
    titulo = product.name?.replace(/\s+/g, '')
    return (
        <>
            <Navigation style={{ backgroundColor: "#ffffff", flex:1, display:"flex"}} />
            
            <div className="details" style={{flex:1}}>
                <div className="" style={{display: 'flex', flexDirection: 'column', alignItems:'center'}} >
                    <img src={urlImage} 
                        style={{
                            flex:1,
                            width:'25%',
                            objectFit: 'contain',
                        }}/>
                </div>
                <div className="detail-content">
                    <div className="content-name">
                        <h2>{product.name}</h2>
                    </div>
                    <div className='content-description'>
                        {
                            id === '2' ? 
                                <ul> 
                                    <ul>
                                        <li style={{}} >
                                            <strong>{t("Facial Cleanser")}:</strong>
                                            {t('A cellular repair complex')}.
                                        </li>
                                    </ul>
                                    <li>
                                        <strong>{t('Anti- Aging Night cream')}: </strong>
                                        {t('A cellular repair complex with argireline')} 
                                    </li>
                                    <strong>{t('Eye  Treatment Serum')}:</strong> 
                                    {t('Prevents and fight bags under the eye with hyaluronic acid')}. 
                                    <br/>
                                    <strong>{t('Day cream')}:</strong>  
                                    {t('Redensifies the skin to leave it looking intensely revitalized, rejuvenated and resilient')}. 
                                    <br/>
                                    <strong>{t('Eye Cream')}:</strong>  
                                    {t('Removes signs of fatigue in eye area with argireline and hyaluronic acid')}.
                                </ul>
                                
                                : <>

                                <table className='table-responsive' >
                                    <thead>
                                        <tr>
                                            <td className='tdescription'><strong>{t('Title')}</strong></td>
                                            <td className='tdescription'><strong>{t('Description')}</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='tdescription'> 
                                                <strong>{t("Directions")}</strong>
                                            </td>
                                            <td>
                                                <span>{t(product.directions)}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='tdescription'>
                                                <strong>{t("key Ingredients")}</strong>
                                            </td>
                                            <td>
                                                <span>{t(product.key_ingredients)}.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='tdescription'> 
                                                <strong>{t("Details.Ingredients")}</strong>
                                            </td>
                                            <td>
                                                <span>{t(product.ingredients)}.</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='tdescription'> 
                                                <strong>{t("Details.Price")}</strong>
                                            </td>
                                            <td>
                                                <span>{symbol} {convertir}.</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        }
                    </div>
                    <div className='' style={{display: 'flex', flexDirection: 'column'}}>
                        <Button 
                            variant="outlined" 
                            color="success"
                            style={{
                                flexBasis: '50%',
                                fontSize:20
                            }}
                            endIcon={<ShoppingCartCheckoutIcon style={{ width: 50, height:50}} />}
                            onClick={() => handleClick()} >{t('Details.Button')}</Button>
                    </div>
                </div>
            </div>
            <Footer data={data.Contact} />
        </>
    );
};
