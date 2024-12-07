import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ResturantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/Resdatamock.json";


 
test("should render restaurant compoenent with props data ", () => {
  render(<ResturantCard resdata={MOCK_DATA} />);

  const name = screen.getByAltText(MOCK_DATA.name);

  expect(name).toBeInTheDocument();
});
