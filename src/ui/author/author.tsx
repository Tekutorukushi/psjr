import React, { FC } from 'react'

import classes from './author.module.scss'

interface AuthorProps {
    url: string
    label: string
}

export const Author: FC<AuthorProps> = ({ url, label }) => {
    return (
        <div className={classes.root}>
            <div className={classes.avatar} style={{ backgroundImage: `url(${url})` }} />
            <div className={classes.label}>{label}</div>
        </div>
    )
}
