import { IconArrowLeft } from '@app/ui/icons/arrow_left';
import { Button } from '@app/ui/button';
import { ArticleInformers } from '@app/ui/acticle_informers';
import { ArticleButtonBar } from '@app/ui/article_button_bar';

import style from './article.module.scss'
import { OtherArticle } from '@app/ui/other_article';
import { Title, Type } from '@app/ui/title';

export const PageArticle = () => {
	const links = [
		{link: 'one', name: 'Оглавление 1'},
		{link: 'two', name: 'Оглавление 2'},
		{link: 'three', name: 'Оглавление 3'},
	];
	return (
		<div className={style.article}>
			<Button before={<IconArrowLeft />}>Назад</Button>
			<h1 className={style.title}>Илья Красильщик завидно рассказывает про Кению и Уганду</h1>
			<ArticleInformers date='вчера' time='2 часа' />
			<div className={style.container}>
				<ArticleButtonBar
					avatarAuthor={'/mock/author.jpg'}
					linkAuthor='/'
					onClickShare={undefined}
					onClickDownload={undefined}
				/>
				<div className={style.info}>
					<div className={style.links}>
						{links.map(({link, name}, i) => (
							<a href={`#${link}`} className={style.links_content} key={i}>{name}</a>
						))}
					</div>
					<div className={style.description}>
						«Какое счастье, что я в Уганде. Это все, что я могу сказать про 2020 год» — написал Илья Красильщик 31 декабря на своей странице в Facebook. Вместе с Петром Верзиловым и Иваном Боганцевым Илья провёл несколько недель в Африке и очень завидно об этом рассказывал в соцсетях.<br/><br/>
							С разрешения Ильи мы публикуем его пост у себя. Ничего не меняли, ничего не потёрли — даже лексика осталась нетронутой. Надеемся, что текст впечатлит вас так же, как и многих в Авиасейлс.
					</div>
					<OtherArticle />
					<div className={style.content}>
						<Title type={Type.h2} as='h2'>Про визу</Title>
						<p>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как</p>
						<Title type={Type.h3} as='h3'>Подзаголовок Про визу</Title>
						<p>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как</p>
						<ul>
							<li>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно</li>
							<li>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно</li>
						</ul>
						<ol>
							<li>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно</li>
							<li>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно</li>
						</ol>
						<Title type={Type.h2} as='h2'>Про визу</Title>
						<p>Приятно, граждане, наблюдать, как активно развивающиеся страны третьего мира, инициированные исключительно синтетически, описаны максимально подробно. Приятно, граждане, наблюдать, как  Приятно, граждане, наблюдать, как</p>
						<img src={'/mock/art.jpg'} alt=''/>
						<Title type={Type.h2} as='h2'>Про визу</Title>
						<Title type={Type.h3} as='h3'>Подзаголовок Про визу</Title>
					</div>
				</div>
			</div>
		</div>
	)
}