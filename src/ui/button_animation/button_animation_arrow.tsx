// @ts-ignore
import React, { ReactNode } from 'react';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimationArrow = ({ onClick, children }: ButtonProps) => {
	return (
		<div className={style.button} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				<svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
					<clipPath id='mask'>
						<rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M319.199 29.5323L319.199 26.7355L338.815 26.7355L329.681 17.6015L331.658 15.6238L342.206 26.1713L342.206 26.1711L342.77 26.7355H342.801V26.766L344.184 28.1488L342.801 29.5315L342.801 29.5323L342.8 29.5323L331.659 40.6738L329.681 38.6961L338.845 29.5323L319.199 29.5323Z" fill="white"/>
					</clipPath>
				</svg>
				 <div className={style.text}>{children}</div>
			</div>
		</div>
	);
};
