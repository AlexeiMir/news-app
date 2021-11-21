import React, { FC, useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';
import cx from 'classnames';
import { generateKey } from '../../../utils/generateKey';
import './styles.module.scss';

interface IProps {
  currentMonth: Date;
}

const CalendarBody: FC<IProps> = ({ currentMonth }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const dateFormat = 'd';
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i += 1) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={cx('col', 'cell', {
            disabled: !isSameMonth(day, monthStart),
            selected: isSameMonth(day, monthStart) && isSameDay(day, selectedDate),
            '': isSameMonth(day, monthStart) && !isSameDay(day, selectedDate),
          })}
          key={generateKey()}
          role="presentation"
          onClick={() => onDateClick(cloneDay)}>
          <span className="number">{formattedDate}</span>
          <span className="bg">{formattedDate}</span>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={generateKey()}>
        {days}
      </div>,
    );
    days = [];
  }
  return <div className="body">{rows}</div>;
};

export default CalendarBody;
