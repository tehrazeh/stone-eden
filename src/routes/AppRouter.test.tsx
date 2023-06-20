import { screen } from "@testing-library/react";
import Search from "../Pages/Search";
import { renderTestApp } from "../utils/test/renderTestApp";

describe("testing router and links", () => {
  fit("classes page redirect works", () => {
    renderTestApp(<Search />);
    expect(screen.getByText(/main section my friend/i)).toBeInTheDocument();
  });
});
