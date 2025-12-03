type LangCode = 'en' | 'es' | 'pt';

const COOKIE_NAME = 'emailmassivo-language';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

export const setLanguageCookie = (lang: LangCode) => {
  if (typeof document !== 'undefined') {
    document.cookie = `${COOKIE_NAME}=${lang}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
    // Для отладки - можно проверить в консоли
    console.log(`Cookie установлен: ${COOKIE_NAME}=${lang}`);
  }
};

export const getLanguageFromCookie = (): LangCode | null => {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === COOKIE_NAME && (value === 'en' || value === 'es' || value === 'pt')) {
      return value as LangCode;
    }
  }
  return null;
};

