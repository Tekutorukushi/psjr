import { useWindowSize } from '@app/lib/WindowSize';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimationArrow = ({ onClick, children }: ButtonProps) => {
	const { width } = useWindowSize();

	return (
		<div className={style.button} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				{width > 700 ?
					<svg className={style.svg} width="332" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask'>
							<rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M319.199 29.5323L319.199 26.7355L338.815 26.7355L329.681 17.6015L331.658 15.6238L342.206 26.1713L342.206 26.1711L342.77 26.7355H342.801V26.766L344.184 28.1488L342.801 29.5315L342.801 29.5323L342.8 29.5323L331.659 40.6738L329.681 38.6961L338.845 29.5323L319.199 29.5323Z" fill="white"/>
						</clipPath>
					</svg>
					:
					<svg className={style.svg} width="332" height="42" viewBox="0 0 332 42" fill="none" xmlns="http://www.w3.org/2000/svg">
						<clipPath id='mask'>
							<rect width="280" height="42" rx="6" fill="white"/>
							<path fillRule="evenodd" clipRule="evenodd" d="M302.149 22.1493L302.149 20.0517L316.861 20.0517L310.011 13.2012L311.494 11.7179L319.404 19.6285L319.405 19.6284L319.828 20.0517H319.851V20.0746L320.888 21.1116L319.851 22.1487L319.851 22.1493L319.85 22.1493L311.494 30.5054L310.011 29.0222L316.884 22.1493L302.149 22.1493Z" fill="white"/>
						</clipPath>
					</svg>
				}
				<div className={style.text}>{children}</div>
			</div>
		</div>
	);
};
