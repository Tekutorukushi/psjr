import { ButtonBack } from '@app/ui/button_back';
import { ArticlePreviewCard } from '@app/ui/article_preview_card';

import style from './country.module.scss'

export const PageCountry = () => {
	return (
		<div className={style.root}>
			<ButtonBack>Назад</ButtonBack>
			<div className={style.title}>Таиланд</div>
			<div className={style.content}>
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
			</div>
		</div>
	)
}