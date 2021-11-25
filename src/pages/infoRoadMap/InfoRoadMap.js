import { Route, Switch } from "react-router";
import Information from "../information/Information";
import About from "../about/About";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route path="/information" component={Information} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
