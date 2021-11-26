import { Link } from "react-router-dom";
import style from "./style.module.css";

const Information = () => {
  return (
    <>
      <div className={style.headBlock}>
        <span className={style.infoHead}>Информация</span>
      </div>

      <div className={style.infoLinks}>
        <Link to="/information">
          <li>Информация</li>
        </Link>
        <a href="$">
          <li>О магазине</li>
        </a>

        <a href="$">
          <li>Условия продажи</li>
        </a>
        <a href="$">
          <li>Рассрочка и кредит</li>
        </a>
        <a href="$">
          <li>Гарантия</li>
        </a>
        <a href="$">
          <li>Вакансии</li>
        </a>
      </div>
    </>
  );
};

export default Information;
