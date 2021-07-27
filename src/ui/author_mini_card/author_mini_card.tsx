// @ts-ignore
import clsx from 'clsx';

import style from './author_mini_card.module.scss'

interface AuthorMiniCardProps {
	small?: boolean
	avatar: string
	name: string
}

export const AuthorMiniCard = ({small, avatar, name}: AuthorMiniCardProps) => {
	return (
		<div className={clsx(style.root, small ? style.root_small : '')} >
			<div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
			<div className={style.name}>{name}</div>
		</div>
	)
}