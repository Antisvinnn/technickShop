import style from "./style.module.scss";
import macPage from "./macConfig";
import { useLocation } from "react-router";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";
import IStoreParthner from "../../components/StoreParthner/IStoreParthner";

const Mac = () => {
  let location = useLocation();

  const macMap = (arr) => {
    return arr.map((el, index) => {
      return (
        <a href="$" className={el.secBlockStyle} key={el.bottomText}>
          {el.atrNew || el.atrDisc ? (
            <div className={el.atrClassName}>
              <h1 className={style.attrNewLabel}>{el.atrNew}</h1>
              <h1 className={el.discClassName}>{el.atrDisc}</h1>
            </div>
          ) : null}

          <img src={el.picture} alt={el.altes}></img>
          <h3>{el.bottomText}</h3>
        </a>
      );
    });
  };
  return (
    <>
      <RefBreadCrumb path={location.pathname} className={style.breadCrumb} />

      <div className={style.headBlock}>
        <img
          src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/plain/s3://catalog-categories/7/1/multi-product_mac_mini_macbook_air_imac_macbook_pro_13-in_m1_chip_family_4-up_print__usen.png@webp"
          alt="not found"
        ></img>
        <div className={style.headText}>
          <h1>Mac</h1>
          <h2>Готовы к любым задачам</h2>
        </div>
      </div>
      <div className={style.navBlock}>{macMap(macPage)}</div>
      <IStoreParthner />
    </>
  );
};

export default Mac;
