import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Mac from './pages/mac/Mac';
import Main from './pages/main/Main';
import Page404 from './pages/page404/Page404';

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/mac' component={Mac} />
				<Route exact path='/' component={Main} />
				<Route path='*' component={Page404} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
