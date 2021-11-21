import React, { FC, useState } from 'react';
import { format, subMonths, addMonths } from 'date-fns';
import CalendarBody from './CalendarBody';
import CalendarDays from './CalendarDays';
import './styles.module.scss';

interface IProps {}

export const CalendarFns: FC<IProps> = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dateFormat = 'MMMM yyyy';

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="calendar">
      <div className="header row flex-middle">
        <div className="col col-start">
          <div role="presentation" className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div role="presentation" className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
      <CalendarDays currentMonth={currentMonth} />
      <CalendarBody currentMonth={currentMonth} />
    </div>
  );
};
