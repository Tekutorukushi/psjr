// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconCancel = ({ onClick, className }: IconProps) =>{
	return (
		<div className={clsx(className)} onClick={onClick} >
			<svg className={style.fill} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M11.4996 34.6372L13.4457 36.5713L23.8637 26.2176L34.2816 36.5713L36.2277 34.6372L25.8097 24.2835L36.7986 13.3625L34.8525 11.4284L23.8637 22.3495L12.8748 11.4284L10.9287 13.3625L21.9176 24.2835L11.4996 34.6372Z" fill="white"/>
			</svg>
		</div>
	)
}
