import { IconApple, IconFb, IconGoogle, IconMail, IconVk, IconYa } from '@app/ui/icons';

import style from './social_card.module.scss'

export const SocialCard = () => {
	return (
		<div className={style.root}>
			<div className={style.item}>
				<IconGoogle className={style.icon} />
			</div>
			<div className={style.item}>
				<IconApple className={style.icon} />
			</div>
			<div className={style.item}>
				<IconVk className={style.icon} />
			</div>
			<div className={style.item}>
				<IconFb className={style.icon} />
			</div>
			<div className={style.item}>
				<IconYa className={style.icon} />
			</div>
			<div className={style.item}>
				<IconMail className={style.icon} />
			</div>
		</div>
	)
}