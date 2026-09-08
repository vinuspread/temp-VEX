import { createClient } from '@/lib/supabase/server';
import type { Faq, PricingPackage, Template } from '@/types/template';
import publicSnapshot from './public-snapshot.json';

export type RenewalTemplate = Pick<Template, 'slug' | 'name' | 'description' | 'categories' | 'thumbnail_url' | 'hashtags'>;
export type RenewalFaq = Pick<Faq, 'id' | 'question' | 'answer'>;
export interface RenewalData {
  templates: RenewalTemplate[];
  packages: PricingPackage[];
  faqs: RenewalFaq[];
  unavailable: boolean;
}

export async function getRenewalData(lang: 'ko' | 'en'): Promise<RenewalData> {
  // Public ohmt.site content captured 2026-09-07. Local preview only;
  // configured deployments always use their published database records.
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return publicSnapshot[lang] as RenewalData;
  }
  try {
    const db = await createClient();
    const [templates, packages, faqs] = await Promise.all([
      db.from('templates').select('slug,name,description,categories,thumbnail_url,hashtags').eq('status', 'published').eq('lang', lang).order('sort_order', { ascending: true }).abortSignal(AbortSignal.timeout(12000)),
      db.from('pricing_packages').select('*').eq('lang', lang).eq('is_active', true).order('sort_order', { ascending: true }).abortSignal(AbortSignal.timeout(12000)),
      db.from('faqs').select('id,question,answer').eq('lang', lang).eq('is_active', true).order('sort_order', { ascending: true }).abortSignal(AbortSignal.timeout(12000)),
    ]);
    return { templates: templates.data ?? [], packages: packages.data ?? [], faqs: faqs.data ?? [], unavailable: Boolean(templates.error || packages.error || faqs.error) };
  } catch {
    return { templates: [], packages: [], faqs: [], unavailable: true };
  }
}
