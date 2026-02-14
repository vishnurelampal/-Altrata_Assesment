import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalendarMain from "../CalenderMain";

it("should render calendar with right month and year", () => {
  render(<CalendarMain date={new Date("1999-12-03")} />);

  expect(screen.getByText("December 1999")).toBeInTheDocument();
});
