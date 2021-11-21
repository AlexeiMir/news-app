import { DAYS_IN_MONTH, DAYS_IN_WEEK, Month, WEEK_DAYS_FROM_MONDAY } from '../constants/calendar';

export const generateKey = () => Math.round(Math.random() * 2e4);

export function areEqual(a: Date, b: Date) {
  if (!a || !b) return false;

  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function isLeapYear(year: number) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function getDaysInMonth(date: Date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = DAYS_IN_MONTH[month];

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1;
  }
  return daysInMonth;
}

export function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(date: Date) {
  const result: Date[][] | undefined[][] = [];
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 0;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i += 1) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j += 1) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, (day += 1));
      }
    }
  }

  return result;
}
