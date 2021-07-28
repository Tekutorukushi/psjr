// @ts-ignore
import clsx from 'clsx';

import style from './author_mini_card.module.scss'

interface AuthorMiniCardProps {
	small?: boolean
	row?: boolean
	avatar?: string
	name?: string
}

export const AuthorMiniCard = ({small, row, avatar, name}: AuthorMiniCardProps) => {
	return (
		<div className={clsx(style.root, small ? style.small : '', row ? style.row : '')} >
			<div className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
			<div className={style.name}>{name.split(' ').map((item) => <span>{ item }</span>)}</div>
		</div>
	)
}