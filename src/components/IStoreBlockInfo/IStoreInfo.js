import NavBlock from "../NavBlcoks/NavBlock";
import NavLinks from "../NavLinks/NavLinks";
import IStoreParthner from "../StoreParthner/IStoreParthner";
import style from "./style.module.scss";

const IStoreInfo = () => {
  return (
    <div className={style.mainBlock}>
      <NavLinks />
      <NavBlock />
      <IStoreParthner />
    </div>
  );
};

export default IStoreInfo;
