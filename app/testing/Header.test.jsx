import { render, screen } from "@testing-library/react";
import Header from "../Combonents/Header";
// The test suite begins here
test("renders the main return link", () => {
  // 1. Render the component
  render(<Header />);
  // 2. Find an element by the text it displays
  const linkElement = screen.getByText(/العودة الى الصفحة الرئيسية/i);

  // 3. Assert that the element is actually in the document
  expect(linkElement).toBeInTheDocument();
});
