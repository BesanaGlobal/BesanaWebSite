
import { Image } from "./image";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import getSymbolFromCurrency from 'currency-symbol-map';
import "../styles/gallery.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import toast, { Toaster } from 'react-hot-toast';

export const Gallery = (props) => {

  const [beautyList, setBeautyList] = useState([])
  const [healthList, setHealthList] = useState([])
  const isSmallDevice = window.innerWidth < 900;
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if (props.data) {
      props.data.map((product) => {
        if (product.line === 'beauty') {
          setBeautyList(oldArray => [...oldArray, product])
        } else if (product.line === 'health') {
          setHealthList(oldArray => [...oldArray, product])
        }
      })
    }
    
  }, [props.data])

  const mapCurrentFormat = ((ammont) => {
    let currencyFomrat = localStorage.getItem('currency') ?? 'USD'
    return getSymbolFromCurrency(currencyFomrat) + ammont
  })


  return (
    <div style={{ backgroundColor: "#ffffff", paddingBottom: 40 }}>
      <div><Toaster/></div>
      <div className="text-center">
        <div className="container">
          <div className="section-title">

            <p
              className="menu-link-without-background-beauty"
              style={{ margin: isSmallDevice ? "35px" : "35px 350px" }}
            >
              Besana Beauty
            </p>
            <div className="row">
              <a>{t("Gallery.SubTitleBeauty")}</a><a style={{ fontWeight: 'bold' }}>BESANA BEAUTY.</a>
            </div>
          </div>
          <div className="row" >
            <div className="portfolio-items">
              {beautyList
                ? beautyList.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{ marginBottom: 55 }}
                  >
                    <Image
                      title={d.name}
                      parsedPrice={mapCurrentFormat(d.parsedPrice)}
                      points={d.points}
                      idProduct={d.id}
                      smallImage={d.img}
                      description={d.description}
                      isHealthProduct={false}
                    />
                  </div>
                ))
                : "Loading..."}
            </div>
            <div id="besanaHealth" style={{ marginTop: isSmallDevice ? 105 : 1025 }}></div>
          </div>


          <div className="section-title">
            <p
              className="menu-link-without-background-beauty"
              style={{ margin: isSmallDevice ? "105px 35px 35px 35px" : "35px 350px" }}
            >
              Besana Health
            </p>
            <p>{t("Gallery.SubTitleHealth")}</p>
          </div>
          <div className="row" style={{ marginBottom: 55 }}>
            <div className="portfolio-items">
              {healthList
                ? healthList.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.name}
                      parsedPrice={mapCurrentFormat(d.parsedPrice)}
                      points={d.points}
                      idProduct={d.id}
                      smallImage={d.img}
                      isHealthProduct
                    />
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
