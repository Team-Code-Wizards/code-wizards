'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { data } from '@/constants/Interaction/index';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Step from './Step/index';
import styles from './styles.module.scss';

const Interaction = (): React.ReactElement => {
	const [width, setWidth] = useState(1440);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	const pagination = {
		el: '#steps-pagination',
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class='${className} ${styles['steps__pagination-bullet']}'></span>`;
		},
	};

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<>
			<section ref={ref} className={styles['interaction']}>
				<div className={styles['interaction__wrapper']}>
					<h2 className={styles['interaction__title']}>
						Как мы превращаем взаимодействие с нами в настоящее удовольствие:
					</h2>
					<p className={styles['interaction__description']}>
						Мы считаем, что создание веб-сайтов - это не просто процесс
						разработки, а создание позитивного пользовательского опыта с самого
						начала до самого конца.
					</p>
					<Swiper
						pagination={pagination}
						rewind
						modules={[Pagination]}
						className={styles['steps']}
						spaceBetween={20}
						breakpoints={{
							501: {
								slidesPerView: 2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{data.map((item) =>
							width < 836 ? (
								<SwiperSlide className={styles['steps__card']} key={item.title}>
									<Step key={item.id} item={item} inView={inView} />
								</SwiperSlide>
							) : (
								<Step key={item.id} item={item} inView={inView} />
							)
						)}
						<div
							id="steps-pagination"
							className={styles['steps__pagination']}
						/>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Interaction;
