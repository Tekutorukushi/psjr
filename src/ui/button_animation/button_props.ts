import React, { ReactNode } from 'react';

export interface ButtonProps {
	small?: boolean;
	className?: string;
	id?: string;
	onClick?: void;
	children?: React.ReactNode;
}