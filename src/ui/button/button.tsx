import React, { ReactNode } from 'react';
import clsx from 'clsx';
import style from './button.module.scss';

interface ButtonProps {
	onClick?: ()=>void;
	children?: React.ReactNode;
	className?: string;
	small?: boolean;
	secondary?: boolean;
	outline?: boolean;
}

export const Button = ({onClick, children, className, small, secondary, outline}: ButtonProps) => {
	return (
		<div className={clsx(style.button, className, small && style.small, secondary && style.secondary, outline && style.outline)} onClick={onClick}>
			<span>{children}</span>
		</div>
	);
}