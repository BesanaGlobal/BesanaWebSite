import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTranslation } from 'react-i18next';
import "../styles/useterms.css";

export const Useterms = (data) => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }}/>
      <div id="terms">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <h style={{ color: 'black', textShadow: 'none'}}>{t("UseTerms.Title")} </h>
              <hr class="social-line"/>
              <h2 >{t("UseTerms.C1")}</h2>
              <h1 >{t("UseTerms.T2")}</h1>
              <h2 >{t("UseTerms.C2")}</h2>
              <h1 >{t("UseTerms.T3")}</h1>
              <h2 >{t("UseTerms.C3")}</h2>
              <h3 >{t("UseTerms.I31")}</h3>
              <h3 >{t("UseTerms.I32")}</h3>
              <h3 >{t("UseTerms.I33")}</h3>
              <h1 >{t("UseTerms.T4")}</h1>
              <h2 >{t("UseTerms.C4")}</h2>
              <h1 >{t("UseTerms.T5")}</h1>
              <h2 >{t("UseTerms.C5")}</h2>
              <h1 >{t("UseTerms.T6")}</h1>
              <h2 >{t("UseTerms.C6")}</h2>
              <h1 >{t("UseTerms.T7")}</h1>
              <h2 >{t("UseTerms.C71")}</h2>
              <h2 >{t("UseTerms.C72")}</h2>
              <h1 >{t("UseTerms.T8")}</h1>
              <h2 >{t("UseTerms.C8")}</h2>
              <h1 >{t("UseTerms.T9")}</h1>
              <h2 >{t("UseTerms.C9")}</h2>
              <h1 >{t("UseTerms.T10")}</h1>
              <h2 >{t("UseTerms.C10")}</h2>
              <h3 >{t("UseTerms.I101")}</h3>
              <h3 >{t("UseTerms.I102")}</h3>
              <h3 >{t("UseTerms.I103")}</h3>
              <h3 >{t("UseTerms.I104")}</h3>
              <h3 >{t("UseTerms.I105")}</h3>
            </div>
          </div>        
        </div>
      </div>
      <Footer data={data.Contact} />
    </>
    
  );
};
