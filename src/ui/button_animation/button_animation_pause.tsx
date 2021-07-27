// @ts-ignore
import React, { ReactNode } from 'react';
// @ts-ignore
import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimationPause = ({ onClick, children }: ButtonProps) => {
	return (
		<div className={clsx(style.button, style.button_pause)} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				<svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
					<clipPath id='mask-pause'>
						<rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
						<path d="M324.333 18.6667V37.3334L339 28.0001L324.333 18.6667Z" fill="#D36CFF"/>
					</clipPath>
				</svg>
				<div className={style.text}>{children}</div>
			</div>
		</div>
	);
};
