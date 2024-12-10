import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import mockresmenu from "../mocks/mockresmenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";





global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockresmenu),
  })
);

// break the testcases into smaller tests
it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianheader = screen.getByText("Recommended(20)");
  fireEvent.click(accordianheader);

  expect(screen.getAllByTestId("fooditems").length).toBe(20);

  const addbtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addbtn[0]);
  expect(screen.getByText("(Cart 1 -Items)")).toBeInTheDocument();

  fireEvent.click(addbtn[1]);
  expect(screen.getByText("(Cart 2 -Items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "ClearCart" }));
  expect(screen.getAllByTestId("fooditems").length).toBe(20);

  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
