import { useState } from 'react'
import './App.css'
import CustomInput from './Components/CustomInput'
import ArrowBtn from './assets/images/icon-arrow.svg';
import Age from './Components/Age';

function App() {
  const defaultValue = '--';
  const defaultDayLabelError = 'Must be a valid day';
  const defaultMonthLabelError = 'Must be a valid month';
  const defaultYearLabelError = 'Must be in the past';

  const [ inputDay, setInputDay ] = useState(defaultValue);
  const [ day, setDay ] = useState<string>(defaultValue);
  const [ dayLabelError, setDayLabelError ] = useState<string>('');

  const [ inputMonth, setinputMonth ] = useState(defaultValue);
  const [ month, setMonth ] = useState<string>(defaultValue);
  const [ monthLabelError, setMonthLabelError ] = useState<string>('');

  const [ inputYear, setinputYear ] = useState(defaultValue);
  const [ year, setYear ] = useState<string>(defaultValue);
  const [ yearLabelError, setYearLabelError ] = useState<string>('');

  const calculateAge = () => {
    const currentDate = new Date();

    const validDay = isValidDay(currentDate);
    const validMonth = isValidMonth();
    const validYear = isValidYear(currentDate);

    if(!validDay || !validMonth || !validYear) {
      return;
    }

    setDay((_day: string) => _day = calculateDay(currentDate).toString());
    setMonth((_month: string) => _month = calculateMonth(currentDate).toString())
    setYear((_year: string) => _year = calculateYear(currentDate).toString());
  }

  const calculateDay = (currentDate: Date) => {
    const currentDay = currentDate.getDate();
    const nrOfDays = 31;

    if(Number(inputDay) <= currentDay){
      return currentDay - Number(inputDay);
    }

    return nrOfDays - (Number(inputDay) - currentDay);
  }

  const calculateMonth = (currentDate: Date) => {
    const currentDay = currentDate.getDate();
    const currentMonth = Number(inputMonth) <= 7 ? currentDate.getMonth() + 1 : currentDate.getMonth();
    const nrOfMonths = 12;

    if(Number(inputMonth) === currentMonth){
      if(Number(inputDay) <= currentDay){
        return 0;
      }

      return nrOfMonths - 1;
    }    

    if(Number(inputMonth) < currentMonth){
      return currentMonth - Number(inputMonth);
    }

    return nrOfMonths - (Number(inputMonth) - currentMonth);
  }

  const calculateYear = (currentDate: Date) => {
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if((Number(inputMonth) < currentMonth)){
      return (currentYear - Number(inputYear));
    }

    if(Number(inputMonth) == currentMonth){
      if(Number(inputDay) <= currentDay){
        return (currentYear - Number(inputYear));
      }

      return (currentYear - Number(inputYear)) - 1;
    }

    return (currentYear - Number(inputYear)) - 1;
  }

  const isValidDay = (currentDate: Date) => {
    if(inputDay === defaultValue || Number(inputDay) > 31){
      setDayLabelError(defaultDayLabelError);
      return;
    }

    if(!isValidMonth()){
      return;
    }
    const MaxNrOfDays = 31;

    if(Number(inputMonth) >= 7) {
      if(Number(inputMonth) % 2 == 1 && Number(inputDay) === MaxNrOfDays){
        setDayLabelError(defaultDayLabelError);
        return;
      }
    } else {
      if(Number(inputMonth) % 2 == 0 && Number(inputDay) === MaxNrOfDays){
        setDayLabelError(defaultDayLabelError);
        return;
      }
    }

    setDayLabelError('');
    return true;
  }

  const isValidMonth = () => {
    if(inputMonth !== defaultValue && Number(inputMonth) <= 12){
      setMonthLabelError('');
      return true;
    }

    setMonthLabelError(defaultMonthLabelError);
    return false;
  }

  const isValidYear = (currentDate: Date) => {
    if(inputYear !== defaultValue && Number(inputYear) <= currentDate.getFullYear()){
      setYearLabelError('');
      return true;
    }

    setYearLabelError(defaultYearLabelError);
    return false;
  }

  return (
    <main className="App">
      <div className='inputLabelContainerList'>
        <CustomInput label='DAY' value={inputDay} setValue={setInputDay} inputMaxLength={2} labelError={dayLabelError}/>
        <CustomInput label='MONTH' value={inputMonth} setValue={setinputMonth} inputMaxLength={2} labelError={monthLabelError} />
        <CustomInput label='YEAR' value={inputYear} setValue={setinputYear} inputMaxLength={4} labelError={yearLabelError} />
      </div>
      <div className='calculateAgeContainer'>
        <div className='horizontalLine'/>
        <img className='arrowBtn' src={ArrowBtn} alt='' onClick={calculateAge}/>
      </div>
      <div className='AgeResultContainer'>
        <Age day={day} month={month} year={year} />
      </div>
    </main>
  )
}

export default App
