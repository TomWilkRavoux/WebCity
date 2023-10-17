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
                        about_h3:"We've been music producers for 4 years",
                        about_p:""
                    }
                    }
                },
                fr: {
                    translation: {
                    description: {
                        part1: 'Travaillons ensembles.',
                        about_h3:"Nous somme musciens et producteurs depuis 4 ans",
                        about_p:""
                    }
                }
                }
            }
            
        });

export default i18n;        