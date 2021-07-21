// @ts-ignore
import {FC} from "react";

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const ShareIcon = ({ onClick }: IconProps) =>{
    return (
        <div className={style.icon} onClick={onClick} >
            <svg
                className={style.fill}
                viewBox="0 0 32 32"
                fill="none"
            >
                <path d="M13.3333 11.9998V6.6665L4 15.9998L13.3333 25.3332V19.8665C20 19.8665 24.6667 21.9998 28 26.6665C26.6667 19.9998 22.6667 13.3332 13.3333 11.9998Z" />
            </svg>
        </div>
    )
}
