// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'

import { IconProps } from './icon_props'

export const LikeIcon = ({ onClick, className }: IconProps) =>{
    return (
        <div className={clsx(style[`icon`], className)} onClick={onClick} >
            <svg
                className={style.fill}
                viewBox="0 0 32 32"
                fill="none"
            >
                <path
                    d="M16 28.467l-1.934-1.76C7.2 20.48 2.666 16.373 2.666 11.333 2.667 7.227 5.894 4 10 4c2.32 0 4.546 1.08 6 2.787C17.453 5.08 19.68 4 22 4c4.107 0 7.333 3.227 7.333 7.333 0 5.04-4.533 9.147-11.4 15.387L16 28.467z"
                />
            </svg>
        </div>
    )
}
