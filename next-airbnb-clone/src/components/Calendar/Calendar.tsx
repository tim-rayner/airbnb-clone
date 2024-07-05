'use client'
// Import React and other necessary elements
import { useState } from "react";
import { DateRange } from 'react-date-range';
import './styles.css';

// Define an interface for the component's props
interface CalendarProps {
  onDateChange: (range: { startDate: Date; endDate: Date; key: string }) => void;
}

// Modify the Calendar component to accept props of type CalendarProps
const Calendar = ({ onDateChange }: CalendarProps) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 2)),
      key: 'selection'
    }
  ]);

  // Modify the onChange handler to call the onDateChange prop function
  const handleChange = (item: any) => {
    setState([item.selection]);
    onDateChange(item.selection); // Call the passed function with the new date range
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={["#f7f7f7"]}
      />
    </div>
  );
};

export default Calendar;