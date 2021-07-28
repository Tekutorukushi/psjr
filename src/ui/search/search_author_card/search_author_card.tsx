import { useState } from "react";
import { AuthorMiniCard } from '@app/ui/author_mini_card';
import { Button } from '@app/ui/button';

import style from './search_author_card.module.scss'

interface SearchAuthorCardProps {
	avatar?: string
	name?: string
}

export const SearchAuthorCard = ({avatar, name}: SearchAuthorCardProps) => {
	const [sub, IsSub] = useState(false);

	const toggle = () => {
		IsSub(!sub);
	};

	return (
		<div className={style.root}>
			<AuthorMiniCard small row avatar={avatar} name={name} />
			{!sub ?
				<Button className={style.button} small secondary onClick={toggle}>Подписаться</Button>
				:
				<Button className={style.button} small outline onClick={toggle}>Отписаться</Button>
			}
		</div>
	)
}