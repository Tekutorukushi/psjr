import { Title, Type } from '@app/ui/title';
import { IconArrowArt } from '@app/ui/icons';

import style from './other_article.module.scss'

export const OtherArticle = () => {
	const article = [
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка', time: '5 минут'},
	]
	return (
		<div className={style.root}>
			<Title type={Type.h2} as='h2'>Тоже крутые статьи</Title>
			<div className={style.container}>
				{article.map(({link, avatar, title, time}, i) => (
					<a href={link} className={style.article} key={i}>
						<IconArrowArt className={style.arrow} />
						<span className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
						<span className={style.title}>{title}</span>
						<span className={style.time}>Читать {time}</span>
					</a>
				))}
			</div>
		</div>
	)
}