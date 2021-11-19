import NavBlock from "../navBlcoks/NavBlock";
import NavLinks from "../navLinks/NavLinks";
import IStoreParthner from "../storeParthner/IStoreParthner";

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
