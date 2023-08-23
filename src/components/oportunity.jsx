import { Navigation } from "./navigation";
import { useTranslation } from 'react-i18next';
import { Footer } from "./footer";
import "../styles/oportunity.css";

export const Oportunity = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <Navigation />
    <div id='oportunity'>
        <div align="center">
        {/* <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div style={{ padding: 20 }} >
                <h2 className="typewriter-text-oportunity allegoryFont">6 FORMAS DE GENERAR INGRESOS</h2>
                <hr class="social-line"/>
                <h3 style={{ fontSize: 17 }}>En Besana Global reconocemos tu esfuerzo y por lo mismo te ofrecemos 6 formas de generar ingresos reales</h3>
              </div>
            </div>
          </div>
        </div> */}
            {/* <img src="img/Oportunity/GetMoney.png" style={{ marginTop: -310 }}/> */}
            {
              i18n.language == 'es' ? <img src="img/Oportunity/OPORTUNIDAD.jpg"/> : <img src="img/Oportunity/OPORTUNITY.jpg"/>   
            }
        </div>
    </div>
    <Footer props={props.Contact} />
    </>
  )
}
