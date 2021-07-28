import React, { ReactNode } from 'react';
import clsx from 'clsx';

import style from './container.module.scss'

interface ContainerProps {
	className?: string
	children?: React.ReactNode
}

export const Container = ({className, children}: ContainerProps) => {
	return (
		<div className={clsx(style.root, className)}>{children}</div>
	)
}