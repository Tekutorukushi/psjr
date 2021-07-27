// @ts-ignore
import Link from 'next/link'
// @ts-ignore
import clsx from 'clsx';
import { IconPerson, IconCancel } from '@app/ui/icons';

import style from './header.module.scss'

interface HeaderProps {
    className?: boolean
    isLogin?: boolean
}

export const Header = ({ className, isLogin }: HeaderProps) => {
    const renderLogin = () => (
        <>
            <div className={style.input}>
                <button />
                <input placeholder='Поиск' />
            </div>
            <div className={style.login}>
                <span>Вход</span>
                <IconPerson className={style.icon} />
            </div>
        </>
    )

    const renderLogout = () => (
        <div className={style.login}>
            <span className={style.logout}>Вход</span>
            <IconCancel className={style.icon} />
        </div>
    )

    return (
        <header className={clsx(style.header, className)}>
            <Link href='/'>
                <a className={style.logo} />
            </Link>
            {isLogin ? renderLogout() : renderLogin()}
        </header>
    );
}
