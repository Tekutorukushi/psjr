import React, { ReactNode } from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

interface ButtonProps {
	onClick?: void;
	children?: React.ReactNode;
	before?: React.ReactNode;
	after?: React.ReactNode;
	className?: string;
}

export const Button = ({onClick, children, before, after, className}: ButtonProps) => {
	return (
		<div className={clsx(style.button, className)} onClick={onClick}>
			{before && <div className={style.before}>{before}</div>}
			<span>{children}</span>
			{after && <div className={style.after}>{after}</div>}
		</div>
	);
}