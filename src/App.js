import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BlackFriday from "./pages/blackfriday/BlackFriday";
import Mac from "./pages/mac/Mac";
import Main from "./pages/main/Main";
import Page404 from "./pages/page404/Page404";
import InfoRoadMap from "./pages/infoRoadMap/InfoRoadMap";
import About from "./pages/about/About";
import Contacts from "./components/iStoreContancts/Contacts";
import Iphone from "./pages/iphone/Iphone";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mac" component={Mac} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/blackFriday" component={BlackFriday} />
        <Route path="/information" component={InfoRoadMap} />
        <Route path="/about" component={About} />
        <Route path="*" component={Page404} />
      </Switch>
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
