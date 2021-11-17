import style from './style.module.css';

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.firstBlockLine}>
				<h1 className={style.siteTitle}>i-Store</h1>
			</div>
			<div className={style.firstInfoBlockLine}>
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
					<span className={style.firstColumnTitle}>iPad</span>
					<span className={style.firstColumnPoint}>iPad mini</span>
					<span className={style.firstColumnPoint}>iPad 10,2</span>
					<span className={style.firstColumnPoint}>iPad Pro 11</span>
					<span className={style.firstColumnPoint}>iPad Pro 12,9</span>
					<span className={style.firstColumnPoint}>iPad Air 4</span>
					<span className={style.firstColumnPoint}>Услуги для iPad</span>
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
			</div>
			<div className={style.secondInfoBlockLine}></div>
		</div>
	);
};

export default Footer;
