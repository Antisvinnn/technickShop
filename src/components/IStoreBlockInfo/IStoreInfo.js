<<<<<<< HEAD
import NavBlock from "../navBlcoks/NavBlock";
import NavLinks from "../navLinks/NavLinks";
import IStoreParthner from "../storeParthner/IStoreParthner";
=======
import NavBlock from "../NavBlcoks/NavBlock";
import NavLinks from "../NavLinks/NavLinks";
import IStoreParthner from "../StoreParthner/IStoreParthner";
>>>>>>> 9e00bd3d48920d3c8b62dc77097ea3d61feb3024
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
