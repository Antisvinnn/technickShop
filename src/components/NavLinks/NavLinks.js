import style from "./style.module.css";

const NavLinks = () => {
  return (
    <div className={style.navLinks}>
      <a href="$">Новости магазина</a>
      <a href="$">Пресс-релизы</a>
      <a href="$">Обзоры</a>
    </div>
  );
};

export default NavLinks;
