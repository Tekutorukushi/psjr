// @ts-ignore
import React, { ReactNode } from 'react';

import style from './tag_card.module.scss'

interface TagCardProps {
	icon?: ReactNode;
	name?: ReactNode;
}

export const TagCard = ({ icon, name }: TagCardProps) => {
	return (
		<div className={style.tag}>
			<div className={style.icon}>{icon}</div>
			<div className={style.name}>{name}</div>
		</div>
	)
}