import React, { ReactNode } from 'react';
import { IconArrowLeft } from '@app/ui/icons';

import style from './button_back.module.scss';

interface ButtonBackProps {
	onClick?: void;
	children?: React.ReactNode;
}

export const ButtonBack = ({onClick, children}: ButtonBackProps) => {
	return (
		<div className={style.root} onClick={onClick}>
			<IconArrowLeft className={style.icon} />
			<span>{children}</span>
		</div>
	);
}