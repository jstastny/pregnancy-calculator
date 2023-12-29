import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateConceptionDate = () => {
    if (selectedDate) {
      const conceptionDate = moment(selectedDate).subtract(38, "weeks");
      return conceptionDate.toDate().toLocaleDateString("cs-CZ"); // Convert moment date to JS Date and then format based on locale
    }
    return "";
  };

  const calculateWeekAndDay = () => {
    if (selectedDate) {
      const today = moment();
      console.log({"Selected date: ": moment(selectedDate)})
      const conceptionDate = moment(selectedDate).subtract(40, "weeks");
      const pregnancyDurationDays = today.diff(conceptionDate, "days");
      const weeks = Math.floor(pregnancyDurationDays / 7);
      const days = pregnancyDurationDays % 7;

      return `${weeks}+${days}`;
    }
    return "";
  };

  return (
    <div className="bg-custom-gray min-h-screen flex flex-col justify-center items-center font-sans">
      <h1 className="text-3xl mb-8 text-custom-blue">Kalkulačka početí</h1>
      <input
        type="date"
        className="p-3 border rounded-md mb-6 text-center"
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Předpokládaný termín porodu"
      />
        <h2 className="text-2xl mb-2 text-custom-blue">Datum početí</h2>
        <p className="text-2xl mb-2 text-custom-blue">{calculateConceptionDate()}</p>
      
        <h2 className="text-2xl mb-2 text-custom-blue">Týden těhotenství</h2>
        <p className="text-2xl mb-2 text-custom-blue">{calculateWeekAndDay()}</p>
      
    </div>
  );
}

export default App;
