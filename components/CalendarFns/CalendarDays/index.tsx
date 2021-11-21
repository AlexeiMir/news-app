import React, { FC } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import './styles.module.scss';

interface IProps {
  currentMonth: Date;
}

const CalendarDays: FC<IProps> = ({ currentMonth }) => {
  const dateFormat = 'ddd';
  const days = [];

  const startDate = startOfWeek(currentMonth);

  for (let i = 0; i < 7; i += 1) {
    days.push(
      <div className="col col-center" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>,
    );
  }

  return <div className="days row">{days}</div>;
};

export default CalendarDays;
