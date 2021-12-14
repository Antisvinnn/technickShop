import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import React from 'react';

const RefBreadCrumb = ({ path }) => {
	const elmentsOfPath = path.split('/');
	elmentsOfPath.shift();
	elmentsOfPath.unshift('/');
	console.log(elmentsOfPath);
	const renderBreadCrumb = (arr) => {
		return arr.map((el) => {
			return el === '/' ? (
				<Breadcrumb.Item key={el}>
					<Link to={el}>
						<HomeOutlined className={style.house} />
					</Link>
				</Breadcrumb.Item>
			) : (
				<Breadcrumb.Item key={el}>
					<Link to={'/' + el.split('/').pop()}>
						<span className={style.information}>{el}</span>
					</Link>
				</Breadcrumb.Item>
			);
		});
	};
	return (
		<div className={style.container}>
			<Breadcrumb className={style.containerBreadCrumb}>
				{renderBreadCrumb(elmentsOfPath)}
			</Breadcrumb>
		</div>
	);
};
export default RefBreadCrumb;
