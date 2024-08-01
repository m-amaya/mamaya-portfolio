import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | m.amaya</title>
      </Helmet>
      <AppShell.Main>
        Portfolio Page
      </AppShell.Main>
    </>
  )
}