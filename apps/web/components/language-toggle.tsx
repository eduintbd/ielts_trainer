'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
      aria-label={lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
      className="font-medium"
      data-testid="language-toggle"
    >
      {t('lang.toggle')}
    </Button>
  );
}
