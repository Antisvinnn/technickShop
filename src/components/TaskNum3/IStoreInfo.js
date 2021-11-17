import NavBlock from "./NavBlock";
import "./style.css";

const IStoreInfo = () => {
  return (
    <div className="mainBlock">
      <div className="navLinks">
        <a href="$">Новости магазина</a>
        <a href="$">Пресс-релизы</a>
        <a href="$">Обзоры</a>
      </div>
      <NavBlock />
    </div>
  );
};

export default IStoreInfo;
