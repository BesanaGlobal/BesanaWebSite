import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/map.css"

export const Map = (props) => {
    const { t, i18n } = useTranslation();
    const isSmallDevice = window.innerWidth < 900;
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(addToCart('1613d058-4e43-4a59-bae1-3802e134a213'));
    };
    return (
      <div id="map">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.386155256522!2d-115.25455228443722!3d36.20580798007524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0276aff3be9%3A0xff635fd3f3837857!2s2449%20N%20Tenaya%20Way%2C%20Las%20Vegas%2C%20NV%2089128%2C%20EE.%20UU.!5e0!3m2!1ses!2sgt!4v1665612575199!5m2!1ses!2sgt"
            style={{ width: isSmallDevice ? '100%' : '100%', height: isSmallDevice ? '75%' : '100%'}}
            llowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>{" "}
          </Grid>
          <Grid item xs={12} lg={6} style={{ background: "white" }}>
            <div id="content-promotion">
              <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 5 : 30 }}>
                <h1>
                  {t("Footer.Contact")}
                </h1>
              </Grid>
              <Grid
                item
                xs={12}
                lg={12}
                style={{ paddingTop: 40, paddingBottom: 50 }}
              >
                <h3>
                  2449 N TENAYA WAY, LAS VEGAS NV 89128, USA.
                </h3>
                <h3>
                  +1 (888) 294-2285
                </h3>
                <h3>
                  <span> </span>info@besanaglobal.com
                </h3>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
};
