import style from "./style.module.scss";
import { useLocation } from "react-router";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";
import appPage from "./appleWatchConfig";
import IStoreParthner from "../../components/StoreParthner/IStoreParthner";

const AppleWatch = () => {
  let location = useLocation();

  const watchMap = (arr) => {
    return arr.map((el, index) => {
      return (
        <a key={el.bottomText} href="$" className={el.secRowBlock}>
          {el.atr && (
            <div className={style.attributes}>
              <h1 className={el.atrClassName}>{el.atr}</h1>
            </div>
          )}

          <img src={el.picture} alt={"not found"}></img>
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
          src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/plain/s3://catalog-categories/7/12225/apple_watch_se_gps_44mm_hero_6-up_print__usen-3.png@webp"
          alt="not found"
        ></img>
        <h1 className={style.headText}>Apple Watch</h1>
      </div>
      <div className={style.navBlock}>{watchMap(appPage)}</div>
      <IStoreParthner />
    </>
  );
};

export default AppleWatch;
