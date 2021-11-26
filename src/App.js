import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BlackFriday from "./pages/blackfriday/BlackFriday";
import Mac from "./pages/mac/Mac";
import Main from "./pages/main/Main";
import Page404 from "./pages/page404/Page404";
import TermsOfSale from "./pages/terms-of-sale/TermsOfSale";

import InfoRoadMap from "./pages/infoRoadMap/InfoRoadMap";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mac" component={Mac} />
        <Route path="/blackFriday" component={BlackFriday} />
        <Route path="/terms-of-sale" component={TermsOfSale} />
        <Route path="/information" component={InfoRoadMap} />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
