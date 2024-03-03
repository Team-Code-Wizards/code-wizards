'use client';

import { Suspense } from 'react';

import { useSearchParams } from 'next/navigation';

import { promoState } from '@/constants/MainPromo/index';

import AdvertisingPromo from '../AdvertisingPromo';
import Promo from '../Promo';

const PromoWrapper = () => {
	const urlParams = useSearchParams();
	const utmCampaign: string = urlParams.get('utm_campaign') || 'default';

	return promoState[utmCampaign] ? (
		<AdvertisingPromo promoConfig={promoState[utmCampaign]} />
	) : (
		<Promo />
	);
};

export default function MainPromo() {
	return (
		<Suspense>
			<PromoWrapper />
		</Suspense>
	);
}
