import React, { FC } from 'react'

import classes from './icon.module.scss'
import { IconProps } from './icon_props'
import { extendClassName } from './icon_helpers'

export const DownloadIcon: FC<IconProps> = (props) => {
    return (
        <svg
            { ...props }
            className={extendClassName(props.className, classes.icon, classes.fill)}
            viewBox="0 0 32 32"
            fill="none"
        >
            <path d="M6.66675 26.6667H25.3334V24H6.66675V26.6667ZM25.3334 12H20.0001V4H12.0001V12H6.66675L16.0001 21.3333L25.3334 12Z" />
        </svg>
    )
}
