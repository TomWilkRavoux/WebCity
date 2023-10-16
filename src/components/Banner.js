import React from 'react';
// image a modif
import Image from '../assets/avatar.svg';
// icons a modif
import { FaApple, FaDeezer, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useTranslation } from "react-i18next";



const Banner = () => {
   const { t } = useTranslation();
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto ml-[10%] mt-[1% ]'>
        <div className='flex flex-col gap-y-2 lg:flex-row lg:items-center'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 className='mb-1 text-[55px] font-bold leading-[0.8] lg:text-[110PX]'
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amout: 0.7}}
            >
              WEIRD <span className='mr-4'>€ITY</span>
            </motion.h1>
          
            <motion.div className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amout: 0.7}}
                        >
                        
              <span className='text-white mr-4'> {t('common.translated.Banner-weare')} </span>

              <TypeAnimation sequence={[
                'Producer',
                2010,
                'BeatMaker',
                2010,
                'Rapper',
                2010,
              ]}

              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />

            </motion.div>

            <motion.p className='mb-8 max-w-lg mx-auto lg:mx-0'
                      variants={fadeIn('up', 0.5)}
                      initial="hidden"
                      whileInView={'show'}
                      viewport={{once: false, amout: 0.7}}
                      >
         {t('common.translated.banner-born')}   </motion.p>

            <motion.div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amout: 0.7}}>
              <button className='btn btn-lg'>{t('common.translated.Banner-aboutus')}</button>
              <a href='#' className='text-gradient btn-link'>{t('common.translated.Banner-My-portfolio')}</a>
            </motion.div>
                        {/* socials */}
            <motion.div className='pl-40 flex text-[20px] gap-x-3.5 max-w-max lg:mx-0 mt-5'
                        variants={fadeIn('up', 0.7)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amout: 0.7}}>
              <div>
                <a href='https://youtube.com/channel/UCB3FzA5kssSjrYKG9DmLQqw?si=UpLbpp0cFCOcDRSs'>
                  <FaYoutube/>
                </a>
              </div>
              <div>
                <a href='https://instagram.com/weirdcityrecord?igshid=OGQ5ZDc2ODk2ZA=='>
                  <FaInstagram/>
                </a>
              </div>
              <div>
                <a href='https://spotify.link/AgZX11qPODb'>
                  <FaSpotify/>
                </a>
              </div>
              <div>
                <a href='#'>
                  <FaDeezer/>
                </a>
              </div> 
              <div>
                <a href='https://music.apple.com/fr/artist/weard%E2%82%ACity/1607396503'>
                  <FaApple/>
                </a>
              </div>
            </motion.div>
          </div>
          {/* A MODIF */}


            {/* image */}
            <motion.div className='hidden lg:flex flex-1 max-w-[482px] lg:max-w-[380px] mx-auto'
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
            > 
              <img src={Image} alt=''/>
            </motion.div>
        </div>
      </div>
    </section>
  )  
};

export default Banner;
