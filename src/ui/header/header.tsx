// @ts-ignore
import Link from 'next/link'

import style from './header.module.scss'

export function Header() {
    return (
        <header className={style.header}>
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
