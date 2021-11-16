import Header from "../../components/header/Header";
import MainContent from "../../components/mainContent/MainContent";
import Footer from "../../components/footer/Footer";
import "./style.css";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Main;
