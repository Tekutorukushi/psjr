// @ts-ignore
import React, { ReactNode } from 'react';
// @ts-ignore
import clsx from 'clsx';

import style from './button.module.scss';

interface ButtonProps {
    onClick?: void;
    type?: 'default' | 'outline';
    children?: React.ReactNode;
    arrow?: boolean
    play?: boolean
}

export const Button = ({ onClick, type='default', children, arrow, play }: ButtonProps) => {

    const renderArrow = () => (
        <svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
            <clipPath id='mask'>
                <rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M319.199 29.5323L319.199 26.7355L338.815 26.7355L329.681 17.6015L331.658 15.6238L342.206 26.1713L342.206 26.1711L342.77 26.7355H342.801V26.766L344.184 28.1488L342.801 29.5315L342.801 29.5323L342.8 29.5323L331.659 40.6738L329.681 38.6961L338.845 29.5323L319.199 29.5323Z" fill="white"/>
            </clipPath>
        </svg>
    )

    const renderPlay = () => (
        <svg className={style.svg} width="359" height="56" viewBox="0 0 359 56" xmlns="http://www.w3.org/2000/svg">
            <clipPath id='mask-play'>
                <rect x="0.5" y="0.5" width="294" height="55" rx="5.5"/>
                <rect x="324" y="19" width="4" height="19" fill="#D36CFF"/>
                <rect x="334" y="19" width="4" height="19" fill="#D36CFF"/>
            </clipPath>
            <defs>
                <mask id="mask-text" x="0" y="0" width="100%" height="100%" >
                    <rect fill='white' x="0" y="0" width="100%" height="100%" />
                    <text x="24" y="37">{children}</text>
                </mask>
            </defs>
            <rect fill='white' x="2" y="2" rx='5.5' width="100%" height="100%" />
        </svg>
    )

    return (
        <div className={clsx(style[`button`], style[`button_${type}`])} onClick={onClick}>
            <div className={style.wrapper}>
                <div className={style.video}>
                    <video playsInline autoPlay muted loop>
                        <source src='./button-bg.webm' type='video/webm'/>
                    </video>
                </div>
                {arrow && renderArrow()}
                {play && renderPlay()}
                {type==='default' ? <div className={style.text}>{children}</div> : ''}
            </div>
        </div>
    );
};
