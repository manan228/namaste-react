import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurat card component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Jayhind Sweets");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {
  const RestauratntPrompted = withPromotedLabel(RestaurantCard)

  render(<RestauratntPrompted resData={MOCK_DATA}/>)

  const promotedTag = screen.getByText("Promoted");

  expect(promotedTag).toBeInTheDocument();
});
