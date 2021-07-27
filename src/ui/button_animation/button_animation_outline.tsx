// @ts-ignore
import React, { ReactNode } from 'react';
// @ts-ignore
import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimationOutline = ({ onClick, children }: ButtonProps) => {
	return (
		<div className={clsx(style.button, style.button_outline)} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				<svg className={style.svg} viewBox="0 0 200 42" xmlns="http://www.w3.org/2000/svg">
					<clipPath id='mask-outline'>
						<rect x="0.5" y="0.5" rx="6" stroke="white"/>
					</clipPath>
					<defs>
						<mask id="mask-outline-text" x="0" y="0" width="100%" height="100%" >
							<rect fill='white' x="0" y="0" width="100%" height="100%" />
							<text x="24" y="27">{children}</text>
						</mask>
					</defs>
					<rect fill='white' x="2" y="2" rx='6' width="100%" height="100%" />
				</svg>
			</div>
		</div>
	);
};
