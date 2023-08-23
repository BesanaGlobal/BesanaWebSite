import * as React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../styles/detail.css"
import axios from 'axios';
import { useState } from 'react';
import { Loading } from "./loading";
import { fontSize } from '@mui/system';
import toast, { Toaster } from 'react-hot-toast';
import { Footer } from "./footer";
import { Navigation } from "./navigation";



const stylePc = {
  position: 'absolute',
  overflow: 'scroll',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px none #e0b7b8',
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 20px',
  font: 'Roboto'
};
const styleMobile = {
  position: 'absolute',
  overflow: 'scroll',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: '95%',
  bgcolor: 'background.paper',
  border: '2px none #e0b7b8',
  boxShadow: 24,
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 10px',
  font: 'Roboto'
};


export const Image = ({
  title,
  parsedPrice,
  points,
  idProduct,
  smallImage,
  description,
  isHealthProduct,
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isSmallDevice = window.innerWidth < 900;
  const [product, setProduct] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loadingInProgress, setLoading] = useState(false);
  const handleOpen = async () => {
    let len = description.split("#").length;
    let DescripcionIngles = new Array(len);
    let cadena = description.split('#');
    setLoading(true);
    setOpen(true);
    for (var i = 0; i < len - 1; i++) {
      let data = {
        q: cadena[i],
        source: 'es',
        target: 'en'
      }
      const respuesta = await (axios.post('https://es.libretranslate.com/translate', data))
      DescripcionIngles[i] = respuesta.data.translatedText;
    }
    if (title.includes("Paquete") || title.includes("CBG5") || title.includes("Para el") || title.includes("B -MAX")) {
      setOpen(false);
    } else {
      setLoading(false);
      const newDescription = description.split("#");
      if (i18n.language == 'en') {
        setProduct((product) => ({
          productTitle: title,
          productDescription: DescripcionIngles,
        }));
      }
      else {
        setProduct((product) => ({
          productTitle: title,
          productDescription: newDescription,
        }));
      }
    }

    //validar si es mobil o desktop
    if (isSmallDevice){
      //abrir pagina de detalle mobil

    }
  };
  const handleClose = () => setOpen(false);
  const handleClick = () => {
    dispatch(addToCart(idProduct));
    toast.success(t("Gallery.AddSucces"));
  };

  return (
    <div
      className={
        title.includes("CBG5") || title.includes("B -MAX")
          ? "product-container-health"
          : "product-container"
      }
    >
      <div>
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            style: {
              color: '#4a610f',
            },
          }}
        />
      </div>

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isSmallDevice ? styleMobile : stylePc}>
        <Navigation style={{ backgroundColor: "#ffffff" }}/>
          <img
            src={smallImage}
            className="img-product"
            alt={title}
            style={{
              maxWidth: 210,
              maxHeight: 260,
              marginBottom: 0,
              marginTop: isSmallDevice ? 50 : 400,
            }}
          />{" "}
          <h3 id="modal-modal-title">
            {product.productTitle ?? ""}
          </h3>
          {
            product.productDescription &&
            product.productDescription.map((pr) => (
              <>
                <p id="modal-modal-description" sx={{ mt: 2 }}> {pr} </p>
                <br></br>
              </>
            ))}
        </Box>
      </Modal>




      <a title={title} data-lightbox-gallery="gallery1">
        <img src={smallImage} className="img-product" alt={title} />{" "}
      </a>{" "}
      <div
        className={
          title.includes("CBG5") || title.includes("B -MAX")
            ? "modal-product-health"
            : "modal-product"
        }
      >
        <h5
          class={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "title-product-health"
              : "title-product"
          }
        >
          {title}
        </h5>
        <p
          class={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "price-product-health"
              : "price-product"
          }
        >
          <span>{parsedPrice}</span>
        </p>
        {title.includes("Paquete") ||
          title.includes("CBG5") ||
          title.includes("Para el") ||
          title.includes("B -MAX") || (
            <button
              className={
                title.includes("CBG5")
                  ? "button-product-health"
                  : "button-product"
              }
              onClick={handleOpen}
            >
              {t("Gallery.Details")}
            </button>
          )}
        <strong
          className={
            title.includes("CBG5") || title.includes("B -MAX")
              ? "button-product-health"
              : "button-product"
          }
          style={{ fontSize: 21 }}
        >
          {" "}
          |{" "}
        </strong>
        <button
          onClick={() => handleClick()}
          className={
            title.includes("CBG5") || title.includes("B -MAX") ? "button-product-health" : "button-product"
          }
        >
          {t("Gallery.AddCart")}
        </button>
      </div>
    </div>
  );
};