import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/Main.page";
import { Layout } from "../layouts/Layout";
import { FormPage } from "../pages/FormPage/Form.page";
import { CardsPage } from "../pages/CardsPage/Cards.page";

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/register-trails",
        element: <FormPage />,
      },
      {
        path: "/trail-cards",
        element: <CardsPage />,
      },
    ],
  },
]);
