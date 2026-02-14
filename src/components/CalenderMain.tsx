import type { CalendarProps } from "../types/type";
import { errorText } from "../utils/constants";
import Body from "./Body";
import Header from "./Header";

const Calendar = ({
  date,
  className = "",
  headerClassName = "",
  weekDayClassName = "",
  dayClassName = "",
  selectedDayClassName = "",
}: CalendarProps) => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) {
    return <div className="text-red-500 font-bold">{errorText}</div>;
  }
  return (
    <div
      className={`bg-[#0f1f23] p-5 font-mono
        text-gray-300 
        inline-block
        rounded-2xl
        
        ${className}
      `}
    >
      <Header date={parsedDate} headerClassName={headerClassName} />
      <Body
        date={parsedDate}
        weekDayClassName={weekDayClassName}
        dayClassName={dayClassName}
        selectedDayClassName={selectedDayClassName}
      />
    </div>
  );
};

export default Calendar;
