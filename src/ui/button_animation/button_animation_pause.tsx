import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';
import { useWindowSize } from '@app/lib/WindowSize';

export const ButtonAnimationPause = ({ onClick, children }: ButtonProps) => {
	const { width } = useWindowSize();

	return (
		<div className={clsx(style.button, style.button_pause)} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				{width > 700 ?
					<svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask-pause'>
							<rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
							<path d="M324.333 18.6667V37.3334L339 28.0001L324.333 18.6667Z" fill="#D36CFF"/>
						</clipPath>
					</svg>
					:
					<svg className={style.svg} width="332" height="42" viewBox="0 0 332 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask-pause'>
							<rect width="280" height="42" rx="6" fill="white"/>
							<path d="M306 14V28L317 21L306 14Z" fill="white"/>
						</clipPath>
					</svg>
				}
				<div className={style.text}>{children}</div>
			</div>
		</div>
	);
};
