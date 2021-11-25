import { Route, Switch } from "react-router";
import Information from "../information/Information";
import About from "../about/About";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route path="/information/about" component={About} />
        <Route path="/information" component={Information} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
