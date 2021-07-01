import React, { FC } from 'react'

import { IconProps } from '@app/ui/icons/icon_props'

import classes from './icon-button.module.scss'
import iconClasses from '../icons/icon.module.scss'

interface IconButtonProps {
    icon: FC<IconProps>
}

export const IconButton: FC<IconButtonProps> = ({ icon: Icon, children }) => {
    return (
        <button className={`${classes.root} ${iconClasses.iconButton}`}>
            <span className={classes.label}>{children}</span>
            <Icon className={classes.icon} />
        </button>
    )
}
