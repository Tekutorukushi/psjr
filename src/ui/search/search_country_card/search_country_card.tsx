import style from './search_country_card.module.scss';

interface SearchCountryCardProps {
	icon?: string;
	name?: string;
}

export const SearchCountryCard = ({icon, name}: SearchCountryCardProps) => {
	return (
		<div className={style.root}>
			<div className={style.icon} style={{ backgroundImage: `url(${icon})` }} />
			<div className={style.name}>{name}</div>
		</div>
	)
}