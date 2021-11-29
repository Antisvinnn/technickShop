import { Link } from "react-router-dom";
import style from "./style.module.css";

const Page404 = () => {
  return (
    <>
      <div className={style.page404}>
        <h1>Ошибка 404</h1>
        <p>
          Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
          существует! Возможно, она устарела, была удалена, или был введен
          неверный адрес в адресной строке.
        </p>
        <Link to="/">Перейти на главную</Link>
      </div>
    </>
  );
};

export default Page404;
