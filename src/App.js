import { Switch, Route, Redirect } from 'react-router-dom';
import style from './app.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BlackFriday from './pages/blackfriday/BlackFriday';
import Mac from './pages/mac/Mac';
import Main from './pages/main/Main';
import Page404 from './pages/page404/Page404';
import InfoRoadMap from './pages/infoRoadMap/InfoRoadMap';
import About from './pages/about/About';
import AppleWatch from './pages/appleWatch/AppleWatch';
import Contacts from './components/iStoreContancts/Contacts';
import Iphone from './pages/iphone/Iphone';
import { Modal, Button } from 'antd';
import { useEffect, useState } from 'react';

const App = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [isAuth, setAuth] = useState(false);
	const [isApply, setApply] = useState(true);
	// useEffect(() => {
	// 	setModalVisible(true);
	// }, []);
	// alert("2" - 1);
	return (
		<>
			<Header authTools={{ auth: isAuth, setAuth: setAuth }} />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/mac' component={Mac} />
				<Route path='/iphone' component={Iphone} />
				<Route path='/blackFriday' component={BlackFriday} />
				<Route path='/apple-watch' component={AppleWatch} />
				<Route path='/information' component={InfoRoadMap} />
				<Route path='/about' component={About} />
				<Route path='*' component={Page404} />
			</Switch>
			<Contacts />
			<Footer />
			{!isApply && <Redirect to='*' />}
			<Modal
				className={style.containerModal}
				footer={null}
				centered
				closable={false}
				visible={modalVisible}
			>
				<div className={style.topic}>
					<p>Вы авторизованы?</p>
					<div>
						<Button
							type='primary'
							onClick={() => {
								setModalVisible(false);
								setAuth(true);
							}}
						>
							Да
						</Button>
						<Button
							danger
							type='primary'
							onClick={() => {
								setApply(false);
								setModalVisible(false);
							}}
						>
							Нет
						</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default App;
