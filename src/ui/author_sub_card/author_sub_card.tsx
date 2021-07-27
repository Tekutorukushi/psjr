import { ButtonAnimation } from '@app/ui/button_animation';

import style from './author_sub_card.module.scss'

interface AuthorSubCardProps {
	avatar: string;
	name: string;
	onClick?: void;
}

export const AuthorSubCard = ({ avatar, name, onClick }: AuthorSubCardProps) => {

	return (
		<div className={style.root}>
			<div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
			<div className={style.info}>
				<div className={style.name}>{name}</div>
				<ButtonAnimation small onClick={onClick}>Подписаться</ButtonAnimation>
			</div>
		</div>
	)
}