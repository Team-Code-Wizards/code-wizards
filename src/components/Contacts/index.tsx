'use client';

import { FormEvent } from 'react';

import ArrowIcon from '../../../public/images/icons/ArrowIcon';
import TelegramIcon from '../../../public/images/icons/TelegramIcon';
import ViberIcon from '../../../public/images/icons/ViberIcon';
import WhatsappIcon from '../../../public/images/icons/WhatsappIcon';
import ContactsForm from './ContactsForm';
import styles from './style.module.scss';

//TODO добавить корректные ссылки для мессенджеров

export default function Contacts() {
	const sendingDataForFeedback = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<section id="contacts" className={styles['contacts']}>
			<h2 className={styles['contacts__title']}>Контакты</h2>
			<div className={styles['contacts__body']}>
				<ul className={styles['link-group']}>
					<li className={styles['link-box']}>
						<a className={styles['link']} href="mailto:email@code-wizards.team">
							<p className={styles['link__item_word-space']}>
								e-mail email@code-wizards.team
							</p>
							<span className={styles['link__item']}>
								<ArrowIcon />
							</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link']} href="tel:+7(950)424-13-38">
							<p className={styles['link__item_tel']}>
								<span>Телефон</span>
								<span>+7 (950) 424-13-38</span>
							</p>
							<span className={styles['link__item']}>
								<ArrowIcon />
							</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<ViberIcon />
							</span>
							<span className={styles['link__item_no-margin']}>viber</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<TelegramIcon size={[26, 25]} />
							</span>
							<span className={styles['link__item_no-margin']}>telegram</span>
						</a>
					</li>
					<li className={styles['link-box']}>
						<a className={styles['link_messenger']} href="#">
							<span className={styles['link__item']}>
								<WhatsappIcon size={[25, 24]} />
							</span>
							<span className={styles['link__item_no-margin']}>whatsapp</span>
						</a>
					</li>
				</ul>
				<ContactsForm onSubmit={sendingDataForFeedback} />
			</div>
		</section>
	);
}
