import React from 'react';
import Logo from '../assets/logo.svg';
import { useTranslation, Trans } from 'react-i18next';




const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' }
};

const Header = () => {
  const { t, i18n } = useTranslation();
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>

          {/* LOGO */}
          <a href="#">
            <img src={Logo} alt=""/>
          </a>

          {/* button */}
          <button className='btn btn-sm'>
            <Trans i18nKey="description.part1">
              Work with me
            </Trans>
          </button>

        </div>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>  
      </div>
    </header>
  )
};

export default Header;
