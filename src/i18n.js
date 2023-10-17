import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n    
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init(
        {
            debug: true,
            fallbackLanguage: 'en',
            interpolation: {
                escapeValue: false, 
            },
            resources: {
                en: {
                  translation: {
                    description: {
                      part1: 'Work with me.',
                      
                    }
                  }
                },
                fr: {
                  translation: {
                    description: {
                      part1: 'Travaillons ensembles.',
                      
                    }
                  }
                }
              }
            
        });

export default i18n;        