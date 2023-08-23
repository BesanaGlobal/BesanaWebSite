import { Navigation } from "./navigation";
import { Map } from "./map";
import { Publicity } from "./screenImage";
import { Footer } from "./footer";
import { useTranslation } from 'react-i18next';
import "../styles/company.css";

export const Company = (data) => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }}/>
      <div id="company">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="company_header">
                <h style={{ color: 'black', textShadow: 'none' }}>{t("Company.AboutUs")} </h>
                <hr class="social-line"/>
                <h3 >{t("Company.Description")}</h3>
              </div>
            </div>
          </div>
        </div>
      <div class="accordion">
        <div class="box a1">
          <div class="image">
            <div class="text-accordion">
              <h2>{t("Company.VisionTitle")}</h2>
              <p>
                {t("Company.VisionText")}
              </p>
            </div>
          </div>
        </div>
        <div class="box a3">
          <div class="image_3">
            <div class="text-accordion">
              <h2>{t("Company.MisionTitle")}</h2>
              <p>
                 {t("Company.MisionText")}
              </p>
            </div>
          </div>
        </div>
        <div class="box a4">
          <div class="image_4">
            <div class="text-accordion">
              <h2>{t("Company.PhilosophyTitle")}</h2>
              <p>
                {t("Company.PhilosophyText")}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Map data={data.Map}/>
      <Footer data={data.Contact} />
    </>
    
  );
};
