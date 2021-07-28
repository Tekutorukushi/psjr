import React, { ReactNode } from 'react';

import style from './country_card.module.scss';

interface CountryCardProps {
	icon?: string;
	name?: React.ReactNode;
}

export const CountryCard = ({icon, name}: CountryCardProps) => {
	return (
		<div className={style.country}>
			<div className={style.icon} style={{ backgroundImage: `url(${icon})` }} />
			<div className={style.name}>{name}</div>
		</div>
	)
}