import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { lengthToDays } from "./calculations";

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

  const calculateConceptionDateCrl = () => {
    if (selectedDateCrl && crlValue) {
      const daysCrl = lengthToDays(parseInt(crlValue));
      const birdthDate = moment(selectedDateCrl)
        .subtract(daysCrl, "days")
        .add(40, "weeks");
      return birdthDate.toDate().toLocaleDateString("cs-CZ");
    }
    return "-";
  };

  const calculateWeekAndDayCrl = () => {
    if (selectedDateCrl && crlValue) {
      const daysCrl = lengthToDays(crlValue);
      const conceptionDate = moment(selectedDateCrl).subtract(daysCrl, "days");
      const today = moment();
      const pregnancyDurationDays = today.diff(conceptionDate, "days");
      const weeks = Math.floor(pregnancyDurationDays / 7);
      const days = pregnancyDurationDays % 7;
      return `${weeks} + ${days}`;
    }
    return "-";
  };

  const calculateConceptionDateEt = () => {
    if (selectedDateEt && etValue) {
      const daysEt = etValue - 2 + 15;
      const birdthDate = moment(selectedDateEt)
        .subtract(daysEt, "days")
        .add(40, "weeks");
      return birdthDate.toDate().toLocaleDateString("cs-CZ");
    }
    return "-";
  };

  const calculateWeekAndDayEt = () => {
    if (selectedDateEt && etValue) {
      const daysEt = etValue - 2 + 15;
      const conceptionDate = moment(selectedDateEt).subtract(daysEt, "days");
      const today = moment();
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
