import Image from 'next/image';

import circle from '../../../../public/images/recommendations/circle.svg';
import IRecommendationPreview from './interface';
import styles from './style.module.scss';

export default function RecommendationPreview({
	title,
	info,
	image,
	isActive,
}: IRecommendationPreview) {
	return isActive ? (
		<div className={styles['main-card-container']}>
			<div className={styles['card-container']}>
				<Image
					src={image}
					alt="video-preview"
					className={styles[`card-image`]}
				/>
			</div>
			<div className={styles['card__details']}>
				<Image
					className={styles['card__details_circle']}
					src={circle}
					alt="circle"
				/>
				<div className={styles['card__details__container']}>
					<h3 className={styles['card__details_title']}>{title}</h3>
					<h4 className={styles['card__details_information']}>{info}</h4>
				</div>
			</div>
		</div>
	) : (
		<div className={styles['card-container']}>
			<Image src={image} alt="video-preview" className={styles[`card-image`]} />
		</div>
	);
}
