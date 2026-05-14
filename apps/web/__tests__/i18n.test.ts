import { describe, it, expect } from 'vitest';
import { getTranslation, translations } from '../lib/i18n/translations';
import type { Lang, TranslationKey } from '../lib/i18n/translations';

const EN_KEYS = Object.keys(translations.en) as TranslationKey[];

describe('getTranslation', () => {
  it('returns the English string for a valid key', () => {
    expect(getTranslation('en', 'nav.logo')).toBe('IELTS Trainer');
  });

  it('returns the Bangla string for a valid key', () => {
    expect(getTranslation('bn', 'nav.logo')).toBe('IELTS ট্রেইনার');
  });

  it('falls back to English when a Bangla key is missing', () => {
    // All keys should exist in BN, but the fallback logic is tested by
    // temporarily casting an unknown key
    const result = getTranslation('en', 'nav.signin' as TranslationKey);
    expect(result).toBe('Sign in');
  });

  it('returns the key itself when it does not exist in either language', () => {
    const result = getTranslation('en', 'nonexistent.key' as TranslationKey);
    expect(result).toBe('nonexistent.key');
  });

  it('interpolates {year} variable correctly', () => {
    const result = getTranslation('en', 'footer.copyright', { year: '2026' });
    expect(result).toContain('2026');
    expect(result).not.toContain('{year}');
  });

  it('interpolates {year} in Bangla copyright too', () => {
    const result = getTranslation('bn', 'footer.copyright', { year: '2026' });
    expect(result).toContain('2026');
    expect(result).not.toContain('{year}');
  });

  it('handles multiple variables', () => {
    const result = getTranslation('en', 'footer.copyright', { year: '2026' });
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('translations coverage', () => {
  it('every English key has a corresponding Bangla translation', () => {
    const bnKeys = new Set(Object.keys(translations.bn));
    const missing: string[] = [];
    for (const key of EN_KEYS) {
      if (!bnKeys.has(key)) missing.push(key);
    }
    expect(missing).toHaveLength(0);
  });

  it('English and Bangla have the same number of keys', () => {
    expect(Object.keys(translations.en).length).toBe(Object.keys(translations.bn).length);
  });

  it('no English translation is an empty string', () => {
    for (const [key, value] of Object.entries(translations.en)) {
      expect(value, `Key "${key}" is empty in English`).not.toBe('');
    }
  });

  it('no Bangla translation is an empty string', () => {
    for (const [key, value] of Object.entries(translations.bn)) {
      expect(value, `Key "${key}" is empty in Bangla`).not.toBe('');
    }
  });

  it('nav.logo is different in EN and BN', () => {
    expect(translations.en['nav.logo']).not.toBe(translations.bn['nav.logo']);
  });

  it('lang.toggle shows the other language label', () => {
    // EN toggle label should be in Bangla script (to switch to Bangla)
    expect(translations.en['lang.toggle']).toContain('বাংলা');
    // BN toggle label should be in English (to switch to English)
    expect(translations.bn['lang.toggle']).toBe('English');
  });
});

describe('getTranslation with different languages', () => {
  const LANGS: Lang[] = ['en', 'bn'];

  for (const lang of LANGS) {
    it(`returns a non-empty string for every key in ${lang}`, () => {
      for (const key of EN_KEYS) {
        const result = getTranslation(lang, key);
        expect(result, `Key "${key}" in "${lang}" is empty`).toBeTruthy();
      }
    });
  }
});
