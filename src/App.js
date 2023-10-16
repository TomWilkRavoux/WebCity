import React from 'react';
// components
import { useTranslation } from "react-i18next";
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Lang from './components/Lang.tsx';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';
import './i18n';

const App = () => {
    const { t } = useTranslation();

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Lang />
              <p>{t('common.translated-text')}</p>

      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />

      { <div className='h-[4000px]'></div> }          
    </div>
  );
};

export default App;

