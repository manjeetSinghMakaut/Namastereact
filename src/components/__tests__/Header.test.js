import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", { name: "Login" });

  // const LoginButton =  screen.getByText("Login");

  expect(LoginButton).toBeInTheDocument();
});

test("should contain cart itmes -0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartitems = screen.getByText("(Cart 0 -Items)");

  expect(cartitems).toBeInTheDocument();
});

test("should contain cart items using regex ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartitems = screen.getByText(/Cart/);

  expect(cartitems).toBeInTheDocument();
});

test("should change login to logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LoginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(LoginButton);

  const LogoutButton = screen.getByRole("button", { name: "Logout" });

  expect(LogoutButton).toBeInTheDocument();
});
