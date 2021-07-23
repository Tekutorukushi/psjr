// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconYa = ({className}: IconProps) => {
	return (
		<svg className={clsx(style.social, className)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M34.9997 40.4284H29.6118V13.745H27.2075C22.7997 13.745 20.4843 15.9641 20.4843 19.2501C20.4843 22.9789 22.0871 24.711 25.3816 26.9312L28.0977 28.7519L20.2612 40.4284H14.4282L21.4633 29.9948C17.4119 27.1083 15.1408 24.3114 15.1408 19.5611C15.1408 13.6111 19.2822 9.57129 27.1631 9.57129H34.9997V40.4284Z" fill="white"/>
		</svg>
	)
}