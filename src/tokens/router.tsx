import { Layout } from "@src/components/layout";
import { HomePage } from "@src/pages/home";
import { PortfolioPage } from "@src/pages/portfolio";
import { ResumePage } from "@src/pages/resume";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  }
]);
