import Contacts from '../Contacts';
import Interaction from '../Interaction/index';
import Portfolio from '../Portfolio';
import Choice from '../Сhoice/index';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* Подключаем свои компоненты тут */}
			<Portfolio />
			<Choice />
			<Interaction />
			<Contacts />
		</main>
	);
}
