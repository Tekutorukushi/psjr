import { ButtonAnimationOutline } from '@app/ui/button_animation';

import style from './profile_card.module.scss'

interface ProfileCardProps {
	name: string;
	onClick: void;
}

export const ProfileCard = ({ name, onClick }: ProfileCardProps) => {
	const abr = name.substring(0, 1)

	return (
		<div className={style.root}>
			<div className={style.avatar}>{abr}</div>
			<div className={style.info}>
				<div className={style.name}>{name}</div>
				<ButtonAnimationOutline onClick={onClick}>Настроить ленту</ButtonAnimationOutline>
			</div>
		</div>
	)
}