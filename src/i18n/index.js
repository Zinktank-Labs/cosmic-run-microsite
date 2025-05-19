import en from './en'
import de from './de'
import zhTw from './zh-tw'
import ja from './ja'
import ko from './ko'
import pt from './pt'

// Export a combined object with all translations
export default {
  en,
  de,
  'zh-tw': zhTw,
  ja,
  ko,
  pt
}

// Language names in their native form
export const languageNames = {
  en: 'English',
  de: 'Deutsch',
  'zh-tw': '繁體中文',
  ja: '日本語',
  ko: '한국어',
  pt: 'Português'
}

// Function to detect user's preferred language
export function detectUserLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  
  // Extract primary language code (e.g. 'en-US' -> 'en')
  const primaryLang = userLang.split('-')[0];
  
  // Special case for traditional Chinese
  if (userLang.toLowerCase() === 'zh-tw') {
    return 'zh-tw';
  }

  // Check if we support the language directly
  if (primaryLang in languageNames || primaryLang === 'zh') {
    return primaryLang === 'zh' ? 'zh-tw' : primaryLang;
  }

  // Default to English if no match
  return 'en';
}