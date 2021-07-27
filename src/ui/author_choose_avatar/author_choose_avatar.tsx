// @ts-ignore
import React, { useState } from 'react';

import style from './author_choose_avatar.module.scss';

interface AuthorChooseAvatarProps {
    avatar: string
    name: string
}

export const AuthorChooseAvatar = ({ avatar, name }: AuthorChooseAvatarProps) => {
    const [choose, setChoose] = useState(false);

    const toggle = () => {
        setChoose(!choose);
    };

    return (
        <div className={`${style.author} ${choose ? `${style.author_active}` : ''}`} onClick={toggle}>
            <div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
            <div className={style.name}>{name}</div>
        </div>
    );
}
