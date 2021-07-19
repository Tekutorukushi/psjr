// @ts-ignore
import Link from 'next/link'
import classes from './header.module.scss'

export function Header() {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <a className={classes.logo} />
            </Link>
            <div className={classes.input}>
                <button />
                <input placeholder='Поиск' />
            </div>
            <div className={classes.login}>
                <span>Вход</span>
                <span className={classes.icon} /></div>
        </header>
    );
}
