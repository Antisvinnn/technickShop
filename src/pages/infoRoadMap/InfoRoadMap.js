import { Route, Switch } from "react-router";
import Credits from "../credits/Credits";
import Information from "../information/Information";
import About from "../about/About";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route path="/information/about" component={About} />
        <Route path="/information/installment-and-credit" component={Credits} />
        <Route path="/information" component={Information} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
