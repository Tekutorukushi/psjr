import clsx from 'clsx';
import { ReactNode } from 'react';
import style from './galo-button.module.scss';

interface ButtonProps {
  type?: 'ghost' | 'default' | 'primary' | 'text';
  size?: 'small' | 'middle' | 'large';
  onClick(event): void;
  children: ReactNode;
  icon: ReactNode;
}

export const GaloButton = ({ children, type='default', size='middle', onClick, icon }: ButtonProps) => {

  return (
    <div className={style['wrapper']}>
      <video playsInline autoPlay muted loop className={style['video-bg']}>
        text
        <source src='/button-bg.webm' type='video/webm'/>
      </video>
      <svg className={style['svg']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%" >
            <rect x="0" y="0" width="100%" height="100%" />
            <text x="72"  y="50">{children}</text>
          </mask>
        </defs>
        <rect fill='black' x="0" y="0" width="100%" height="100%" />
      </svg>
      {/*<button*/}
      {/*  className={clsx(*/}
      {/*    style['galo-button'],*/}
      {/*    style[`galo-button_type__${type}`],*/}
      {/*    style[`galo-button_size__${size}`]*/}
      {/*  )}*/}
      {/*  type={'button'}*/}
      {/*  onClick={onClick}*/}
      {/*>*/}
      {/*  { children }*/}
      {/*</button>*/}
    </div>
  );
};
