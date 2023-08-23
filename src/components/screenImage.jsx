import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/shoppingAction";
import "../styles/promotion.css";
import toast, { Toaster } from 'react-hot-toast';

export const Publicity = (props) => {
  const isSmallDevice = window.innerWidth < 900;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart('a3661371-34ec-4192-bf2c-0e92489f1d52'));
    toast.success(t("Gallery.AddSucces"));
  };
  return (
    <div id="promotion">
      <div><Toaster/></div>
      <Grid container>
        {isSmallDevice && (
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/DayNightPack.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
        )}
        <Grid item xs={12} lg={6}>
          <div id="content-promotion">
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 10 : 30 }}>
              <h1>
                {t("Publicity.Title")} 
              </h1>
              <h2>
                {t("Publicity.Subtitle")}
              </h2>
            </Grid>
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 20 : 20 }}>
              <h2>
                {t("Publicity.FirstProduct")}
              </h2>
            </Grid>
            <Grid item xs={12} lg={12}>
              <h3>
                {t("Publicity.DescriptionFirstProduct")}
              </h3>
            </Grid>
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 20 : 20 }}>
              <h2>
                {t("Publicity.SecondProduct")}
              </h2>
            </Grid>
            <Grid item xs={12} lg={12} >
              <h3>
                {t("Publicity.DescriptionSecondProduct")}
                
              </h3>
            </Grid>
            <Grid item xs={12} lg={12} style={{ paddingTop: isSmallDevice ? 20 : 60 }}>
              <input
                type="button"
                className="button"
                value={t("Publicity.Button")}
                onClick={() => handleClick()}
              />
            </Grid>
          </div>
        </Grid>
        {!isSmallDevice && (
          <Grid item xs={12} lg={6}>
            <img
              src="img/portfolio/DayNightPack.jpg"
              className="img-responsive"
              alt=""
            />{" "}
          </Grid>
        )}
      </Grid>
    </div>
  );
};
