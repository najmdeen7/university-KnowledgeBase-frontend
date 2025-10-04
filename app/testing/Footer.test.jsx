import { render, screen } from "@testing-library/react";
import Footer from "../Combonents/Footer";
test("testing the Footer", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/عن الجامعة/i);
  expect(linkElement).toBeInTheDocument();
});
