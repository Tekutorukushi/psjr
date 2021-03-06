import { ButtonBack } from '@app/ui/button_back';
import { useEvent } from 'effector-react/ssr';
import { SwiperSlide } from "swiper/react";
import { ButtonAnimationAuthor } from '@app/ui/button_animation';
import { SliderScroll } from '@app/ui/slider_scroll';
import { AuthorSlideCard } from '@app/ui/author_slide_card';
import { Title, Type } from '@app/ui/title';
import { Checkbox } from '@app/ui/checkbox';

import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/navigation/navigation.min.css"
import style from './authors.module.scss'
import { openSearch } from '@app/ui/search';

export const PageAuthors = () => {
	const authors = [
		{avatar: '/mock/author.jpg', name: 'Cody Fisher', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Floyd Miles', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Wade Warren', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Theresa Webb', onClick: undefined},
		{avatar: '/mock/author.jpg', name: 'Dianne Russell', onClick: undefined},
	]

	const handleClick = useEvent(openSearch);

	return (
		<div className={style.root}>
			<ButtonBack>Назад</ButtonBack>
			<div className={style.content}>
				<div className={style.slider}>
					<SliderScroll title='Авторы:'>
						{authors.slice(0, 8).map((item, i) => (
							<SwiperSlide key={i}>
								<AuthorSlideCard {...item} />
							</SwiperSlide>
						))}
						<SwiperSlide>
							<AuthorSlideCard all />
						</SwiperSlide>
					</SliderScroll>
					<ButtonAnimationAuthor onClick={handleClick} />
				</div>
				<div className={style.format}>
					<Title type={Type.h2} as='h2'>Форматы:</Title>
					<div className={style['format-content']}>
						<Checkbox checked>Все</Checkbox>
						<Checkbox>Статьи</Checkbox>
						<Checkbox>Подкасты</Checkbox>
						<Checkbox>Фотографии</Checkbox>
						<Checkbox>Видео</Checkbox>
					</div>
				</div>
			</div>
		</div>
	)
}