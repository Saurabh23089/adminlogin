import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AdminLogin = ( selectedlanguage ) => {
    const[username,setusername]=useState("guest")
    console.log(selectedlanguage.selectedlanguage);
  const { t ,i18n} = useTranslation();
  i18n.changeLanguage(selectedlanguage.sl);

  console.log('adminLoginText:', t('adminLoginText'));

  return (
    <div className="flex flex-col rounded bg-[#f8f8f8] align-items-center w-full  mb-28 px-8">
      <form className="flex flex-col my-4 w-full">
        <p className='mb-4 w-full text-[12px]'>{t('adminLoginText')}</p>
        <input type="text" className='mb-4 h-12   pl-2 focus:shadow-[#a1def6] focus:shadow-2xl border focus:outline-none text-[#333333]' value={username} onChange={(e) => setusername(e.target.value)} placeholder={t('usernamePlaceholder')} />
        <input type="password" className='mb-8 h-12 pl-2 focus:shadow-2xl border focus:shadow-[#a1def6] text-[#333333]' placeholder={t('passwordPlaceholder')} />
        <div className="flex justify-end">
          <button className=" flex w-24 text-white rounded-md text-[#fdfdfd] focus:outline-none items-end mb-4 py-2 text-lg align-items-end bg-gradient-to-b from-[#4e98ca] to-[#3b749b] justify-center">{t('buttonText')}</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
