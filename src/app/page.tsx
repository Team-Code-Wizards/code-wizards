import AboutUs from '@/components/about-us/page';

import styles from './style.module.scss';

console.log();
export default function Home() {
	return (
		<main className={styles['main']}>
			<AboutUs />
		</main>
	);
}
