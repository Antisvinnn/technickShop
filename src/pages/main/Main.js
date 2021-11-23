import style from './style.module.css';
import IStoreInfo from '../../components/IStoreBlockInfo/IStoreInfo';
import Devices from '../../components/devices/Devices';
import DeliveryWays from '../../components/iStoreWaysDelivery/DeliveryWays';

const Main = () => {
	return (
		<div className={style.container}>
			<Devices />
			<IStoreInfo />
			<DeliveryWays />
		</div>
	);
};

export default Main;
