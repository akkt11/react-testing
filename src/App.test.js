/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);

    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorldElement).toBeInTheDocument();

    expect(btn).toBeInTheDocument();

    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("check", async () => {
    render(<App />);
    // const helloWorldElement = screen.queryByText(/hello2/i);
    // expect(helloWorldElement).toBeNull();

    screen.debug();
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveStyle({ color: "red" });
    screen.debug();
  });

  test("CLICK EVENT", () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();

    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");

    // fireEvent - Искуственное событие
    fireEvent.input(input, {
      target: { value: "123" },
    });

    // Близко к пользователю, обрабатывается события клавиш и тд
    userEvent.type(input, "123");

    expect(screen.queryByTestId("value-elem")).toContainHTML("123");
  });
});
