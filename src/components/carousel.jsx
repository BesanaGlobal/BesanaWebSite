import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Slide } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "../styles/carrousel.css";


export const Carrousel = (props) => {
    const { t, i18n } = useTranslation();
    return (   

        <div className='img-carrousel carousel-item'>
            <Carousel 
            position = "static"
                className='img-carrousel-box'
                autoPlay
                showArrows={true}
                showStatus={true}
                width={960}
                stopOnHover={false}
                interval={2500}

            // navButtonsAlwaysVisible={true}
            // fullHeightHover={true} 
            // // animation="slide"
            // navButtonsProps={{
            //     style: {
            //         backgroundColor: 'green',
            //         height: 40,
            //         width: 40,
            //         marginLeft:45,
            //         marginRight:45,
            //     }
            // }}
            // indicatorIconButtonProps={{
            //     style: {
            //         fontSize: "50px"
            //     }
            // }}

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

