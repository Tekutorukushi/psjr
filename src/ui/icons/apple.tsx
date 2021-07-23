// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconApple = ({className}: IconProps) => {
	return (
		<svg className={clsx(style.social, className)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path d="M35.5541 24.8398C35.6051 30.2877 40.3755 32.1007 40.4284 32.1238C40.388 32.2517 39.6661 34.7074 37.9151 37.244C36.4014 39.4371 34.8304 41.6221 32.3556 41.6673C29.9238 41.7117 29.1419 40.2379 26.3617 40.2379C23.5823 40.2379 22.7136 41.6221 20.4116 41.7117C18.0228 41.8013 16.2037 39.3403 14.6775 37.1553C11.5587 32.6858 9.17533 24.5255 12.3756 19.0172C13.9654 16.2818 16.8066 14.5496 19.8904 14.5051C22.2361 14.4608 24.4503 16.0695 25.8843 16.0695C27.3174 16.0695 30.008 14.1349 32.8365 14.419C34.0207 14.4679 37.3446 14.8932 39.4789 17.99C39.3069 18.0957 35.5128 20.2851 35.5541 24.8398V24.8398ZM30.9839 11.4621C32.2521 9.94031 33.1057 7.82191 32.8729 5.71411C31.0448 5.78694 28.8342 6.92164 27.523 8.44255C26.3479 9.78938 25.3187 11.9451 25.5964 14.0111C27.634 14.1674 29.7156 12.9848 30.9839 11.4621" fill="white"/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="31.5091" height="38.5714" fill="white" transform="translate(9.33594 4.42847)"/>
				</clipPath>
			</defs>
		</svg>
	)
}