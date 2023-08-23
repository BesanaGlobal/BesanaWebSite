import { useTranslation } from 'react-i18next';
import "../styles/detail.css"
import { useDispatch } from "react-redux";
import { useState, useEffect  } from 'react';
import * as React from 'react';
import { Footer } from "./footer";
import { Navigation } from "./navigation";
import { addToCart } from "../actions/shoppingAction";
import toast, { Toaster } from 'react-hot-toast';
import useHook from '../pages/product/hook.js'
import { useParams } from "react-router-dom";
import axios from 'axios';




export const ProductDetails =  (props, data) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    let { id } = useParams();
    let convertir=0;
    const lenguage=window.localStorage.getItem('country')??'USA'
    const curren=window.localStorage.getItem('currency')??'USD'

   console.log(lenguage)
   console.log(curren)

   const { product } =  useHook(id)
//    const description= product.description.toString();
const price = product.price


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
     const handleClick = () => {
        console.log(id)
        dispatch(addToCart(product.idProd));
        toast.success(t("Gallery.AddSucces"));
    };
    var titulo='';
    const [productItem, setproductItem] = useState({});
    
    const [descriptionItem, setdescription] = useState("");
  
    const urlImage='img/portfolio/'+product.img;
    

    
    function translateDescription(){
        // let len = desc.split("#").length;
        // let DescripcionIngles = new Array();
        // let cadena = desc.split('#');
        // const newDescription = cadena;
        // console.log(cadena);
        // for (var i = 0; i < len - 1; i++) {
        //   let data = {
        //     q: cadena[i],
        //     source: 'es',
        //     target: 'en'
        //   }
        //   const respuesta = await (axios.post('https://libretranslate.org/translate', data))
        //   DescripcionIngles[i] = respuesta.data.translatedText;
        // }
        
        // if (i18n.language == 'en') {
        //     return(DescripcionIngles);
        // }
        // else {
        //     return(newDescription);
        // }
      }
      titulo = product.name?.replace(/\s+/g, '')
    return (
    <>
    <Navigation style={{ backgroundColor: "#ffffff" }}/>
    <div><Toaster/></div>
    <div className="details">        
        <div className="detail-img" >
            <img
                src={urlImage}  
            />
           
        </div>
        <div className="detail-content">              
            <div className="content-name">
                <h2>
                    
                    {product.name}   
                </h2>
            </div>
            <div className='content-description'>
                
                {
                   
                   id==='2' ? <ul> <ul><li style={{}} > <strong>{t("Facial Cleanser")}: </strong> 
                                {t('A cellular repair complex')}.</li> </ul>
                                <li><strong>{t('Anti- Aging Night cream')}: </strong> 
                                {t('A cellular repair complex with argireline')} </li>
                                <strong>{t('Eye  Treatment Serum')}: </strong> {t('Prevents and fight bags under the eye with hyaluronic acid')}. <br />
                                <strong>{t('Day cream')}: </strong>  {t('Redensifies the skin to leave it looking intensely revitalized, rejuvenated and resilient')}. <br />
                                <strong>{t('Eye Cream')}:</strong>  {t('Removes signs of fatigue in eye area with argireline and hyaluronic acid')}.</ul>
                    :<>

                    
                    <p> 
                        {t(product.description)}.
                                {/* {t('product.description')}. */}
                                 </p>
                    <table className='table-responsive' >
                        <thead>
                            <tr>
                                <td className='tdescription'><strong>{t('Title')}</strong></td>
                                <td className='tdescription'><strong>{t('Description')}</strong></td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tdescription'> <strong>{t("Directions")}</strong></td>
                                <td><span>{t(product.directions)}</span></td>
                            </tr>
                            <tr>
                                <td className='tdescription'> <strong>{t("key Ingredients")}</strong></td>
                                <td><span>{product.key_ingredients}.</span></td>
                            </tr>
                            <tr>
                                <td className='tdescription'> <strong>{t("Details.Ingredients")}</strong></td>
                                <td><span>{product.ingredients}.</span></td>
                            </tr>
                        </tbody>
                    </table>
                    
                                {/* <details className='content-summary'> 
                                <summary>+ {t("Directions")}</summary>
                                    <span>
                                        {product.directions}
                                    </span>
                                </details>
                                <details className='content-summary'>
                                        <summary>+ {t("key Ingredients")}</summary>
                                        <span>
                                            {product.key_ingredients}.
                                        </span>
                                    </details>
                                    <details className='content-summary'>
                                        <summary>+ {t("Details.Ingredients")}</summary>
                                        <span>
                                            {product.ingredients}
                                        </span>

                                    </details> */}
                                    </>
                }
                
            </div>
            <div className='content-buy'>
                <div className="content-price">
                        <h1>
                            {curren} {convertir}   
                        </h1>
                    </div>
                <div className='content-button'>
                    <input type="button" onClick={ ()=>handleClick() } 
                    value={t('Details.Button')} 
                    // value={id}
                    />
                </div>
            </div>
        </div>
    </div>
    <Footer data={data.Contact} />
    </> 
    );
};
