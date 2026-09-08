import type { Metadata } from 'next';
import Renewal from '@/components/renewal/Renewal';
import { getRenewalData } from '@/components/renewal/data';

export const metadata: Metadata = {
  title: 'See your website before you start',
  description: 'Start with a template you love. We tailor it to your brand and build it for launch.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default async function Page() { return <Renewal lang="en" data={await getRenewalData('en')} />; }
