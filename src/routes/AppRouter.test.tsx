import { screen } from "@testing-library/react";
import { renderTestApp } from "../utils/test/renderTestApp";

describe("Not found page appearence test", () => {
  it("Not found page displays with incorrect link", () => {
    renderTestApp(null, "/search");
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
  it.todo("Not found page displays when params are incorrect");
  it("Not found page is not displayed when link is correct", () => {
    renderTestApp(null, "/search/class");
    expect(screen.queryByText(/not found/i)).not.toBeInTheDocument();
  });
});
