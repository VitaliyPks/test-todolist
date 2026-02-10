import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { TodoPages } from "pages/TodoPages";

import store from "@redux/store";

import "assets/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <TodoPages />
    </Provider>
  </StrictMode>,
);
