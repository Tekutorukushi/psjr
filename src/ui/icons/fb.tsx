// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconFb = ({className}: IconProps) => {
	return (
		<svg className={clsx(style.social, className)} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M26.8 27.2039H31.12L33.28 20.5917H26.8V17.7092C26.8 15.1197 27.3438 13.8081 31.12 13.9795C32.5506 13.9795 33.28 13.9795 33.28 13.9795V9.57129C32.7951 9.72068 28.9719 9.57129 26.8 9.57129C22.9965 9.57129 19.8647 12.6707 20.32 18.3876V20.5917H16V27.2039H20.32V40.4284H26.8V27.2039Z" fill="white"/>
		</svg>
	)
}