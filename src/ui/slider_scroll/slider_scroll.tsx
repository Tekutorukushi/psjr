import React, { useRef, ReactNode } from "react";
import clsx from 'clsx';
import { Swiper } from 'swiper/react';
import SwiperCore, { Scrollbar, Navigation } from 'swiper/core';
import { Title, Type } from '@app/ui/title';
import { IconArrowLeft, IconArrowRight } from '@app/ui/icons';

import { useWindowSize } from '@app/lib/WindowSize';
import style from './slider_scroll.module.scss';

SwiperCore.use([Scrollbar, Navigation]);

interface SliderScrollProps {
	title?: string;
	children?: React.ReactNode;
}

export const SliderScroll = ({title, children}: SliderScrollProps) => {
	const swiperRef = useRef(null);
	const { width } = useWindowSize();

	return (
		<div className={style.root}>
			{title && <Title type={Type.h2} as='h2'>{title}</Title>}
			<Swiper
				navigation={{
					nextEl: '.swiper_arrow_next',
					prevEl: '.swiper_arrow_prev',
					disabledClass: `${style.swiper_button_disabled}`
				}}
				scrollbar={{
					el: '.swiper-scrollbar',
					draggable: true
				}}
				ref={swiperRef}
				slidesPerView={'auto'}
				spaceBetween={16}
				className={style.swiper_container}
			>
				{children}
			</Swiper>
			<div className={style.swiper_navigation}>
				<div className={style.swiper_arrows}>
					<IconArrowLeft className={clsx(`swiper_arrow_prev`, style.swiper_arrow, style.swiper_arrow_prev)}
								   onClick={() => swiperRef.current.swiper.slidePrev()} />
					<IconArrowRight className={clsx(`swiper_arrow_next`, style.swiper_arrow, style.swiper_arrow_next)}
									onClick={() => swiperRef.current.swiper.slideNext()} />
				</div>
				<div className='swiper-scrollbar' />
			</div>
		</div>
	)
}