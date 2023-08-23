import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "../styles/carrousel.css";


export const Carrousel = (props) => {
    const { t, i18n } = useTranslation();
    return (        
        <div className='img-carrousel'>
            <Carousel className='img-carrousel-box'
            
            navButtonsProps={{
                style: {
                    backgroundColor: 'black',
                    height: 40,
                    width: 40
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    fontSize: "50px"
                }
            }}
            >
                {props.data?.map((d, i) => (
                    <Paper key={i} {...props} elevation={0}>
                        {
                            i18n.language === 'es' ? <img src={d.esImage}/> : <img src={d.enImage}/>   
                        }
                    </Paper>
                ))}
            </Carousel>
            <div id="besanaBeauty" style={{ heigth: 5 }}></div>
        </div>
    )
}

