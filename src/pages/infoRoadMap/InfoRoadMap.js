import { Route, Switch } from "react-router";
import Credits from "../credits/Credits";
import Information from "../information/Information";
import About from "../about/About";
import TermsOfSale from "../terms-of-sale/TermsOfSale";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route path="/information/terms-of-sale" component={TermsOfSale} />
        <Route path="/information/about" component={About} />
        <Route path="/information/installment-and-credit" component={Credits} />
        <Route path="/information" component={Information} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
