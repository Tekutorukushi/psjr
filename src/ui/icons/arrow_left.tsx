// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconArrowLeft = ({ onClick, className }: IconProps) =>{
    return (
        <div className={clsx(style.icon, className)} onClick={onClick} >
            <svg viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.6902 8.86305L18.6938 10.9671L4.02774 10.992L10.8685 17.852L9.39243 19.3423L1.49302 11.4207L1.49287 11.4208L1.07023 10.997L1.04735 10.997L1.04731 10.974L0.0117506 9.93551L1.0438 8.89354L1.0438 8.89293L1.0444 8.89293L9.36044 0.496942L10.8416 1.98223L4.00163 8.88792L18.6902 8.86305Z" fill="white"/>
            </svg>
        </div>
    )
}