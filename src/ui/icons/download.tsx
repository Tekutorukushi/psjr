// @ts-ignore
import {FC} from "react";

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const DownloadIcon = ({ onClick }: IconProps) =>{
    return (
        <div className={style.icon} onClick={onClick} >
            <svg
                className={style.fill}
                viewBox="0 0 32 32"
                fill="none"
            >
                <path d="M6.66699 26.6667H25.3337V24H6.66699V26.6667ZM25.3337 12H20.0003V4H12.0003V12H6.66699L16.0003 21.3333L25.3337 12Z" />
            </svg>
        </div>
    )
}
