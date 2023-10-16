import React from 'react';
import { useTranslation } from 'react-i18next';

//
import Logo from '../assets/logo.svg';
const Header = () => {
  const { t } = useTranslation();
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
            {t('common.translated.Header-text1')}
          </button>

        </div>
      </div>
    </header>
  )
};

export default Header;
