import style from "./style.module.css";
import Footer from "../../components/footer/Footer";
import IStoreInfo from "../../components/IStoreBlockInfo/IStoreInfo";
import Devices from "../../components/devices/Devices";

const Main = () => {
  return (
    <div className={style.container}>
      <Devices />
      <IStoreInfo />
      <Footer />
    </div>
  );
};

export default Main;
