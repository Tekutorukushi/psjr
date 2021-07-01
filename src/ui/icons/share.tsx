import React, { FC } from 'react'

import classes from './icon.module.scss'
import { IconProps } from './icon_props'
import { extendClassName } from './icon_helpers'

export const ShareIcon: FC<IconProps> = (props) => {
    return (
        <svg
            { ...props }
            className={extendClassName(props.className, classes.icon, classes.fill)}
            viewBox="0 0 32 32"
            fill="none"
        >
            <path d="M13.3333 12V6.66669L4 16L13.3333 25.3334V19.8667C20 19.8667 24.6667 22 28 26.6667C26.6667 20 22.6667 13.3334 13.3333 12Z" />
        </svg>
    )
}
