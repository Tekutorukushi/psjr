import { IconArrowArt } from '@app/ui/icons';

import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/navigation/navigation.min.css"
import style from './other_article.module.scss'

// @ts-ignore
import SwiperCore, { Scrollbar, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

interface OtherArticleProps {
	avatar?: string;
	title?: string;
	time?: string;
}

export const OtherArticle = ({ avatar, title, time }: OtherArticleProps) => {
	return (
		<div className={style.article}>
			<IconArrowArt className={style.arrow} />
			<span className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
			<span className={style.title}>{title}</span>
			<span className={style.time}>Читать {time}</span>
		</div>
	)
}