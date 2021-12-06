import style from "./style.module.scss";
import macPage from "./macConfig";

const Mac = () => {
  const macMap = (arr) => {
    return arr.map((el, index) => {
      return (
        <img
          key={index}
          src={el.picture}
          className={el.className}
          alt={el.altes}
        ></img>
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
      <div className={style.navBLock}>
        <a href="$">{macMap(macPage)}</a>
      </div>
    </>
  );
};

export default Mac;
{
  /* <div className={style.navBLock}>
<a href="$">
  <div className={style.attributes}>
	<h1>NEW</h1>
	<h2> АКЦИЯ</h2>
  </div>
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/3/mcbookpro13.png@jpeg"
	alt="not found"
  ></img>
  <h3>MacBookPro</h3>
</a>
<a href="$">
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/4/macbook_air_gold_with_m1_chip_2-up_print__usen.png@jpeg"
	alt="not found"
  ></img>
  <h3>MacBookAir</h3>
</a>
<a href="$">
  <div className={style.attributes}>
	<h1>NEW</h1>
  </div>
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/5/1.png@jpeg"
	alt="not found"
  ></img>
  <h3>IMac</h3>
</a>
<a href="$">
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/7/amm_new_1.png@jpeg"
	alt="not found"
  ></img>
  <h3>Mac Mini</h3>
</a>
<a href="$">
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/6/macpr.png@jpeg"
	alt="not found"
  ></img>
  <h3>Mac Pro</h3>
</a>
<a href="$">
  <img
	src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:0:100:0/plain/s3://catalog-categories/7/12263/1-light.png@jpeg"
	alt="not found"
  ></img>
  <h3>Услуги для Mac</h3>
</a>
</div> */
}
