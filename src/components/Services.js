import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t('common.services.0.name'),
      description: t('common.services.0.description'),
      link: t('common.services.0.link'),
    },
    {
      name: t('common.services.1.name'),
      description: t('common.services.1.description'),
      link: t('common.services.1.link'),
    },
    {
      name: t('common.services.2.name'),
      description: t('common.services.2.description'),
      link: t('common.services.2.link'),
    },
    {
      name: t('common.services.3.name'),
      description: t('common.services.3.description'),
      link: t('common.services.3.link'),
    },
  ];

  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom-15 bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              {t('common.translated.About-text7')}
            </h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              {t('common.translated.About-text8')}(a modif)
            </h3>
            <button className='btn btn-sm'>{t('common.translated.About-text9')}</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div key={index} className='border-b border-white/20 h-[100px] mb-[38px] flex'>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Services;
