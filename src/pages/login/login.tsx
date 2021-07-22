import { ButtonAnimation } from '@app/ui/button_animation'
import { Input } from '@app/ui/input';
import { SocialCard } from '@app/ui/social_card';

import style from './login.module.scss'

export const PageLogin = () => {
	return (
		<div className={style.login}>
			<div className={style.title}>Стать пассажиром</div>
			<div className={style.subtitle}>Настраивай ленту, подписывайся на авторов, читай уникальный контент</div>
			<div className={style.enter}>
				<Input placeholder='Почта' />
				<ButtonAnimation>Войти через почту</ButtonAnimation>
			</div>
			<div className={style.or}>Или через соцсеть</div>
			<SocialCard />
		</div>
	)
}