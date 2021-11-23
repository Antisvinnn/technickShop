import { Route, Switch } from "react-router";
import IStoreInfo from "../../components/IStoreBlockInfo/IStoreInfo";
import Information from "../information/Information";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route path="/information" component={Information} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
