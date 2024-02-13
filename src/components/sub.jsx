import Adminlogin from './adminlogin';
import { useState } from 'react';
import i18n from './i18n';

const Barracuda = () => {

    const[sl,setsl]=useState('en');

    const handlechangelanguage = (e) => {
        setsl(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    console.log(sl);

    return (
        
        <div className="flex flex-col w-screen relative bg-[#223355] h-screen overflow-hidden ">
            <div className=" flex justify-end bg-[#223355]  h-7">
                <div className="flex text-[12px] bg-[#192640] h-7.5 py-1 border-1 pl-8 ">
                    <select name="cars" id="cars" className="mr-4 rounded px-4"
                      value={sl}
                      onChange={handlechangelanguage}
                    >
                        <option value="ca">Catalan</option>
                        <option value="cs">Czech</option>
                        <option value="da">Dansk</option>
                        <option value="de">Deutsch</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col bg-gradient-to-b from-[#3B5986] to-[#011335] items-center justify-center h-screen  ">
                {/* <div className="flex flex-row mx-auto items-center justify-center items-center h-20 w-28 mt-20 gap-4"> */}
                <div className='flex flex-row'>
                    <a className='flex' href=''>
                    <img src="https://www.barracuda.com/content/dam/barracuda-corp/images/site/logo_barracuda_primary_reversed.svg" alt="Barracuda logo" className="md:h-64 md:w-64 h-32 w-32 md:mt-20 mt-0 mr-2 bg-[##f8fafc]" href="https://www.barracudanetworks.com/?a=bws_product" />
                    <div className="flex flex-row md:mt-48 mt-12 gap-2 ">
                        <p className="md:text-5xl   text-3xl font-[5] text-white">|</p>
                        <div className="flex flex-row mt-3 md:mt-4 gap-2 md:text-3xl text-white" >
                            <h1 className="">Web</h1>
                            <h1>Application</h1>
                            <h1>Firewall</h1>
                        </div>
                    </div>

                    </a>
                   
                </div>

                <div className='w-1/3'>
                <Adminlogin selectedlanguage={sl}  />
                </div>

            </div>


        </div>
    )
}

export default Barracuda;
