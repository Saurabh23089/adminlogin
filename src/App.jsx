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
        <Barracuda/>
     </div>
  )
}

export default App;


