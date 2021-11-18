import style from './style.module.css';

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.firstBlockLine}>
				<h1 className={style.siteTitle}>i-Store</h1>
			</div>
			<div className={style.infoBlockLine}>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Mac</span>
					<span className={style.firstColumnPoint}>MacBook Pro</span>
					<span className={style.firstColumnPoint}>MacBook Air</span>
					<span className={style.firstColumnPoint}>iMac</span>
					<span className={style.firstColumnPoint}>Mac Mini</span>
					<span className={style.firstColumnPoint}>Mac Pro</span>
					<span className={style.firstColumnPoint}>Услуги для Mac</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>iPad</span>
					<span className={style.firstColumnPoint}>iPad mini</span>
					<span className={style.firstColumnPoint}>iPad 10,2</span>
					<span className={style.firstColumnPoint}>iPad Pro 11</span>
					<span className={style.firstColumnPoint}>iPad Pro 12,9</span>
					<span className={style.firstColumnPoint}>iPad Air 4</span>
					<span className={style.firstColumnPoint}>Услуги для iPad</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>iPhone</span>
					<span className={style.firstColumnPoint}>iPhone 13 Pro</span>
					<span className={style.firstColumnPoint}>iPhone 13 Pro Max</span>
					<span className={style.firstColumnPoint}>iPhone 13</span>
					<span className={style.firstColumnPoint}>iPhone 13 mini</span>
					<span className={style.firstColumnPoint}>iPhone 12</span>
					<span className={style.firstColumnPoint}>iPhone 12 Pro</span>
					<span className={style.firstColumnPoint}>iPhone 12 Pro Max</span>
					<span className={style.firstColumnPoint}>iPhone 12 mini</span>
					<span className={style.firstColumnPoint}>iPhone SE 2</span>
					<span className={style.firstColumnPoint}>iPhone 11</span>
					<span className={style.firstColumnPoint}>iPhone XR</span>
					<span className={style.firstColumnPoint}>Услуги для iPhone</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>TV</span>
					<span className={style.firstColumnPoint}>Apple TV 4K</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Аксессуары</span>
					<span className={style.firstColumnPoint}>Упаковки и подарки</span>
					<span className={style.firstColumnPoint}>Аксессуары для Mac</span>
					<span className={style.firstColumnPoint}>Аксессуары для iPad</span>
					<span className={style.firstColumnPoint}>Аксессуары для iPhone</span>
					<span className={style.firstColumnPoint}>Аксессуары для Apple TV</span>
					<span className={style.firstColumnPoint}>Акустика</span>
					<span className={style.firstColumnPoint}>Аксессуары для Apple Watch</span>
					<span className={style.firstColumnPoint}>Умные устройства</span>
				</div>
			</div>
			<div className={style.infoBlockLine}>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Информация</span>
					<span className={style.firstColumnPoint}>О магазине</span>
					<span className={style.firstColumnPoint}>Условия продажи</span>
					<span className={style.firstColumnPoint}>Оферта</span>
					<span className={style.firstColumnPoint}>Гарантия</span>
					<span className={style.firstColumnPoint}>Кредит</span>
					<span className={style.firstColumnPoint}>Подарочные сертификаты</span>
					<span className={style.firstColumnPoint}>Программа лояльности</span>
					<span className={style.firstColumnPoint}>Вакансии</span>
					<span className={style.firstColumnPoint}>
						Согласие на обработку <br /> персональных данных
					</span>
					<span className={style.firstColumnPoint}>О cookies</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Услуги</span>
					<span className={style.firstColumnPoint}>Сервисные услуги</span>
					<span className={style.firstColumnPoint}>Trade-in</span>
					<span className={style.firstColumnPoint}>Страховка</span>
					<span className={style.firstColumnPoint}>Подарочные сертификаты</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Клиентам</span>
					<span className={style.firstColumnPoint}>
						Скидки для студентов и <br /> преподавателей
					</span>
					<span className={style.firstColumnPoint}>Безналичные расчёт</span>
					<span className={style.firstColumnPoint}>Карта клиента i-Store</span>
				</div>
				<div className={style.column}>
					<span className={style.firstColumnTitle}>Новости</span>
					<span className={style.firstColumnPoint}>Новости магазина</span>
					<span className={style.firstColumnPoint}>Пресс-релизы</span>
					<span className={style.firstColumnPoint}>Обзоры</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
