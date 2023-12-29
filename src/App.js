import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateConceptionDate = () => {
    if (selectedDate) {
      return moment(selectedDate).subtract(38, 'weeks').format('MMMM Do YYYY');
    }
    return '';
  };
  

  const calculateWeekAndDay = () => {
    if (selectedDate) {
      const today = moment();
      const pregnancyDuration = today.diff(selectedDate, 'weeks');
      const remainingDays = today.subtract(pregnancyDuration, 'weeks').diff(selectedDate, 'days');
      return `Week ${pregnancyDuration} Day ${remainingDays}`;
    }
    return '';
  };

  return (
    <div className="bg-custom-gray min-h-screen flex flex-col justify-center items-center font-sans">
      <h1 className="text-3xl mb-8 text-custom-blue">Pregnancy Calculator</h1>
      <DatePicker
        className="p-3 border rounded-md mb-6 text-center"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select child's birth date"
      />
      <div className="mb-6">
        <h2 className="text-2xl mb-2 text-custom-blue">Conception Date:</h2>
        <p className="text-xl">{calculateConceptionDate()}</p>
      </div>
      <div>
        <h2 className="text-2xl mb-2 text-custom-blue">Current Week and Day of Pregnancy:</h2>
        <p className="text-xl">{calculateWeekAndDay()}</p>
      </div>
      {isMobile && <p className="mt-6 text-red-500">You're on a mobile device!</p>}
    </div>
  );
}

export default App;
