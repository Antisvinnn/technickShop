import Footer from '../../components/footer/Footer';
import style from './style.module.css';
import IStoreInfo from '../../components/IStoreBlockInfo/IStoreInfo';

const Main = () => {
	return (
		<div className={style.container}>
			<IStoreInfo />
			<Footer />
		</div>
	);
};

export default Main;
