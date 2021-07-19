// @ts-ignore
import React, { ReactNode, ReactHTML, createElement } from 'react';
// @ts-ignore
import clsx from 'clsx';

import style from './title.module.scss';

export enum Type {
    'h1',
    'h2',
    'h3',
    'paragraph',
}

interface TitleProps {
    as?: keyof ReactHTML;
    children?: React.ReactNode;
    type?: Type;
}

export const Title = ({ as = 'span', children, type }: TitleProps) => {
    return createElement(
        as,
        {
            className: clsx(style.title, style[`title_${type}`]),
        },
        children,
    );
}
