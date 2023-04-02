import { useState } from 'react'
import './App.css'
import CustomInput from './Components/CustomInput'
import ArrowBtn from './assets/images/icon-arrow.svg';
import Age from './Components/Age';

function App() {

  return (
    <main className="App">
      <div className='inputLabelContainerList'>
        <CustomInput label='DAY'/>
        <CustomInput label='MONTH'/>
        <CustomInput label='YEAR'/>
      </div>
      <div className='calculateAgeContainer'>
        <div className='horizontalLine'/>
        <img className='arrowBtn' src={ArrowBtn} alt='' />
      </div>
      <div className='AgeResultContainer'>
        <Age day={26} month={3} year={36} />
      </div>
    </main>
  )
}

export default App
