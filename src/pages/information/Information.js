import { Link } from "react-router-dom";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";
import style from "./style.module.scss";
import { useLocation } from "react-router";

const Information = () => {
  let location = useLocation();

  return (
    <>
      <RefBreadCrumb path={location.pathname} className={style.breadCrumb} />
      <div className={style.headBlock}>
        <span className={style.infoHead}>Информация</span>
      </div>

      <div className={style.infoLinks}>
        <Link to="/information">
          <li>Информация</li>
        </Link>
        <Link to="/information/about">
          <li>О магазине</li>
        </Link>
        <Link to="/information/terms-of-sale">
          <li>Условия продажи</li>
        </Link>
        <Link to="/information/installment-and-credit">
          <li>Рассрочка и кредит</li>
        </Link>
        <Link to="/information/guarantee">
          <li>Гарантия</li>
        </Link>
        <Link to="/information/job">
          <li>Вакансии</li>
        </Link>
      </div>
    </>
  );
};

export default Information;
