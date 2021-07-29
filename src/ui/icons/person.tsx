// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconPerson = ({ onClick, className }: IconProps) =>{
	return (
		<div className={clsx(className)} onClick={onClick} >
			<svg className={style.fill} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M24 24C28.42 24 32 20.42 32 16C32 11.58 28.42 8 24 8C19.58 8 16 11.58 16 16C16 20.42 19.58 24 24 24ZM24 28C18.66 28 8 30.68 8 36V40H40V36C40 30.68 29.34 28 24 28Z" fill="white"/>
			</svg>
		</div>
	)
}
