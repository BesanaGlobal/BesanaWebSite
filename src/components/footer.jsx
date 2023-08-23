
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { MdLocationOn, MdPhoneEnabled } from "react-icons/md"
import { FaEnvelope } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import "../styles/footer.css";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center'
}));


export const Footer = (props) => {
    const isSmallDevice = window.innerWidth < 900;
    const { t, i18n } = useTranslation();
    return (
      <div id="footer">
        <div id="contact">
          <div className="container" >
            <Box sx={{ flexGrow: 1 }}>
              {window.innerWidth < 900 && (
                <Grid item container spacing={6} style={{ textAlign: "Center"}}>
                <Grid item sx={3} lg={4}>
                  <p>{t("Footer.FindUs")}</p>
                  <br />
                  <a href="https://www.facebook.com/Besana-Global-105344981768065/" className="social-icons">
                    <i className="fa fa-facebook-square" spacing={3}></i>
                  </a>
                  <a href="https://www.instagram.com/besanaglobal/" className="social-icons">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-youtube-square"></i>
                  </a>
                </Grid>
                <Grid item sx={3} lg={5} style={{ textAlign: "Right" }}>
                  <p>{t("Footer.Payments")} </p>
                  <br />
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-visa"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-mastercard"></i>
                  </a>
                  <a href="" className="social-icons">
                    <i className="fa fa-cc-paypal"></i>
                  </a>
                </Grid>
                <Grid item sx={6} lg={5} >
                  <img
                    height="80px"
                    src="img/LOGO BESANA CELESTE.png"
                    className="custom-logo"
                    alt=""
                  ></img>
                </Grid>
                
              </Grid>
              )}
              {window.innerWidth >= 900 && (
                <Grid item container spacing={5} style={{ textAlign: "Left"}}>
                  <Grid item sx={3} lg={4}>
                    <p>{t("Footer.FindUs")}</p>
                    <br />
                    <a href="https://www.facebook.com/Besana-Global-105344981768065/" className="social-icons">
                      <i className="fa fa-facebook-square" spacing={3}></i>
                    </a>
                    <a href="https://www.instagram.com/besanaglobal/" className="social-icons">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="" className="social-icons">
                      <i className="fa fa-youtube-square"></i>
                    </a>
                  </Grid>
                  <Grid item sx={6} lg={5} >
                    <img
                      height="80px"
                      src="img/LOGO BESANA CELESTE.png"
                      className="custom-logo"
                      alt=""
                    ></img>
                  </Grid>
                  <Grid item sx={3} lg={3} style={{ textAlign: "left" }}>
                    <p>{t("Footer.Payments")} </p>
                    <br />
                    <a href="" className="social-icons">
                      <i className="fa fa-cc-visa"></i>
                    </a>
                    <a href="" className="social-icons">
                      <i className="fa fa-cc-mastercard"></i>
                    </a>
                    <a href="" className="social-icons">
                      <i className="fa fa-cc-paypal"></i>
                    </a>
                  </Grid>
                </Grid>
              )}
            </Box>
            <div className="col-md-12" style={{ marginTop: 20 }}>
              <div className="row">
                <hr className="social-line" />
                <div className="social">
                  <Grid container style={{ textAlign: "initial", flexDirection: isSmallDevice ? "column" : "row" }}>
                    <Grid item sx={3} lg={3}>
                      <a href="/company"><h3>{t("Footer.Company")}</h3></a>
                      <a href="/company"><h4>
                        <span> </span>
                        {t("Footer.AboutUs")}
                      </h4></a>
                      <a href="/#besanaBeauty"><h4>
                        <span > </span>
                        {t("Footer.Shop")}
                      </h4></a>
                      <a href="/useterms"><h4>
                        <span > </span>
                        {t("Footer.TermsOfUse")}
                      </h4></a>
                      <a href="/privacypolicy"><h4>
                        <span > </span>
                        {t("Footer.PrivacyPolicy")}
                      </h4></a>
                      <a href="/returnpolicys"><h4>
                        <span > </span>
                        {t("Footer.ReturnPolicy")}
                      </h4></a>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: isSmallDevice ? 0 : 15 }}>
                      <a href="/#besanaBeauty"><h3>{t("Footer.Shop")}</h3></a>
                      <a href="/#besanaBeauty"><h4>
                        <span > </span> Besana Beauty
                      </h4></a>
                      <a href="/#besanaHealth"><h4>
                        <span > </span> Besana Health
                      </h4></a>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: isSmallDevice ? 0 : 15 }}>
                      <a href="/oportunity"><h3>{t("Footer.Opportunity")}</h3></a>
                      <div >
                      <h4>
                        <span > </span> {t("Footer.PaymentsOpportunity")}
                      </h4>
                      </div>
                    </Grid>
                    <Grid item sx={3} lg={3} style={{ paddingLeft: isSmallDevice ? 0 : 15, marginBottom: isSmallDevice ? 10 : 0 }}>
                      <a href="/company#map"><h3>{t("Footer.Contact")}</h3></a>
                      <h4>
                        {" "}
                        <MdLocationOn size="1em" />
                        2449 N TENAYA WAY, LAS VEGAS NV 89128, USA.
                      </h4>
                      <h4>
                        <MdPhoneEnabled size="1em" /> {"+1 (888) 294-2285"}{" "}
                      </h4>
                      <h4>
                        <FaEnvelope size="1em" />
                        <span> </span>info@besanaglobal.com
                      </h4>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div>
            <p>
              &copy; {t("Footer.Rights")}{" "}
              <a href="https://besanaglobal.com/" rel="nofollow">
                Besana Global
              </a>{" "}
              2022
            </p>
          </div>
        </div>
      </div>
    );
}
