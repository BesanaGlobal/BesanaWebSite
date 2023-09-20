import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import useHook from '../pages/product/hook.js'

import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/promotion.css";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export const Promotion = () => {

  let price = 189.95
  let convertir = 0;
  const lenguage = window.localStorage.getItem('country') ?? 'USA'
  const curren = window.localStorage.getItem('currency') ?? 'USD'



  switch (lenguage) {
    case 'USA':
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




  const { t, i18n } = useTranslation();
  const isSmallDevice = window.innerWidth < 900;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart(2));
    toast.success(t("Gallery.AddSucces"));
  };
  return (
    <div id="promotion">
      <div><Toaster /></div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <img
            src="img/portfolio/paqueteBesana.png"
            className="img-responsive"
            alt=""
          />{" "}
        </Grid>
        <Grid item xs={12} lg={6}>
          <div id="content-promotion">
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 10 : 30 }}>
              <h2>
                {t("Promotion.TitleBesanaBeauty")}
              </h2>
            </Grid>
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 20 : 40, paddingBottom: isSmallDevice ? 10 : 50 }}>
              <h2>
                {t("Promotion.TextBesanaBeauty")}
              </h2>
              <h3>
                {t("Promotion.TextComplementaryBesanaBeauty")}
              </h3>
            </Grid>
            <h2>Price :{curren} {convertir}</h2>
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 15 : 30 }}>
              <input
                type="button"
                className="button"
                value={t("Promotion.Button")}
                onClick={() => handleClick()}
              />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
