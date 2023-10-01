import * as React from 'react';
import { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import Select from './1.molecules/Select';
import Col from '../assets/svg/Colombia.svg';
import Usa from '../assets/svg/Usa.svg';
import Guatemala from '../assets/svg/Guatemala.svg';
import Mexico from '../assets/svg/Mexico.svg'
import Panama from '../assets/svg/Panama.svg'
import BurguerMenu from '../assets/svg/BurguerMenu.svg';
import { useTranslation } from 'react-i18next';
import ReactTooltip from 'react-tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import {
  clearCart,
} from "../actions/shoppingAction";
import "../styles/navigation_op.css";
import { Chat } from "./chat";
import { red } from '@mui/material/colors';


const optionsList = [
  {  value: 'en', description: 'USA', img: Usa, currency: 'USD' },
  {  value: 'es', description: 'USA (es)', img: Usa, currency: 'USD' },
  {  value: 'es', description: 'Guatemala', img: Guatemala, currency: 'GTQ' },
  {  value: 'es', description: 'Colombia', img: Col, currency: 'COP' },
  {  value: 'es', description: 'México', img: Mexico, currency: 'MXN' },
  {  value: 'es', description: 'Panama', img: Panama, currency: 'USD' },
]

export const Navigation = (props) => {
  var sponsorNavigation = '';
  const isSmallDevice = window.innerWidth < 900;
  const [menuSmallDeviceVisible, setMenuSmallDeviceVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const state = useSelector((state) => state);
  const type = typeof state.user.sponsor

    // if (type === 'object') {
    //   sponsorNavigation= state.user.sponsor
    // }

  // console.log('nuevo dato sponsor')
  // console.log(sponsorNavigation)

   const { shopping: { cart }, user } = state;
   
   const { sponsor } = user;

  const [language, setLanguage] = useState(() => {
    const languageKey = window.localStorage.getItem('country') ?? 'USA'
    return languageKey
  })
  const dispatch = useDispatch();
  const handleSelection = (optionSelected) => {
    window.localStorage.setItem('country', optionSelected.description)
    window.localStorage.setItem("language", optionSelected.value)
    window.localStorage.setItem('currency', optionSelected.currency)
    i18n.changeLanguage(optionSelected.value)
    dispatch(clearCart());
    window.location.reload();
  }


  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
    >
      <div  className="fisrt-div-nav-bar " style={{ backgroundColor:red}}>
        <Grid item={true} container xs={16} style={{ display: "flex", justifyContent: "flex-end" }} >

          <Grid item={true} xs={1} style={{ marginRight: isSmallDevice ? 40 : 28 }}>
          {window.innerWidth < 900 && (
            <>
              <img
                src="img/logoweb.png"
                style={{
                  width: 95,
                  height: 80,
                  paddingBottom: 10,
                  marginLeft: 20,
                }}
                alt='BesanaGlobal.com'
              />
            </>
          )}
          </Grid>
          <Grid item={true} xs={3} style={{
            alignContent: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            }}
          ></Grid>
            {window.innerWidth < 900 && (   
              <Grid item={true} xs={3} style={{ marginRight: isSmallDevice ? 20 : 0 }}>                 
                <Select
                  label={language}
                  optionsList={optionsList}
                  onSelect={handleSelection}
                ></Select>
              </Grid>                              
            )}
            {window.innerWidth < 900 && (   
              <Grid item xs={2} style={{ marginRight: isSmallDevice ? 20 : 0 }}>
                <Button style={{ width: 80, height: 80, marginBottom: 0 }} onClick={() => { setMenuSmallDeviceVisible(!menuSmallDeviceVisible) }} >
                  <img style={{ width: 50, height: 50, marginRight: 0 }} src={BurguerMenu} alt='BurgerMenu' />
                </Button>
              </Grid>                              
            )}
            {window.innerWidth >= 900 && (   
              <Grid item xs={1} style={{ marginRight: isSmallDevice ? 20 : 0 }}>
                <Select
                  label={language}
                  optionsList={optionsList}
                  onSelect={handleSelection}
                ></Select>
              </Grid>           
            )}
        </Grid>
        <div
          className="second-div-nav-bar"
          style={{ display: isSmallDevice && "flex" }}
        >
          <Grid
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {window.innerWidth > 900 && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  paddingLeft: 40,
                  paddingBottom: 12,
                }}
              >
                <img alt='' src="img/logoweb.png" style={{ width: 300, height: 110 }} />
              </div>
            )}
            <ul
              className="nav navbar-nav navbar-right"
              style={{
                textAlign: "end",
                // color: "#fff !important",
                backgroundColor:red,
                paddingRight: 40,
                paddingTop: 28,
              }}
            >
              <li>
                <a href="/#" className="page-scroll">
                  {t("Navbar.Home")}
                </a>
              </li>
              <li className="dropdown">
                 <a href="/#besanaBeauty" className="page-scroll" style={{ textColor: "#fff !important" }}>
                  {t("Navbar.Products")}
                </a>
              </li>
              <li>
                <a href="/company" className="page-scroll">
                  {t("Navbar.Company")}
                </a>
              </li>
              <li>
                <a href="/oportunity" className="page-scroll">
                  {t("Navbar.Opportunity")}
                </a>
              </li>
              <li>
                <a
                  href="https://backoffice.besanaglobal.com"
                  className="page-scroll"
                >
                  {t("Navbar.MyAccount")}
                </a>
              </li>
              <li>
                <a
                  className="menu-link"
                  href={`https://backoffice.besanaglobal.com/register?sponsor=${sponsorNavigation}`}
                >
                  {t("Navbar.JoinUs")}
                </a>
              </li>
              {
                <li>
                  <a href={`/shoppingCar?sponsor=${sponsorNavigation}`}>
                    <>
                      {" "}
                      {cart?.length > 0 && (
                        <div className="bubbler-car">{cart?.length}</div>
                      )}
                      <ShoppingCartIcon
                        sx={{ fontSize: 30, color: "#88b900"}}
                    ></ShoppingCartIcon>
                    </>
                  </a>
                </li>
              }
            </ul>
          </Grid>
        </div>
      </div>

      {menuSmallDeviceVisible &&
        <div className="container" style={{ backgroundColor: 'white', paddingLeft: '40px'}}>
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              color: "#000 !important",
              paddingTop: 24,
              display: 'flex',
            }}
          >
            <li>
              <a href="/" className="page-scroll">
                {t("Navbar.Home")}
              </a>
            </li>
            <li className="dropdown">
              <a href="/#besanaBeauty" className="page-scroll">
                {t("Navbar.Products")}
              </a>              
            </li>
            <li>
              <a href="/company" className="page-scroll">
                {t("Navbar.Company")}
              </a>
            </li>
            <li>
              <a href="/oportunity" className="page-scroll">
                {t("Navbar.Opportunity")}
              </a>
            </li>
          </ul>
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              color: "#fff !important",
              justifyContent: 'left',
              paddingTop: 24,
              display: 'flex'
            }}
          >
{/* 
            <li>
              <a
                className="menu-link-without-background"
                href="#"
                data-tip
                data-for="registerTip"
              >
                Besana Academy
              </a>
              {/* <ReactTooltip id="registerTip" place="bottom" effect="solid">
                  Próximamente...
                </ReactTooltip> 
            </li> */}
            <li>
              <a
                href="https://backoffice.besanaglobal.com/login"
                className="page-scroll"
              >
                {t("Navbar.MyAccount")}
              </a>
            </li>
            <li>
              {/* <a
                className="menu-link"
                href={`https://backoffice.besanaglobal.com/sign-up?sponsor=${!!sponsor.data.data ? sponsor.data.data : null}`}
              >
                {t("Navbar.JoinUs")}
              </a> */}
            </li>
            <li>
                <a href={`/shoppingCar?sponsor=${!!sponsorNavigation ? sponsorNavigation : null}`}>
                  <>
                    {cart?.length > 0 && (
                      <div className="bubbler-car">{cart?.length}</div>
                    )}
                    <ShoppingCartIcon
                      sx={{ fontSize: 30, color: "#88b900"}}
                    ></ShoppingCartIcon>
                  </>
                </a>
              </li>
          </ul>

        </div>
        
      }
      <Chat />
    </nav>

    

  );


}
