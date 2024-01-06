import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function App() {
  const [selectedDateTp, setSelectedDateTp] = useState("");
  const [selectedDateCrl, setSelectedDateCrl] = useState("");
  const [crlValue, setCrlValue] = useState("");
  const [selectedDateEt, setSelectedDateEt] = useState("");
  const [etValue, setEtValue] = useState("");

  const handleDateTpChange = (event) => {
    setSelectedDateTp(event.target.value);
  };

  const handleCrlChange = (event) => {
    setCrlValue(event.target.value);
  };

  const handleDateCrlChange = (event) => {
    setSelectedDateCrl(event.target.value);
  };

  const handleDateEtChange = (event) => {
    setSelectedDateEt(event.target.value);
  };

  const handleEtChange = (event) => {
    setEtValue(event.target.value);
  };

  const calculateConceptionDateTp = () => {
    if (selectedDateTp) {
      const conceptionDate = moment(selectedDateTp).subtract(38, "weeks");
      return conceptionDate.toDate().toLocaleDateString("cs-CZ");
    }
    return "-";
  };

  const calculateWeekAndDayTp = () => {
    if (selectedDateTp) {
      const today = moment();
      const conceptionDate = moment(selectedDateTp).subtract(40, "weeks");
      const pregnancyDurationDays = today.diff(conceptionDate, "days");
      const weeks = Math.floor(pregnancyDurationDays / 7);
      const days = pregnancyDurationDays % 7;
      return `${weeks} + ${days}`;
    }
    return "-";
  };

  function lengthToDays(lengthInMM) {
    const lengthTable = [
      { length: 3, duration: "6+1" },
      { length: 4, duration: "6+2" },
      { length: 5, duration: "6+3" },
      { length: 6, duration: "6+4" },
      { length: 7, duration: "6+5" },
      { length: 8, duration: "6+6" },
      { length: 9, duration: "7+0" },
      { length: 10, duration: "7+1" },
      { length: 11, duration: "7+2" },
      { length: 12, duration: "7+3" },
      { length: 13, duration: "7+4" },
      { length: 14, duration: "7+5" },
      { length: 16, duration: "7+6" },
      { length: 17, duration: "8+0" },
      { length: 18, duration: "8+1" },
      { length: 19, duration: "8+2" },
      { length: 20, duration: "8+3" },
      { length: 21, duration: "8+4" },
      { length: 23, duration: "8+5" },
      { length: 24, duration: "8+6" },
      { length: 25, duration: "9+0" },
      { length: 26, duration: "9+1" },
      { length: 27, duration: "9+2" },
      { length: 29, duration: "9+3" },
      { length: 30, duration: "9+4" },
      { length: 31, duration: "9+5" },
      { length: 33, duration: "9+6" },
      { length: 34, duration: "10+0" },
      { length: 37, duration: "10+1" },
      { length: 38, duration: "10+2" },
      { length: 39, duration: "10+3" },
      { length: 41, duration: "10+4" },
      { length: 42, duration: "10+5" },
      { length: 43, duration: "10+6" },
      { length: 44, duration: "11+0" },
      { length: 45, duration: "11+1" },
      { length: 47, duration: "11+2" },
      { length: 48, duration: "11+3" },
      { length: 50, duration: "11+4" },
      { length: 52, duration: "11+5" },
      { length: 53, duration: "11+6" },
      { length: 55, duration: "12+0" },
      { length: 57, duration: "12+1" },
      { length: 59, duration: "12+2" },
      { length: 61, duration: "12+3" },
      { length: 62, duration: "12+4" },
      { length: 64, duration: "12+5" },
      { length: 66, duration: "12+6" },
      { length: 68, duration: "13+0" },
      { length: 70, duration: "13+1" },
      { length: 72, duration: "13+2" },
      { length: 74, duration: "13+3" },
      { length: 76, duration: "13+4" },
      { length: 79, duration: "13+5" },
      { length: 81, duration: "13+6" },
      { length: 82, duration: "14+0" },
    ];

    var matchingRow = lengthTable.find((row) => row.length == lengthInMM);
    for (let i = 0; i < 5; i++) {
      if (!matchingRow) {
        lengthInMM = lengthInMM - 1;
        matchingRow = lengthTable.find((row) => row.length == lengthInMM);
      } else {
        break;
      }
    }

    if (matchingRow) {
      const [weeks, days] = matchingRow.duration.split("+");
      const totalDays = parseInt(weeks) * 7 + parseInt(days);
      return totalDays;
    } else {
      console.error("Length not found in the table");
      return null;
    }
  }

  const calculateConceptionDateCrl = () => {
    if (selectedDateCrl && crlValue) {
      const daysCrl = lengthToDays(crlValue);
      const birdthDate = moment(selectedDateCrl).subtract(daysCrl, "days").add(40, "weeks");
      return birdthDate.toDate().toLocaleDateString("cs-CZ");
    }
    return "-";
  };

  const calculateWeekAndDayCrl = () => {
    if (selectedDateCrl && crlValue) {
      const daysCrl = lengthToDays(crlValue);
      const conceptionDate = moment(selectedDateCrl).subtract(daysCrl, "days");
      const today = moment()
      const pregnancyDurationDays = today.diff(conceptionDate, "days");
      const weeks = Math.floor(pregnancyDurationDays / 7);
      const days = pregnancyDurationDays % 7;
      return `${weeks} + ${days}`;
    }
    return "-";
  };

  const calculateConceptionDateEt = () => {
    if (selectedDateCrl && crlValue) {
      const daysEt = etValue - 2 + 15;  
      const birdthDate = moment(selectedDateEt).subtract(daysEt, "days").add(40, "weeks");
      return birdthDate.toDate().toLocaleDateString("cs-CZ");
    }
    return "-";
  };

  const calculateWeekAndDayEt = () => {
    if (selectedDateEt && etValue) {
      const daysEt = etValue - 2 + 15;  
      const conceptionDate = moment(selectedDateEt).subtract(daysEt, "days");
      const today = moment()
      const pregnancyDurationDays = today.diff(conceptionDate, "days");
      const weeks = Math.floor(pregnancyDurationDays / 7);
      const days = pregnancyDurationDays % 7;
      return `${weeks} + ${days}`;
    }        
    return "-";
  };



  return (
    <div className="bg-custom-gray min-h-screen flex flex-col items-center font-sans">
      <h1 className="text-3xl mb-2 text-blue-600">Těhotenská kalkulačka</h1>
      <h2 className="text-xl mb-0 font-bold">Dle Termínu porodu</h2>
      <p className="text-sm">Termín porodu</p>
      <input
        type="date"
        className="w-48 p-2 border rounded-md mb-0 text-center"
        value={selectedDateTp}
        onChange={handleDateTpChange}
        placeholder="Předpokládaný termín porodu"
      />
      <p className="text-base mb-0 ">Týden těhotenství</p>
      <p className="text-2xl mb-0 font-bold">{calculateWeekAndDayTp()}</p>
      <p className="text-base mb-0">Datum početí</p>
      <p className="text-base mb-0 font-bold">{calculateConceptionDateTp()}</p>

      <hr className="w-64 h-1 bg-gray-300 border-0 rounded md:my-1 dark:bg-gray-700" />

      <h2 className="text-xl mt-1 mb-0 font-bold">Dle CRL</h2>
      <p className="text-sm">Datum vyšetření CRL</p>
      <input
        type="date"
        className="w-48 p-2 border rounded-md mb-1 text-center"
        value={selectedDateCrl}
        onChange={handleDateCrlChange}
        placeholder="Předpokládaný termín porodu"
      />
      <input
        type="number"
        className="w-48 p-2 border rounded-md mb-0 text-center"
        value={crlValue}
        onChange={handleCrlChange}
        min="3"
        max="84"
        placeholder="Délka plodu cm"
      />
      <p className="text-base mb-0">Týden těhotenství</p>
      <p className="text-2xl mb-0 font-bold">{calculateWeekAndDayCrl()}</p>
      <p className="text-base mb-0 ">Datum porodu</p>
      <p className="text-base mb-0 font-bold">{calculateConceptionDateCrl()}</p>

      <hr className="w-64 h-1 bg-gray-300 border-0 rounded md:my-1 dark:bg-gray-700" />

      <h2 className="text-xl mt-1 mb-0 font-bold">Dle ET</h2>
      <p className="text-sm">Datum provedení ET</p>
      <input
        type="date"
        className="w-48 p-2 border rounded-md mb-2 text-center"
        value={selectedDateEt}
        onChange={handleDateEtChange}
        placeholder="Datum provedení ET"
      />
      <input
        type="number"
        className="w-48 p-2 border rounded-md mb-2 text-center"
        value={etValue}
        onChange={handleEtChange}
        min="2"
        max="5"
        placeholder="Počet dní kultivace"
      />
      <p className="text-base mb-0">Týden těhotenství</p>
      <p className="text-2xl mb-0 font-bold">{calculateWeekAndDayEt()}</p>
      <p className="text-base mb-0 ">Datum porodu</p>
      <p className="text-base mb-0 font-bold">{calculateConceptionDateEt()}</p>

    </div>
  );
}

export default App;
