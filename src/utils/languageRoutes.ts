import { Language } from '../i18n/translations';

/**
 * Получает языковой префикс из пути
 * @param pathname - путь из location.pathname
 * @returns код языка или null
 */
export const getLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'en' || firstSegment === 'es') {
    return firstSegment as Language;
  }
  
  // Если первый сегмент не является языковым кодом, возвращаем португальский (по умолчанию)
  return 'pt';
};

/**
 * Получает путь без языкового префикса
 * @param pathname - путь из location.pathname
 * @returns путь без языкового префикса
 */
export const getPathWithoutLanguage = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments[0] === 'en' || segments[0] === 'es') {
    return '/' + segments.slice(1).join('/') || '/';
  }
  
  return pathname;
};

/**
 * Создает путь с языковым префиксом
 * @param path - путь без языкового префикса (например, '/support' или '/')
 * @param language - код языка
 * @returns путь с языковым префиксом
 */
export const getPathWithLanguage = (path: string, language: Language): string => {
  // Убираем начальный слэш для обработки
  const cleanPath = path === '/' ? '' : path.replace(/^\//, '');
  
  if (language === 'pt') {
    // Португальский - без префикса
    return cleanPath ? `/${cleanPath}` : '/';
  }
  
  // Английский и испанский - с префиксом
  return cleanPath ? `/${language}/${cleanPath}` : `/${language}`;
};

