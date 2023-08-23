import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import Router from "./Router";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { userStore } from "./store/userStore";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {
  // const stripePromise = loadStripe("pk_test_51M8A3cCrrdI1PPjauULjuoOsNSLJ2h3fb7obXy3iPJF0vfLg9QClxsf4zDlorOUGNwTnIU3qvB4Micv5WXU4FBQu00fr7kxlS6");
  
  const stripePromise = loadStripe("pk_live_51IR4JwCBDL6tBtH58WTvQCq67qtIBzVkEYSX1vsLTu9lAMvypxvehd2KwOPg1AwGWirp642GPkZi2l8MJblCkXtn00RxKRuNLW");
  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    </Elements>
  );
};

export default App;
