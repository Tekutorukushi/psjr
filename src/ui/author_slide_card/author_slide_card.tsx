import { useState } from "react";
import { AuthorMiniCard } from '@app/ui/author_mini_card';
import { Button } from '@app/ui/button';
import { IconArrowRight } from '@app/ui/icons';

import style from './author_slide_card.module.scss'

interface AuthorSlideCardProps {
	all?: boolean;
	avatar?: string;
	name?: string;
}

export const AuthorSlideCard = ({all, avatar, name}: AuthorSlideCardProps) => {
	const [sub, IsSub] = useState(false);

	const toggle = () => {
		IsSub(!sub);
	};

	const renderAuthor = () => (
		<>
			<AuthorMiniCard avatar={avatar} name={name} />
			{!sub ?
				<Button className={style.button} small secondary onClick={toggle}>Подписаться</Button>
				:
				<Button className={style.button} small outline onClick={toggle}>Отписаться</Button>
			}
		</>
	)

	const renderAll = () => (
		<>
			<div className={style.header}>
				<div className={style.avatar}>
					<video className={style.video} playsInline autoPlay muted loop>
						<source src='./button-bg.webm' type='video/webm'/>
					</video>
					<IconArrowRight className={style.icon} />
				</div>
				<div className={style.text}>Все <br/>авторы</div>
			</div>
			<Button className={style.button} small outline>Смотреть</Button>
		</>
	)

	return (
		<div className={style.root}>
			{all ? renderAll() : renderAuthor()}
		</div>
	)
}