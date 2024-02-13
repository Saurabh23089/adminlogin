import { useState } from 'react'
import './App.css'

import Barracuda from './components/sub';
import Adminlogin from './components/adminlogin';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/components/i18n';

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <div className='bg-[#ffffff]'>
      {/* <I18nextProvider i18n={i18n}> */}
      {/* <div className="App"> */}
        <Barracuda/>

      {/* </div> */}
    {/* </I18nextProvider> */}
     </div>
  )
}

export default App;

// App.js
// import React from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';
// import AdminLogin from './AdminLogin';

// const App = () => {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <div className="App">
//         <AdminLogin />
//       </div>
//     </I18nextProvider>
//   );
// };

// export default App;

