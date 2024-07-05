//@ts-nocheck

'use client'
import { useState } from "react";
import { DateRange } from 'react-date-range';
import './styles.css';
/**
 * @lib https://hypeserver.github.io/react-date-range/
 * @todo emit a date range object on selection
 * @todo make this look more like airbnb calendar with bespoke styles in the calendar stylesheet
 */
const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      key: 'selection'
    }
  ]);

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={["#f7f7f7"]}
      />
    </div>
  )
} 

export default Calendar