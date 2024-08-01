import { AppShell, Button, Flex, Image, Stack, Text } from "@mantine/core";
import { Highlight } from "@src/components/highlight";
import Helmet from "react-helmet";
import { LuArrowUpRight } from "react-icons/lu";
import classes from "./Home.module.css";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | m.amaya</title>
      </Helmet>
      <AppShell.Main className={classes.main}>
        <Flex className={classes.column1} flex={1} px="xl">
          <Image className={classes.image} src="/programming.png" />
          <Text className={classes.title} ff="heading" fw={900}>
            m.amaya
          </Text>
          <Text className={classes.subtitle} fw={200}>
            Senior UI/UX Engineer
          </Text>
        </Flex>
        <Flex className={classes.column2} flex={1} p="xl">
          <Stack>
            <Text maw={500} size="lg" lh={2}>
              Hello! My name is <Highlight>Marissa Amaya</Highlight>. I build{" "}
              <Highlight>beautiful</Highlight> interfaces for the web and bring{" "}
              <Highlight>product visions</Highlight> to life. I have over{" "}
              <Highlight>10 years</Highlight> of professional experience{" "}
              <Highlight>architecting</Highlight>,{" "}
              <Highlight>designing</Highlight>, and{" "}
              <Highlight>building</Highlight> cutting-edge applications. While
              you're here, feel free to check out my{" "}
              <Highlight>portfolio</Highlight> to catch a glimpse of my work.
            </Text>
            <div>
              <Button
                color="hotPink.4"
                rightSection={<LuArrowUpRight size={18} />}
              >
                View Portfolio
              </Button>
            </div>
          </Stack>
        </Flex>
      </AppShell.Main>
    </>
  );
}
