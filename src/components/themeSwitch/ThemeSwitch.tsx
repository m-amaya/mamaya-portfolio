import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeSwitch() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true
  });
  const isLightTheme = colorScheme === "light";

  const sunIcon = <LuSun color={theme.colors.yellow[2]} size={18} />;

  const moonIcon = <LuMoon color={theme.colors.lightBlue[6]} size={18} />;

  return (
    <Switch
      checked={isLightTheme}
      size="lg"
      onLabel={sunIcon}
      offLabel={moonIcon}
      onChange={() => toggleColorScheme()}
    />
  );
}
