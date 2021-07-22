// @ts-ignore
import clsx from 'clsx';

import style from './icon.module.scss'
import { IconProps } from './icon_props'

export const IconArrowLeft = ({ onClick, className }: IconProps) =>{
  return (
    <div className={clsx(style.icon, className)} onClick={onClick} >
      <svg viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2.66129" height="16.899" transform="matrix(0.555779 0.557 -0.553332 0.558704 9.40967 0.496948)" fill="white"/>
        <rect width="3.36162" height="13.8845" transform="matrix(0.000556167 0.61997 -1.27107 0.0035906 18.7388 8.86304)" fill="white"/>
        <rect width="2.67247" height="16.8814" transform="matrix(-0.553099 0.558759 -0.555546 -0.557056 10.9155 17.849)" fill="white"/>
      </svg>
    </div>
  )
}
