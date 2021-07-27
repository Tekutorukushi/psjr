import { useRef } from "react";
import Link from 'next/link'
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

interface OtherArticleProps {
	article?: array;
}

export const OtherArticle = ({ article }: OtherArticleProps) => {
	const swiperRef = useRef(null);

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
							<Link href={link}>
								<div className={style.article}>
									<IconArrowArt className={style.arrow} />
									<span className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
									<span className={style.title}>{title}</span>
									<span className={style.time}>Читать {time}</span>
								</div>
							</Link>
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