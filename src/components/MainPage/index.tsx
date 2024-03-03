import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import MainPromo from '../MainPromo/MainPromo';
import Navbar from '../Navbar';
import Popup from '../Popup';
import Portfolio from '../Portfolio';
import Recommendations from '../Recommendations';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
import Choice from '../Сhoice';
import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<MainPromo />
			<ComponentsContainer>
				<AboutUs />
				<Services />
				<Portfolio />
			</ComponentsContainer>
			<StageCreate />
			<Recommendations />
			<Choice />
			<Guarantee />
			<Interaction />
			<TechStack />
			<ComponentsContainer>
				<Faq />
				<Contacts />
				<Footer />
			</ComponentsContainer>
			<Popup />
			<Navbar />
		</main>
	);
}
