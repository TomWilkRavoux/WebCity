import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import { fadeIn } from '../variants';

const Work = () => {
  const { t } = useTranslation();

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/*text*/}
            <div className=''>
              <h2 className='h2 leading-tight text-accent'>
                {t('common.translated-work-text1')}
              </h2>
              <p className='max-w-sm mb-16'>
                {t('common.translated-work-text2')}
              </p>
              <button className='btn btn-sm'>
                {t('common.translated-work-text3')}
              </button>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{t('common.translated-work-text4')}</span>
              </div>
              {/*Title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>{t('common.translated-work-text5')}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-2'>
            {/*IMAGE */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{t('common.translated-work-text1')}</span>
              </div>
              {/*Title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>{t('common.translated-work-text5')}</span>
              </div>
            </div>
            {/*IMAGE */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/*pretitle*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>{t('common.translated-work-text1')}</span>
              </div>
              {/*Title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>{t('common.translated-work-text5')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
