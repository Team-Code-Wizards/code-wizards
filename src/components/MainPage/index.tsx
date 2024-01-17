import AboutUs from '@/components/AboutUs';

import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<AboutUs />
		</main>
	);
}
