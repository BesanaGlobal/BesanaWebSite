import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { useTranslation } from 'react-i18next';
import "../styles/returnpolicys.css";

export const ReturnPolicys = (data) => {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }}/>
      <div id="ReturnPolicys">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
                <h style={{ color: 'black', textShadow: 'none'}}>{t("ReturnPolicys.Title")} </h>
                <hr class="social-line"/>
                <h3 >{t("ReturnPolicys.UpdateDate")}</h3>
                <h2 >{t("ReturnPolicys.C1")}</h2>
                <h1 >{t("ReturnPolicys.T2")}</h1>
                <h2 >{t("ReturnPolicys.C2")}</h2>
                <h1 >{t("ReturnPolicys.T3")}</h1>
                <h2 >{t("ReturnPolicys.C3")}</h2>
                <h1 >{t("ReturnPolicys.T4")}</h1>
                <h2 >{t("ReturnPolicys.C4")}</h2>
                <h1 >{t("ReturnPolicys.T5")}</h1>
                <h2 >{t("ReturnPolicys.C5")}</h2>
                <h1 >{t("ReturnPolicys.T6")}</h1>
                <h2 >{t("ReturnPolicys.C6")}</h2>
            </div>
          </div>        
        </div>
      </div>
      <Footer data={data.Contact} />
    </>    
  );
};
