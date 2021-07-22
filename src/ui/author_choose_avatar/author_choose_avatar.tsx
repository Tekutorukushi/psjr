// @ts-ignore
import React, { useState } from 'react';
// @ts-ignore
import clsx from 'clsx';

import style from './author_choose_avatar.module.scss';

interface AuthorChooseAvatarProps {
    small?: boolean
    avatar: string
    name: string
}

export const AuthorChooseAvatar = ({ small, avatar, name }: AuthorChooseAvatarProps) => {
    const [choose, setChoose] = useState(false);

    const toggle = () => {
        setChoose(!choose);
    };

    return (
        <div className={clsx(style.author, small ? style.author_small : '', choose ? style.author_active : '')} onClick={toggle}>
            <div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
            <div className={style.name}>{name}</div>
        </div>
    );
}
