import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should render title on main page", () => {
  // ARRANGE
  render(<App />);

  // eslint-disable-next-line testing-library/no-debugging-utils
  //ACT
  const title = screen.getByText("Punk API");
  // screen.debug();
  //ASSERT
  expect(title).toBeInTheDocument();
});

it("should render all checkboxes", () => {
  // ARRANGE
  render(<App />);
  // screen.debug();

  // eslint-disable-next-line testing-library/no-debugging-utils
  //ACT
  const ClassicRange = screen.getByText("Classic Range");

  // screen.debug();
  //ASSERT
  // checkboxes.forEach((checkbox) => {
  //   expect(checkbox).toBeInTheDocument();
  // });
  expect(ClassicRange).toBeInTheDocument();
});
