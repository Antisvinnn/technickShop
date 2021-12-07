import style from "./style.module.scss";

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
