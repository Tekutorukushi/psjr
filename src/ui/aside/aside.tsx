import styles from './aside.module.scss'

export function Aside() {

    return (
        <aside className={styles.aside}>
            <div className={styles.container}>aside</div>
            <div className={styles.container}>aside</div>
        </aside>
    );
}
