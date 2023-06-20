import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../Redux/store";
import AppRouter from "../../routes/AppRouter";

// type RenderOptions = {
//     initialRoute: string,
//     // add store to have the ability to provide store for the withredux helper
// }

export const renderTestApp = (
  component: ReactNode,
  initialRoute: string = ""
) => {
  return render(
    <MemoryRouter>
      <Provider store={store}>
        <AppRouter />
        {component}
      </Provider>
    </MemoryRouter>
  );
};
