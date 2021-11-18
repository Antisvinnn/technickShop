import NavBlock from "./NavBlock";
import NavLinks from "./NavLinks";
import IStoreParthner from "./IStoreParthner";
import "./style.css";

const IStoreInfo = () => {
  return (
    <div className="mainBlock">
      <NavLinks />
      <NavBlock />
      <IStoreParthner />
    </div>
  );
};

export default IStoreInfo;
