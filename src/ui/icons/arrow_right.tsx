// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconArrowRight = ({ onClick, className }: IconProps) =>{
	return (
		<div className={clsx(style.icon, className)} onClick={onClick} >
			<svg viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M0.0138785 11.1369L0.0103326 9.03288L14.6764 9.00804L7.83556 2.14799L9.31167 0.657688L17.2111 8.57934L17.2112 8.5792L17.6339 9.00303L17.6568 9.00299L17.6568 9.02601L18.6924 10.0645L17.6603 11.1065L17.6603 11.1071L17.6597 11.1071L9.34366 19.5031L7.86254 18.0178L14.7025 11.1121L0.0138785 11.1369Z" fill="white"/>
			</svg>
		</div>
	)
}
