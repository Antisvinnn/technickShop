import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const Header = () => {
	const menu = (
		<Menu className={style.dropMenu}>
			<Menu.Item>
				<Link to='/mac'>Mac</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='$'>iPad</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='/iphone'>iPhone</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='$'>Watch</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='$'>TV</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to='$'>AirPods</Link>
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			<Link to='/blackFriday' className={style.link}>
				<div className={style.topHead}>
					<span>Не открадывайте мечты на потом: Black Friday в i-Store.</span>
					<span>Выгода до 1570 BYN</span>
					<span>Подробнее</span>
				</div>
			</Link>
			<div className={style.headContacts}>
				<Link to='/information'>Информация</Link>
				<Link to='/information/terms-of-sale'>Оплата и доставка</Link>
				<Link to='/information/about'>Адреса магазинов</Link>
				<Link to='/information/installment-and-credit'>Кредит</Link>
				<Link to='/information/legEntities'>Юр. лицам </Link>
				<div className={style.workTime}>
					<img
						src='https://cdn0.iconfinder.com/data/icons/eon-basketball-i-1/32/time_clock_deadline_watch-256.png'
						alt='not found'
					></img>
					<span>
						9:00 - 21:00 (пн-пт);
						<br /> 10:00 - 19:00 (сб-вс)
					</span>
				</div>
				<a href='$'>
					<img
						src='https://cdn4.iconfinder.com/data/icons/communication-163/32/phone-256.png'
						alt='not found'
					></img>
					+375 (44) 5-590-364
				</a>
				<a href='$' className={style.persArea}>
					<img
						src='https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-240.png'
						alt='not found'
					></img>
					Личный кабинет
				</a>
			</div>
			<div className={style.storeLinks}>
				<div className={style.linksContainer}>
					<img
						className={style.mainImgOfLinks}
						src='https://cdn1.iconfinder.com/data/icons/devices-66/136/iphone_5s-256.png'
						alt='not found'
					></img>
					<img
						className={style.searchImg}
						src='https://cdn3.iconfinder.com/data/icons/flat-graphics/32/zoom-128.png'
						alt='not found'
					></img>
					<Dropdown overlay={menu}>
						<a href='$' className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
							Техника Apple <DownOutlined />
						</a>
					</Dropdown>

					<a href='$'>Аудио</a>
					<a href='$'>Аксессуары</a>
					<a href='$'>BnO</a>
					<a href='$'>Услуги</a>
					<a href='$'>Акции</a>
					<a href='$'>Блог</a>

					<div className={style.rightLinks}>
						<a href='$'>
							<img
								src='https://cdn0.iconfinder.com/data/icons/blue-common-symbols-vol-3/1024/scales_shell_scurf_plate_app_mobile-256.png'
								alt='not found'
							></img>
						</a>
						<a href='$'>
							<img
								src='https://cdn2.iconfinder.com/data/icons/symbols-8/50/1F499-blue-heart-128.png'
								alt='not found'
							></img>
						</a>
						<a href='$'>
							<img
								src='https://cdn0.iconfinder.com/data/icons/seo-and-web-set-3-1/100/Untitled-2-132-128.png'
								alt='not found'
							></img>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
