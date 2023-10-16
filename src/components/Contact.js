import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='mt-32 lg:section' id='contact'>
      <div className='container px-16 mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                {t('common.translated.Contact-text1')}
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-0'>
                {t('common.translated.Contact-text2').split(' ').map((word, index, arr) => (
                  <span key={index}>
                    {word}
                    {index !== arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </div>
          </div>
          <form className='ml-16 flex-1 border rounded-2xl flex flex-col gap-y-6 pb-25 p-6 items-start'>
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder={t('common.translated.Contact-text3')}
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder={t('common.translated.Contact-text4')}
            />
            <textarea
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              placeholder={t('common.translated.Contact-text5')}
            ></textarea>
            <button className='btn btn-lg'>
              {t('common.translated.Contact-text6')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
