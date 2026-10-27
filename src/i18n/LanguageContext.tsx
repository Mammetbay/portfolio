'use client';

import React, { createContext, useContext, useEffect, useCallback, useSyncExternalStore } from 'react';
import { type Locale, type TranslationDictionary, SUPPORTED_LOCALES } from './types';
import { tk } from './locales/tk';
import { en } from './locales/en';
import { ru } from './locales/ru';
import { tr } from './locales/tr';

const STORAGE_KEY = 'mammetbay_locale';

const DICTIONARIES: Record<Locale, TranslationDictionary> = {
  tk,
  en,
  ru,
  tr,
};

function isSupportedLocale(val: string | null | undefined): val is Locale {
  return val === 'tk' || val === 'en' || val === 'ru' || val === 'tr';
}

function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return 'tk';

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isSupportedLocale(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors in strict privacy contexts
  }

  const candidates: string[] = [];
  if (typeof navigator !== 'undefined') {
    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
      candidates.push(...navigator.languages);
    }
    if (navigator.language) {
      candidates.push(navigator.language);
    }
  }

  for (const tag of candidates) {
    const prefix = tag.toLowerCase().split(/[-_]/)[0];
    if (isSupportedLocale(prefix)) {
      return prefix;
    }
  }

  return 'tk';
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: TranslationDictionary;
  locales: typeof SUPPORTED_LOCALES;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'tk',
  setLocale: () => undefined,
  t: tk,
  locales: SUPPORTED_LOCALES,
});

let activeLocale: Locale | null = null;
const listeners = new Set<() => void>();

function notifyLocaleChange() {
  listeners.forEach((listener) => listener());
}

function subscribeLocale(callback: () => void) {
  listeners.add(callback);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY && isSupportedLocale(event.newValue)) {
      activeLocale = event.newValue;
      notifyLocaleChange();
    }
  };
  window.addEventListener('storage', handleStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', handleStorage);
  };
}

function getLocaleSnapshot(): Locale {
  if (activeLocale === null) {
    activeLocale = detectBrowserLocale();
  }
  return activeLocale;
}

function getLocaleServerSnapshot(): Locale {
  return 'tk';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    activeLocale = next;
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage write errors
    }
    notifyLocaleChange();
  }, []);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: DICTIONARIES[locale] ?? tk,
    locales: SUPPORTED_LOCALES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
