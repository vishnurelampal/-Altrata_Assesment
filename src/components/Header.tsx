import type { CalendarProps } from "../types/type";

const Header = ({ date, headerClassName = "" }: CalendarProps) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("default", { month: "long" });

  return (
    <div
      className={`
        text-center
        mb-2
        ${headerClassName}
      `}
    >
      {month} {year}
    </div>
  );
};

export default Header;
