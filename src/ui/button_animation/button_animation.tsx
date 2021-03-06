import clsx from 'clsx';

import { ButtonProps } from './button_props'
import style from './button_animation.module.scss';

export const ButtonAnimation = ({ small, className, onClick, children }: ButtonProps) => {
	return (
		<div className={clsx(style.button, style.button_text, small ? style.small : '', className )} onClick={onClick}>
			<div className={style.wrapper}>
				<div className={style.video}>
					<video playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
				</div>
				<div className={style.text}>{children}</div>
			</div>
		</div>
	);
};
