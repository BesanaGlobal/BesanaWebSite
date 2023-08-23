import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTranslation } from 'react-i18next';
import "../styles/privacypolicy.css";

export const PrivacyPolicy = (data) => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }}/>
      <div id="PrivacyPolicy">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
                <h style={{ color: 'black', textShadow: 'none'}}>{t("PrivacyPolicys.Title")} </h>
                <hr class="social-line"/>
                <h5 >{t("PrivacyPolicys.Type")}</h5>
                <h5 >{t("PrivacyPolicys.EffectiveDate")}</h5>
                <h2 >{t("PrivacyPolicys.C0")}</h2>
                <h3>{t("PrivacyPolicys.I01")}</h3>
                <h3>{t("PrivacyPolicys.I02")}</h3>
                <h1 >{t("PrivacyPolicys.T1")}</h1>
                <h2 >{t("PrivacyPolicys.C1")}</h2>
                <h3>{t("PrivacyPolicys.I101")}</h3>
                <h3>{t("PrivacyPolicys.I102")}</h3>
                <h3>{t("PrivacyPolicys.I103")}</h3>
                <h3>{t("PrivacyPolicys.I104")}</h3>
                <h3>{t("PrivacyPolicys.I105")}</h3>
                <h2 >{t("PrivacyPolicys.C101")}</h2>
                <h1 >{t("PrivacyPolicys.T2")}</h1>
                <h2 >{t("PrivacyPolicys.C2")}</h2>
                <h3>{t("PrivacyPolicys.I21")}</h3>
                <h3>{t("PrivacyPolicys.I22")}</h3>
                <h1 >{t("PrivacyPolicys.T3")}</h1>
                <h2 >{t("PrivacyPolicys.C3")}</h2>
                <h4 >{t("PrivacyPolicys.S3")}</h4>
                <h2 >{t("PrivacyPolicys.C31")}</h2>
                <h3>{t("PrivacyPolicys.I31")}</h3>
                <h3>{t("PrivacyPolicys.I32")}</h3>
                <h3>{t("PrivacyPolicys.I33")}</h3>
                <h3>{t("PrivacyPolicys.I34")}</h3>
                <h3>{t("PrivacyPolicys.I35")}</h3>
                <h3>{t("PrivacyPolicys.I36")}</h3>
                <h3>{t("PrivacyPolicys.I37")}</h3>
                <h2 >{t("PrivacyPolicys.C32")}</h2>
                <h3>{t("PrivacyPolicys.I38")}</h3>
                <h1 >{t("PrivacyPolicys.T4")}</h1>
                <h2 >{t("PrivacyPolicys.C4")}</h2>
                <h2 >{t("PrivacyPolicys.C41")}</h2>
                <h3>{t("PrivacyPolicys.I4")}</h3>
                <h1 >{t("PrivacyPolicys.T5")}</h1>
                <h4 >{t("PrivacyPolicys.S51")}</h4>
                <h2 >{t("PrivacyPolicys.C51")}</h2>
                <h4 >{t("PrivacyPolicys.S52")}</h4>
                <h2 >{t("PrivacyPolicys.C52")}</h2>
                <h3>{t("PrivacyPolicys.I51")}</h3>
                <h3>{t("PrivacyPolicys.I52")}</h3>
                <h3>{t("PrivacyPolicys.I53")}</h3>
                <h3>{t("PrivacyPolicys.I54")}</h3>
                <h1 >{t("PrivacyPolicys.T6")}</h1>
                <h2 >{t("PrivacyPolicys.C6")}</h2>
                <h1 >{t("PrivacyPolicys.T7")}</h1>
                <h2 >{t("PrivacyPolicys.C71")}</h2>
                <h2 >{t("PrivacyPolicys.C72")}</h2>
                <h1 >{t("PrivacyPolicys.T8")}</h1>
                <h2 >{t("PrivacyPolicys.C8")}</h2>
                <h1 >{t("PrivacyPolicys.T9")}</h1>
                <h2 >{t("PrivacyPolicys.C9")}</h2>
                <h3>{t("PrivacyPolicys.I91")}</h3>
                <h3>{t("PrivacyPolicys.I92")}</h3>
                <h3>{t("PrivacyPolicys.I93")}</h3>
                <h1 >{t("PrivacyPolicys.T10")}</h1>
                <h2 >{t("PrivacyPolicys.C10")}</h2>
                <h1 >{t("PrivacyPolicys.T11")}</h1>
                <h2 >{t("PrivacyPolicys.C11")}</h2>
                <h2 >{t("PrivacyPolicys.C1101")}</h2>
                <h3>{t("PrivacyPolicys.I11")}</h3>
                <h2 >{t("PrivacyPolicys.C1102")}</h2>
                <h1 >{t("PrivacyPolicys.T12")}</h1>
                <h2 >{t("PrivacyPolicys.C12")}</h2>
                <h1 >{t("PrivacyPolicys.T13")}</h1>
                <h2 >{t("PrivacyPolicys.C13")}</h2>
                <h3>{t("PrivacyPolicys.I131")}</h3>
                <h3>{t("PrivacyPolicys.I132")}</h3>
            </div>
          </div>        
        </div>
      </div>
      <Footer data={data.Contact} />
    </>    
  );
};
