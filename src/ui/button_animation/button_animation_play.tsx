import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';
import { useWindowSize } from '@app/lib/WindowSize';

export const ButtonAnimationPlay = ({ onClick, children }: ButtonProps) => {
	const { width } = useWindowSize();

	return (
		<div className={clsx(style.button, style.button_play)} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				{width > 700 ?
					<svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask-play'>
							<rect x="0.5" y="0.5" width="294" height="55" rx="5.5" stroke="white"/>
							<rect x="324" y="19" width="4" height="19" fill="white"/>
							<rect x="334" y="19" width="4" height="19" fill="white"/>
						</clipPath>
						<defs>
							<mask id="mask-text" x="0" y="0" width="100%" height="100%" >
								<rect fill='white' x="0" y="0" width="100%" height="100%" />
								<text x="24" y="37">{children}</text>
							</mask>
						</defs>
						<rect fill='white' x="2" y="2" rx='5.5' width="100%" height="100%" />
					</svg>
					:
					<svg className={style.svg} width="332" height="42" viewBox="0 0 332 42" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask-play'>
							<rect x="0.5" y="0.5" width="280" height="42" rx="6" stroke="white"/>
							<rect x="305" y="12" width="4" height="19" fill="white"/>
							<rect x="315" y="12" width="4" height="19" fill="white"/>
						</clipPath>
						<defs>
							<mask id="mask-text" x="0" y="0" width="100%" height="100%" >
								<rect fill='white' x="0" y="0" width="84%" height="100%" rx="6" />
								<text x="24" y="28">{children}</text>
							</mask>
						</defs>
						<rect fill='white' x="2" y="2" rx='5.5' width="100%" height="100%" />
					</svg>
				}
			</div>
		</div>
	);
};
