import style from "./style.module.scss";
import RefBreadCrumb from "../../components/refBreadCrumb/RefBreadCrumb";
import { useLocation } from "react-router";
import BankSwitcher from "../../components/bankSwitcher/BankSwitcher";

const Credits = () => {
  let location = useLocation();
  return (
    <>
      <RefBreadCrumb path={location.pathname} className={style.breadcrumb} />
      <div className={style.mainWord}>
        <h1>Кредит</h1>
      </div>

      <div className={style.banner}>
        <img
          src="https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:394:227:0/q:100/plain/s3://pages/7/104/mbp13print.png@jpeg"
          alt="not found"
        />
        <p>Легко впишется в ваш бюджет</p>
      </div>
      <BankSwitcher />
    </>
  );
};
export default Credits;
