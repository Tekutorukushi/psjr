// @ts-ignore
import Link from 'next/link'
import classes from './header.module.scss'
import { Input } from "../input";

export function Header() {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <a className={classes.logo} />
            </Link>
            <Input placeholder='Поиск' />
            <div className={classes.login}>
                <span>Вход</span>
                <span className={classes.icon} /></div>
        </header>
    );
}
