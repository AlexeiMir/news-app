import React, { FC, useState } from 'react';

import cx from 'classnames';

import styles from './styles.module.scss';
import { areEqual, generateKey, getMonthData } from '../../utils/calendarUtils';
import { monthNames, weekDayNames, yearsName } from '../../constants/calendar';

interface IProps {}

export const Calendar: FC<IProps> = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState(date.getMonth());

  const currentDate = new Date();
  const year = date.getFullYear();

  const [monthSelect, setMonthSelect] = useState(date.getMonth());
  const [yearSelect, setYearSelect] = useState(date.getFullYear());

  const [selectedDate, setSelectedDate] = useState<Date>();

  const handlePrevMonthButtonClick = () => {
    setMonth(month - 1);
    const datePrev = new Date(year, month - 1);
    setDate(datePrev);
  };

  const handleNextMonthButtonClick = () => {
    setMonth(month + 1);
    const nextDate = new Date(year, month + 1);
    setDate(nextDate);
  };

  const handleSelectChange = () => {
    const changedDate = new Date(yearSelect, monthSelect);

    setDate(changedDate);
  };

  const handleDayClick = (dateClick: Date) => {
    setSelectedDate(dateClick);
  };

  const monthData = getMonthData(date);

  return (
    <section className={styles.calendar}>
      <header>
        <button onClick={handlePrevMonthButtonClick}>{'<'}</button>

        <select
          ref={(element) => setMonthSelect(Number(element?.value))}
          value={monthSelect}
          onChange={handleSelectChange}>
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>

        <select
          ref={(element) => setYearSelect(Number(element?.value))}
          value={yearSelect}
          onChange={handleSelectChange}>
          {yearsName.map((yearName) => (
            <option key={yearName} value={yearName}>
              {yearName}
            </option>
          ))}
        </select>

        <button onClick={handleNextMonthButtonClick}>{'>'}</button>
      </header>

      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week) => (
            <tr key={generateKey()} className="week">
              {week.map((dateWeek) =>
                dateWeek ? (
                  <td
                    key={generateKey()}
                    className={cx('day', {
                      today: areEqual(dateWeek, currentDate as Date),
                      selected: areEqual(dateWeek, selectedDate as Date),
                    })}
                    role="presentation"
                    onClick={() => handleDayClick(dateWeek)}>
                    {dateWeek.getDate()}
                  </td>
                ) : (
                  <td key={generateKey()} />
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
