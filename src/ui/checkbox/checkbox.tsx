import React, { ReactNode, useState } from 'react';

import style from './checkbox.module.scss'

interface CheckboxProps {
	children?: React.ReactNode;
	checked?: React.ReactNode;
}

export const Checkbox = ({children, checked = false}: CheckboxProps) => {
	const [check, isCheck] = useState(checked);

	const toggle = () => {
		isCheck(!check);
	};

	return (
		<div className={`${style.root} ${check ? style.active : ''}`} onClick={toggle}>
			<span className={style.input}>
				<input type='checkbox' />
				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					{!check ?
						<rect x='0.5' y='1' width='23' height='23' rx='3.5' stroke='#0178FF' />
						:
						<>
							<rect y="0.5" width="24" height="24" rx="4" fill="#0178FF"/>
							<path d="M9.7498 15.65L6.5998 12.5L5.5498 13.55L9.7498 17.75L18.7498 8.74995L17.6998 7.69995L9.7498 15.65Z" fill="white"/>
						</>
					}
				</svg>
			</span>
			<span className={style.label}>{children}</span>
		</div>
	)
}