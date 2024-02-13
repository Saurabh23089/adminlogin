import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AdminLogin = ( selectedlanguage ) => {
    const[username,setusername]=useState("guest")
    const[pw,setpw]=useState("");
    const[error,seterror]=useState("");
    
  const { t ,i18n} = useTranslation();
  i18n.changeLanguage(selectedlanguage.sl);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (username === '') {
        seterror("Username is empty");
        setTimeout(() => {
            seterror("");
        }, 2000); 
    } else if (pw === '') {
        seterror("Password is empty");
        setTimeout(() => {
            seterror("");
        }, 2000); 
    } else {
        window.location.href = `https://www.barracudanetworks.com/?a=bws_product`;
    }

  }
  


  return (
    <div className="flex flex-col rounded bg-[#f8f8f8] align-items-center w-full  mb-28 px-8">
        {error&&<h6 className='text-red-200 mt-4'>{error}</h6>}
      <form className="flex flex-col my-4 w-full" onSubmit={(e) => handlesubmit(e)}>
        <p className='mb-4 w-full text-[12px]'>{t('adminLoginText')}</p>
        <input type="text" className='mb-4 h-12   pl-2 focus:shadow-[#a1def6] focus:shadow-2xl border focus:outline-none text-[#333333]' value={username} onChange={(e) => setusername(e.target.value)} placeholder={t('usernamePlaceholder')} />
        <input type="password" className='mb-8 h-12 pl-2 focus:shadow-2xl border focus:shadow-[#a1def6] text-[#333333]' placeholder={t('passwordPlaceholder')} onChange={(e) => {setpw(e.target.value)}}/>
        <div className="flex justify-end">
          <button className=" flex w-24 text-white rounded-md text-[#fdfdfd] focus:outline-none items-end mb-4 py-2 text-lg align-items-end bg-gradient-to-b from-[#4e98ca] to-[#3b749b] justify-center">{t('buttonText')}</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
