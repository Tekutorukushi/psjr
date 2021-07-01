import React, { FC } from 'react'

import classes from './avatar.module.scss'

interface AvatarProps {
    url: string
}

export const Avatar: FC<AvatarProps> = ({ url }) => {
    return (
        <div className={classes.root}>
            <video playsInline autoPlay muted loop className={classes.bg}>
                {/* TODO: mp4 for safari and maybe move video to some misc component */}
                <source src='/button-bg.webm' type='video/webm'/>
            </video>
            <div className={classes.avatar} style={{ backgroundImage: `url(${url})` }} />
        </div>
    )
}
