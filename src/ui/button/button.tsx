import React, { ReactNode } from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

interface ButtonProps {
	onClick?: void;
	children?: React.ReactNode;
	className?: string;
}

export const Button = ({onClick, children, className}: ButtonProps) => {
	return (
		<div className={clsx(style.button, className)} onClick={onClick}>
			<span>{children}</span>
		</div>
	);
}