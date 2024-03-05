import type { Metadata } from 'next';

import YandexMetrica from '@/components/YandexMetrica/YandexMetrica';
import { GoogleAnalytics } from '@next/third-parties/google';
import 'dotenv/config';
import './globals.scss';

export const metadata: Metadata = {
	title: 'Code Wizards',
	description:
		'Мы не просто создаем сайты. Мы строим цифровые пространства, где каждая строчка кода - это мелодия успеха вашего бизнеса',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isProduction = process.env.PROD === 'true';
	console.log('test')
	console.log(isProduction)
	console.log(typeof isProduction)

	return (
		<html lang="ru" style={{ scrollBehavior: 'smooth' }}>
			<link rel="icon" href="/favicon.ico" sizes="any" />
			<body className="body">
				{process.env.PROD === 'true' && <YandexMetrica />}
				{isProduction? <GoogleAnalytics gaId="GTM-NMKTG44L" /> : <p style={{fontSize: '50px'}}>SQL</p>}
				{children}
			</body>
		</html>
	);
}

