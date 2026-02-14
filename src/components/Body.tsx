import { numberOfDaysInMonth, firstDayOfMonth } from "../utils/DateUtils";
import type { CalendarProps } from "../types/type";
import { WeekDays } from "../utils/constants";

const Body = ({
  date,
  weekDayClassName = "",
  dayClassName = "",
  selectedDayClassName = "",
}: CalendarProps) => {
  const d = typeof date === "string" ? new Date(date) : date;

  const year = d.getFullYear();
  const month = d.getMonth();
  const activeDay = d.getDate();

  const daysInMonth = numberOfDaysInMonth(year, month);
  const startingDayIndex = firstDayOfMonth(year, month);

  const emptySlots = Array.from({ length: startingDayIndex });
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-x-4 gap-y-1">
      {WeekDays.map((label) => (
        <div
          key={label}
          className={`text-center text-gray-400 ${weekDayClassName}`}
        >
          {label}
        </div>
      ))}

      {emptySlots.map((_, index) => (
        <div key={`emptySlot-${index}`} />
      ))}

      {monthDays.map((num) => {
        const isActive = num === activeDay;

        return (
          <div
            key={num}
            className={` py-1 text-center  ${
              isActive
                ? ` bg-white text-black border border-gray-400 rounded-sm  ${selectedDayClassName}`
                : dayClassName
            }`}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default Body;
