import { ButtonBack } from '@app/ui/button_back';
import { ArticlePreviewCard } from '@app/ui/article_preview_card';

import style from './author.module.scss'
import { AuthorSubCard } from '@app/ui/author_sub_card';
import { Subs } from '@app/ui/subs';

export const PageAuthor = () => {
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
		<div className={style.root}>
			<div className={style.header}>
				<ButtonBack>Назад</ButtonBack>
				<AuthorSubCard avatar='/mock/author.jpg' name='Артемий Лебедев' />
			</div>
			<div className={style.content}>
				<ArticlePreviewCard
					secondary
					author
					avatarAuthor={'/mock/author.jpg'}
					linkAuthor='/'
					onClickShare={undefined}
					onClickDownload={undefined}
					title='Таиланд открылся для туристов'
					date='Вчера'
					time='5 минут'
					content='Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как кто то где то, что то строчит.'
					linkArticle='/'
				/>
				<Subs title='У них тоже интересно:' authors={authors} />
			</div>
		</div>
	)
}