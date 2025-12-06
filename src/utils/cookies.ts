type LangCode = 'en' | 'es' | 'pt';

const COOKIE_NAME = 'i18n_redirected';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

export const setLanguageCookie = (lang: LangCode) => {
  if (typeof document !== 'undefined') {
    // Определяем домен динамически:
    // - На production (emailmassivo.com и поддоменах) используем domain=.emailmassivo.com
    // - На localhost и других доменах не указываем domain (будет для текущего домена)
    const hostname = window.location.hostname;
    const isEmailmassivoDomain = hostname === 'emailmassivo.com' || 
                                  hostname.endsWith('.emailmassivo.com');
    
    // ВРЕМЕННО: для тестирования на mypersonaltest.online
    // TODO: Удалить перед production
    const isTestDomain = hostname === 'mypersonaltest.online' || 
                         hostname.endsWith('.mypersonaltest.online');
    
    let domainPart = '';
    if (isEmailmassivoDomain) {
      domainPart = 'domain=.emailmassivo.com;';
    } else if (isTestDomain) {
      domainPart = 'domain=.mypersonaltest.online;';
    }
    
    document.cookie = `${COOKIE_NAME}=${lang}; max-age=${COOKIE_MAX_AGE}; path=/; ${domainPart}SameSite=Lax`;
    
    // Для отладки - выводим полную информацию о куке
    const cookieString = document.cookie.split(';').find(c => c.trim().startsWith(COOKIE_NAME));
    let domainInfo = ' (current domain)';
    if (isEmailmassivoDomain) {
      domainInfo = ' (domain=.emailmassivo.com)';
    } else if (isTestDomain) {
      domainInfo = ' (domain=.mypersonaltest.online)';
    }
    console.log(`Cookie установлен: ${COOKIE_NAME}=${lang}${domainInfo}`);
    console.log('Полная строка куки:', cookieString || 'не найдена');
    console.log('Текущий hostname:', hostname);
    console.log('Используется domain для поддоменов:', isEmailmassivoDomain || isTestDomain);
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

