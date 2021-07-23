// @ts-ignore
import React, { ReactNode } from 'react';

import style from './button.module.scss';

interface ButtonProps {
  onClick?: void;
  children?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export const Button = ({onClick, children, before, after}: ButtonProps) => {
  return (
    <div className={style.button} onClick={onClick}>
      {before && <div className={style.before}>{before}</div>}
      <span>{children}</span>
      {after && <div className={style.after}>{after}</div>}
    </div>
  );
}