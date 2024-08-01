import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume | m.amaya</title>
      </Helmet>
      <AppShell.Main>
        Resume Page
      </AppShell.Main>
    </>
  )
}