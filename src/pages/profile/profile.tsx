import clsx from 'clsx';
import { ProfileCard } from '@app/ui/profile_card';
import { Subs } from '@app/ui/subs';
import { ArticlePreviewCard } from '@app/ui/article_preview_card';
import { AuthorPreviewCard } from '@app/ui/author_preview_card';
import { Button } from '@app/ui/button';

import style from './profile.module.scss'

export const PageProfile = () => {
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
			<ProfileCard name='Юрий Лоза' onClick={undefined} />
			<Subs title='Вы подписаны:' authors={authors} />
			<div className={style.content}>
				<div className={style.content_button}>
					<Button className={clsx(style.button, style.is_active)}>Понравилось</Button>
					<Button className={clsx(style.button)}>Скаченные</Button>
				</div>
				<div className={style.content_articles}>
					<ArticlePreviewCard
						secondary
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
					<ArticlePreviewCard
						secondary
						avatarAuthor={'/mock/author.jpg'}
						linkAuthor='/'
						onClickShare={undefined}
						onClickDownload={undefined}
						title='Как я поехал нахуй'
						type='Подкаст'
						date='Вчера'
						time='5 минут'
						listen='https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3'
					/>
					<AuthorPreviewCard secondary />
					<ArticlePreviewCard
						secondary
						avatarAuthor={'/mock/author.jpg'}
						linkAuthor='/'
						onClickShare={undefined}
						onClickDownload={undefined}
						title='Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка'
						date='Вчера'
						content={<><img src='/mock/uganda.jpg' alt=''/></>}
						linkArticle='/page'
					/>
				</div>
			</div>
		</div>
	)
}