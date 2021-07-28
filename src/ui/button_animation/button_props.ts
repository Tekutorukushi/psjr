import React, { ReactNode } from 'react';

export interface ButtonProps {
	small?: boolean;
	onClick?: void;
	children?: React.ReactNode;
}