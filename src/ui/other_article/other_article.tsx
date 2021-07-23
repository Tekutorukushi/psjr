// @ts-ignore
import { useRef } from "react";
// @ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";
import { Title, Type } from '@app/ui/title';
import { IconArrowArt, IconArrowLeft, IconArrowRight } from '@app/ui/icons';

import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import "swiper/components/navigation/navigation.min.css"
import style from './other_article.module.scss'

// @ts-ignore
import SwiperCore, { Scrollbar, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);

export const OtherArticle = () => {
	const swiperRef = useRef(null);

	const article = [
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Таиланд открылся для туристов', time: '5 минут'},
		{link: '#/', avatar: '/mock/author.jpg', title: 'Уганда: дикие животные, ведьмы и море самогона | Настоящая Африка', time: '5 минут'},
	]
	return (
		<div className={style.root}>
			<Title type={Type.h2} as='h2'>Тоже крутые статьи</Title>
			<div className={style.slider}>
				<Swiper
					navigation={{
						nextEl: '.swiper-arrow_next',
						prevEl: '.swiper-arrow_prev',
					}}
					scrollbar={{el: '.swiper-scrollbar'}}
					ref={swiperRef}
					slidesPerView={'auto'}
					spaceBetween={16}
					className="mySwiper"
				>
					{article.map(({link, avatar, title, time}, i) => (
						<SwiperSlide key={i}>
							<a href={link} className={style.article}>
								<IconArrowArt className={style.arrow} />
								<span className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
								<span className={style.title}>{title}</span>
								<span className={style.time}>Читать {time}</span>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="swiper-navigation">
					<div className='swiper-arrows'>
						<IconArrowLeft className='swiper-arrow swiper-arrow_prev' onClick={() => swiperRef.current.swiper.slidePrev()} />
						<IconArrowRight className='swiper-arrow swiper-arrow_next' onClick={() => swiperRef.current.swiper.slideNext()} />
					</div>
					<div className="swiper-scrollbar" />
				</div>
			</div>
		</div>
	)
}