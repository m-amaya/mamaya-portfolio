import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "@src/components/logo";
import { NavButton } from "@src/components/navButton";
import { ThemeSwitch } from "@src/components/themeSwitch";
import { LuExternalLink } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import classes from './Layout.module.css';

export function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Logo />
            <Group ml="xl" visibleFrom="sm">
              <Group gap={0}>
                <NavButton>Portfolio</NavButton>
                <NavButton>Resume</NavButton>
                <NavButton>
                  GitHub <LuExternalLink />
                </NavButton>
              </Group>
              <ThemeSwitch />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <Group justify="flex-end" px="md">
          <ThemeSwitch />
        </Group>
        <NavButton>Portfolio</NavButton>
        <NavButton>Resume</NavButton>
        <NavButton>
          GitHub <LuExternalLink />
        </NavButton>
      </AppShell.Navbar>
      <Outlet />
    </AppShell>
  );
}
