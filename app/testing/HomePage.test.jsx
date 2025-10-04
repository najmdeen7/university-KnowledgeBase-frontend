import { render, screen } from "@testing-library/react";
import CategoryCard from "../Combonents/CategoryCard";
describe("CategoryCard Component", () => {
  it("should render a link with the correct href attribute", () => {
    const testProps = {
      title: "القبول و التسجيل",
      questions: ["سؤال 1", "سؤال 2"],
      slug: "admissions-and-registration",
    };

    render(<CategoryCard {...testProps} />);

    const cardLink = screen.getByRole("link", { name: /القبول و التسجيل/i });

    expect(cardLink).toBeInTheDocument();
    expect(cardLink).toHaveAttribute(
      "href",
      "/category/admissions-and-registration"
    );
  });
});
