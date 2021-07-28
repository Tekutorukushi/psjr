import clsx from 'clsx';
import { IconCancel } from '@app/ui/icons';
import { Button } from '@app/ui/button';

import style from './modal_logout.module.scss'

export const ModalLogout = () => {
	return (
		<div className={style.root}>
			<div className={style.header}>
				<div className={style.title}>Чё реально хотите разлогиниться?<br/>Нахуя?</div>
				<IconCancel className={style.icon} />
			</div>
			<div className={style.footer}>
				<Button className={style.button}>Остаться</Button>
				<Button outline className={clsx(style.button, style.red)}>Выйти</Button>
			</div>
		</div>
	)
}