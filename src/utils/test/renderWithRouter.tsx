import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";
import { render } from "@testing-library/react";
import { ReactNode } from "react";

export const renderWithRouter = (
  component: ReactNode,
  initialRoute: string = ""
) => {
  return render(
    <MemoryRouter>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
