import React, { useState } from "react";
import styles from "./Calendar.module.css";

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const getDaysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let startDay = firstDay === 0 ? 6 : firstDay - 1;
    return { startDay, lastDate };
  };

  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const handleDateClick = (day) => {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selected);
    onDateSelect(selected.toISOString().split("T")[0]); 
  };

  const { startDay, lastDate } = getDaysInMonth(currentDate);
  const daysArray = [...Array(startDay).fill(null), ...Array(lastDate).keys()].map((_, i) => i + 1);

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.next} onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("en-US", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button className={styles.next} onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div className={styles.days}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.dayName}>
            {day}
          </div>
        ))}
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`${styles.day} ${selectedDate?.getDate() === day && styles.selected}`}
            onClick={() => day && handleDateClick(day)}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
