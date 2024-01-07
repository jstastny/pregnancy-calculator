export function lengthToDays(lengthInMM) {
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

    var matchingRow = lengthTable.find((row) => row.length === lengthInMM);
    for (let i = 0; i < 5; i++) {
      if (!matchingRow) {
        lengthInMM = lengthInMM - 1;
        // eslint-disable-next-line no-loop-func
        matchingRow = lengthTable.find((row) => row.length === lengthInMM);
      } else {
        break;
      }
    }

    if (matchingRow) {
      const [weeks, days] = matchingRow.duration.split("+");
      const totalDays = parseInt(weeks) * 7 + parseInt(days);
      return totalDays;
    } else {
    //   console.error("Length not found in the table");
      return null;
    }
  }
