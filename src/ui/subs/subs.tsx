import { AuthorMiniCard } from '@app/ui/author_mini_card';
import style from './subs.module.scss';

export const Subs = () => {
	const authors = [
		{avatar: '/mock/author.jpg', name: 'Darlene Robertson', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Jerome Bell', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Kathryn Murphy', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Marvin McKinney', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Theresa Webb', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Wade Warren', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Jerome Bell', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Jerome Bell', onClick: undefined},
	]

	return (
		<div className={style.subs}>
			<div className={style.title}>Вы подписаны:</div>
			<div className={style.content_author}>
				{authors.slice(0, 6).map((item, i) => (
					<AuthorMiniCard key={i} {...item} />
				))}
			</div>
			Ещё 15
		</div>
	)
}