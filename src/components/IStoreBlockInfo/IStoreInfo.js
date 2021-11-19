import NavBlock from "../NavBlcoks/NavBlock";
import NavLinks from "../NavLinks/NavLinks";
import IStoreParthner from "../StoreParthner/IStoreParthner";

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
