'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowUpRight, Plus, Search } from 'lucide-react';
import type { RenewalData, RenewalTemplate } from './data';
import s from './renewal.module.css';
import pagePreviews from './preview-slugs.json';



function TemplateCard({ item, lang, priority }: { item: RenewalTemplate; lang: 'ko' | 'en'; priority: boolean }) {
  const [failed, setFailed] = useState(false);
  const preview = pagePreviews[lang].includes(item.slug) ? `/renewal/${lang}-${item.slug}-1440-preview.jpg` : item.thumbnail_url;
  return <article className={s.project}>
    <Link href={`/${lang}/templates/${item.slug}`} className={s.projectLink}>
      <div className={s.projectInfo}><div><h2>{item.name}</h2><p>{item.categories?.slice(0, 2).join(' / ')}</p></div><span className={s.projectNumber}>{item.slug.match(/OHMT(\d+)/)?.[1]}<ArrowUpRight size={14} /></span></div>
      <div className={s.projectImage}>
        {!failed && preview ? <Image src={preview} alt={`${item.name} ${lang === 'ko' ? '템플릿 미리보기' : 'template preview'}`} width={1440} height={2700} sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 25vw" unoptimized priority={priority} onError={() => setFailed(true)} /> : <div className={s.imageFallback}><span>{item.name}</span><span>{lang === 'ko' ? '템플릿 직접 보기' : 'Open template'}<ArrowUpRight size={16} /></span></div>}
      </div>
    </Link>
  </article>;
}

export default function Renewal({ lang, data }: { lang: 'ko' | 'en'; data: RenewalData }) {
  const ko = lang === 'ko';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [featuredSlug, setFeaturedSlug] = useState('');
  const categories = useMemo(() => Array.from(new Set(data.templates.flatMap(item => item.categories ?? []))).sort((a,b) => a.localeCompare(b, lang)), [data.templates, lang]);
  const visible = useMemo(() => data.templates.filter(item => {
    const text = [item.name, item.description, ...(item.categories ?? []), ...(item.hashtags ?? [])].join(' ').toLowerCase();
    return (!category || item.categories?.includes(category)) && text.includes(query.trim().toLowerCase());
  }), [data.templates, category, query]);
  const contact = `/${lang}/contact`;
  const featuredItems = (ko ? ['OHMT004-furniture','OHMT007-portfolio','OHMT012-magazine'] : ['OHMT035-atelier-house','OHMT006-studio','OHMT002-jewelry']).flatMap(slug => data.templates.filter(item => item.slug === slug));
  const featured = featuredItems.find(item => item.slug === featuredSlug) ?? featuredItems[0];

  return <main className={s.page} id="main-content">
    <a className={s.skip} href="#templates">{ko ? '템플릿 목록 바로가기' : 'Skip to templates'}</a>
    <header className={s.header}>
      <Link href={`/${lang}/renewal`} className={s.logo} aria-label="Oh My Template"><Image src="/logo_dark.svg" width={156} height={43} alt="Oh My Template" priority /></Link>
      <div className={s.intro}><p>{ko ? <>웹사이트 디자인 & 제작<br />Oh! My Template</> : <>Website design & production<br />Oh! My Template</>}</p></div>
      <nav aria-label={ko ? '주요 메뉴' : 'Main navigation'}><a href="#templates">{ko ? '템플릿' : 'Templates'}</a><a href="#information">{ko ? '제작 안내' : 'Information'}</a><a href="#pricing">{ko ? '가격' : 'Pricing'}</a><a href="#faq">FAQ</a></nav>
      <div className={s.headerContact}><Link href={contact}>{ko ? '제작 상담' : 'Start a project'}<ArrowUpRight size={14} /></Link><Link href={`/${ko ? 'en' : 'ko'}/renewal`} hrefLang={ko ? 'en' : 'ko'}>{ko ? 'English' : '한국어'}</Link></div>
    </header>

    <section className={s.feature} aria-labelledby="feature-title">
      <div className={s.featureCopy}>
        <h1 id="feature-title">{ko ? <>완성될 홈페이지를<br />먼저 보고 시작하세요.</> : <>See your website.<br />Then make it yours.</>}</h1>
        <p>{ko ? <>디자인은 직접 둘러보고,<br />제작은 브랜드에 맞춰 맡기세요.</> : <>Explore a working design.<br />We tailor it to your brand.</>}</p>
        <a href="#templates" className={s.featureCta}>{ko ? '내 브랜드에 맞는 디자인 찾기' : 'Find a design for your brand'}<ArrowUpRight size={16} /></a>
      </div>
      {featured && <div className={s.featureWork}>
        <div className={s.previewChoices} role="group" aria-label={ko ? '미리 볼 템플릿 선택' : 'Choose a template preview'}>{featuredItems.map(item => <button key={item.slug} type="button" aria-pressed={featured.slug === item.slug} onClick={() => setFeaturedSlug(item.slug)}>{item.name}</button>)}</div>
        <div className={s.featureFrame}>
          <Link href={`/${lang}/templates/${featured.slug}`} className={s.featurePreview} aria-label={`${featured.name} ${ko ? '템플릿 직접 보기' : 'view template'}`}>
            <Image key={featured.slug} src={`/renewal/${lang}-${featured.slug}-1440x900.jpg`} alt={`${featured.name} ${ko ? '실제 홈페이지 화면' : 'website preview'}`} width={1440} height={900} priority unoptimized />
            <span className={s.previewAction}>{ko ? '실제 사이트 둘러보기' : 'Explore the live template'}<ArrowUpRight size={16} /></span>
          </Link>
        </div>
      </div>}
    </section>

    <section className={s.collection} id="templates" aria-label={ko ? '템플릿 컬렉션' : 'Template collection'}>
      <div className={s.tools}><div className={s.collectionLabel}>{ko ? '템플릿 컬렉션' : 'Template collection'}<span aria-live="polite">({visible.length})</span></div><label className={s.category}><span>{ko ? '분류' : 'Category'}</span><select value={category} onChange={e => setCategory(e.target.value)}><option value="">{ko ? '전체 업종' : 'All categories'}</option>{categories.map(item => <option key={item} value={item}>{item}</option>)}</select></label><label className={s.search}><Search size={14} /><span className={s.srOnly}>{ko ? '템플릿 검색' : 'Search templates'}</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={ko ? '템플릿 검색' : 'Search templates'} /></label></div>
      {data.unavailable && <p className={s.dataNotice}>{ko ? '일부 정보를 불러오지 못했습니다. 다시 방문하거나 제작 상담에서 확인해 주세요.' : 'Some information could not be loaded. Please revisit or contact us.'}</p>}
      {visible.length ? <div className={s.grid}>{visible.map((item, index) => <TemplateCard key={item.slug} item={item} lang={lang} priority={index < 4} />)}</div> : <div className={s.empty}><p>{query || category ? (ko ? '조건에 맞는 템플릿이 없습니다.' : 'No templates match your search.') : (ko ? '표시할 템플릿이 없습니다.' : 'No templates are available.')}</p>{(query || category) && <button onClick={() => { setQuery(''); setCategory(''); }}>{ko ? '검색과 분류 초기화' : 'Clear search and filters'}</button>}</div>}
    </section>

    <section className={s.information} id="information"><h2>{ko ? '제작 안내' : 'Information'}</h2><div className={s.serviceIntro}><p>{ko ? '원하는 템플릿을 고르면 브랜드와 콘텐츠에 맞춰 웹사이트를 제작합니다.' : 'Choose a template. We build it around your brand and content.'}</p><Link href={contact}>{ko ? '제작 상담' : 'Start a project'}<ArrowUpRight size={14} /></Link></div><div className={s.process}>{(ko ? [ ['템플릿 선택', '실제 페이지를 살펴보고 디자인과 필요한 구성을 정합니다.'], ['맞춤 제작', '브랜드, 콘텐츠와 필요한 기능을 반영합니다.'], ['검수와 오픈', '반응형 화면과 기본 SEO를 점검하고 출시를 준비합니다.'] ] : [ ['Choose a template', 'Explore the pages and decide on the design and structure.'], ['Custom production', 'We apply your brand, content, and required features.'], ['Review and launch', 'We check responsive layouts and basic SEO before launch.'] ]).map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>

    <section className={s.pricing} id="pricing"><h2>{ko ? '제작 비용' : 'Pricing'}</h2><div className={s.priceList}>{data.packages.map(item => <details key={item.id} className={s.package}><summary><span className={s.packageName}><strong>{item.name}</strong><span>{item.description}</span></span><span className={s.price}><span>{item.price}</span><span>{item.duration}</span></span><span className={s.packageToggle}><span>{ko ? '포함 항목' : 'What’s included'}</span><Plus size={16} /></span></summary><div className={s.packageBody}><ul>{item.features.map(feature => <li key={feature}>{feature}</li>)}</ul><Link href={contact}>{ko ? '제작 상담' : 'Start a project'}<ArrowUpRight size={14} /></Link></div></details>)}{!data.packages.length && <p className={s.muted}>{ko ? '제작 범위와 비용은 상담에서 확인해 주세요.' : 'Please contact us for scope and pricing.'}</p>}</div></section>
    <section className={s.faq} id="faq"><h2>{ko ? '자주 묻는 질문' : 'Frequently asked questions'}</h2><div>{data.faqs.map(item => <details key={item.id}><summary>{item.question}<Plus size={16} /></summary><p>{item.answer}</p></details>)}{!data.faqs.length && <Link href={contact}>{ko ? '궁금한 점 문의하기' : 'Ask a question'}<ArrowUpRight size={14} /></Link>}</div></section>
    <footer className={s.footer}><span>© {new Date().getFullYear()} Oh My Template</span><Link href={`/${lang}/privacy-policy`}>{ko ? '개인정보처리방침' : 'Privacy policy'}</Link><Link href={contact}>{ko ? '제작 상담' : 'Start a project'}<ArrowUpRight size={14} /></Link><a href="#main-content">{ko ? '맨 위로' : 'Back to top'}</a></footer>
  </main>;
}
