import { useState } from "react";
import { ButtonAnimation } from '@app/ui/button_animation';
import { Button } from '@app/ui/button';

import style from './author_sub_card.module.scss'

interface AuthorSubCardProps {
	avatar: string;
	name: string;
	onClick?: void;
}

export const AuthorSubCard = ({ avatar, name, onClick }: AuthorSubCardProps) => {
	const [sub, IsSub] = useState(false);

	const toggle = () => {
		IsSub(!sub);
	};

	return (
		<div className={style.root}>
			<div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
			<div className={style.info}>
				<div className={style.name}>{name}</div>
				{!sub ?
					<ButtonAnimation small onClick={toggle}>Подписаться</ButtonAnimation>
					:
					<Button className={style.button} small outline onClick={toggle}>Отписаться</Button>
				}
			</div>
		</div>
	)
}