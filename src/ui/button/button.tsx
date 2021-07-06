// @ts-ignore
import React, { ReactNode } from 'react';

import style from './button.module.scss';

interface ButtonProps {
    type?: 'ghost' | 'default' | 'primary' | 'text';
    onClick: void;
    children: React.ReactNode;
    icon: ReactNode;
}

export const Button = ({ children, type='default', onClick, icon }: ButtonProps) => {

    return (
        <div className={style.root} onClick={onClick}>
            <div className={style['wrapper']}>
                <video playsInline autoPlay muted loop className={style.bg}>
                    <source src='./button-bg.webm' type='video/webm'/>
                </video>
                <div className={style.text}>{children}</div>
            </div>
        </div>
    );
};
