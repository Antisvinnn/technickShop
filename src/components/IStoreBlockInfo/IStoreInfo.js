import NavBlock from "../navBlcoks/NavBlock";
import NavLinks from "../navLinks/NavLinks";
import IStoreParthner from "../storeParthner/IStoreParthner";
import style from "./style.module.css";

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
