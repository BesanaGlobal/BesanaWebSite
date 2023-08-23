import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import { useState } from 'react';
import * as React from 'react';
import { Footer } from "./footer";
import { Navigation } from "./navigation";


export const ProductDetail = (props, data) => {
    const [product, setProduct] = React.useState({});

    const { t, i18n } = useTranslation();
    const isSmallDevice = window.innerWidth < 900;
 
    return (
       
        <>
            <Navigation style={{ backgroundColor: "#ffffff" }}/>
       
            
            <img
            // src={smallImage}
            // className="img-product"
            // alt={title}
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
            <Footer data={data.Contact} />
      </>
    );
};
