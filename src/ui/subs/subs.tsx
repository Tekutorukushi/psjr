import { AuthorMiniCard } from '@app/ui/author_mini_card';
import style from './subs.module.scss';

interface SubsProps {
	title: string;
	authors: array;
}

export const Subs = ({title, authors}: SubsProps) => {
	return (
		<div className={style.subs}>
			<div className={style.title}>{title}</div>
			<div className={style.content_author}>
				{authors.slice(0, 6).map((item, i) => (
					<AuthorMiniCard key={i} {...item} />
				))}
			</div>
			Ещё 15
		</div>
	)
}