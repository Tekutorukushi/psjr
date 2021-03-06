// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconGoogle = ({className}: IconProps) => {
	return (
		<svg className={clsx(style.social, className)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M40.2814 21.435H25.4683V27.6444H33.9949C33.2 31.5892 29.8761 33.8538 25.4683 33.8538C20.2656 33.8538 16.0746 29.6168 16.0746 24.3571C16.0746 19.0973 20.2656 14.8603 25.4683 14.8603C27.7083 14.8603 29.7316 15.6639 31.3213 16.9788L35.9459 12.3035C33.1278 9.81974 29.5148 8.28564 25.4683 8.28564C16.6527 8.28564 9.57129 15.4447 9.57129 24.3571C9.57129 33.2694 16.6527 40.4285 25.4683 40.4285C33.4168 40.4285 40.6427 34.5843 40.6427 24.3571C40.6427 23.4074 40.4982 22.3847 40.2814 21.435Z" fill="white"/>
		</svg>
	)
}