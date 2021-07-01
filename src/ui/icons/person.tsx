import React, { FC } from 'react'

import classes from './icon.module.scss'
import { IconProps } from './icon_props'
import { extendClassName } from './icon_helpers'

export const PersonIcon: FC<IconProps> = (props) => {
    return (
        <svg
            { ...props }
            className={extendClassName(props.className, classes.icon, classes.fill)}
            fill="none"
            viewBox="0 0 32 32"
        >
            <path
                d="M16 16c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm0 4c-5.34 0-16 2.68-16 8v4h32v-4c0-5.32-10.66-8-16-8z"
            />
        </svg>
    )
}
