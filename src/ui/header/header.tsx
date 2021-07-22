// @ts-ignore
import Link from 'next/link'
// @ts-ignore
import clsx from 'clsx';

import style from './header.module.scss'

interface HeaderProps {
    className?: boolean
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={clsx(style.header, className)}>
            <Link href='/'>
                <a className={style.logo} />
            </Link>
            <div className={style.input}>
                <button />
                <input placeholder='Поиск' />
            </div>
            <div className={style.login}>
                <span>Вход</span>
                <span className={style.icon} /></div>
        </header>
    );
}
