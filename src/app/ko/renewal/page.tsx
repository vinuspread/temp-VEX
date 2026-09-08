import type { Metadata } from 'next';
import Renewal from '@/components/renewal/Renewal';
import { getRenewalData } from '@/components/renewal/data';

export const metadata: Metadata = {
  title: '홈페이지 제작, 완성될 모습을 먼저 보세요',
  description: '마음에 드는 템플릿에서 시작해 브랜드에 맞는 웹사이트로 완성합니다.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default async function Page() { return <Renewal lang="ko" data={await getRenewalData('ko')} />; }
