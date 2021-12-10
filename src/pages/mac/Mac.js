import style from "./style.module.scss";
import macPage from "./macConfig";

const Mac = () => {
  const macMap = (arr) => {
    return arr.map((el, index) => {
      return (
        <a href="$">
          {el.atrNew || el.atrDisc ? (
            <div className={el.atrClassName}>
              <h1 className={style.attrNewLabel}>{el.atrNew}</h1>
              <h1 className={el.discClassName}>{el.atrDisc}</h1>
            </div>
          ) : null}

          <img key={index} src={el.picture} alt={el.altes}></img>
          <h3>{el.bottomText}</h3>
        </a>
      );
    });
  };
  return (
    <>
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
      <div className={style.navBLock}>{macMap(macPage)}</div>
    </>
  );
};

export default Mac;
