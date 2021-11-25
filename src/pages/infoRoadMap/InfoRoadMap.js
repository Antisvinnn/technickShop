import { Route, Switch } from "react-router";
import IStoreInfo from "../../components/IStoreBlockInfo/IStoreInfo";
import Credits from "../credits/Credits";
import Information from "../information/Information";

const InfoRoadMap = () => {
  return (
    <>
      <Switch>
        <Route exact path="/information" component={Information} />
        <Route path="/information/installment-and-credit" component={Credits} />
      </Switch>
    </>
  );
};

export default InfoRoadMap;
