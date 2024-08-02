import {
  AppShell,
  Box,
  Center,
  Container,
  Flex,
  Group,
  Stack,
  TextInput
} from "@mantine/core";
import { Heading } from "@src/components/heading";
import { ProjectCard } from "@src/pages/portfolio/ProjectCard";
import { projectData } from "@src/tokens/projects";
import { Helmet } from "react-helmet";
import { LuSearch } from "react-icons/lu";
import classes from "./Portfolio.module.css";

export function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | m.amaya</title>
      </Helmet>
      <AppShell.Main
        p={0}
        pt={60}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Center className={classes.hero} h="35vh">
          <Heading>portfolio</Heading>
        </Center>
        <Box py="xl">
          <Container>
            <Stack>
              <Group>
                <TextInput
                  leftSection={<LuSearch />}
                  placeholder="Search projects"
                  variant="filled"
                />
                <div>Sort By</div>
                <div>Tags</div>
              </Group>
              <Flex gap="sm" wrap="wrap" justify="space-evenly">
                {projectData.map((project) => (
                  <ProjectCard key={project.name} data={project} />
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>
      </AppShell.Main>
    </>
  );
}
