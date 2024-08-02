import { Text, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

type Props = {
  children: ReactNode;
  level?: HeadingLevel;
  size?: number | string;
};

export function Heading({ children, level = "h1", size }: Props) {
  const theme = useMantineTheme();

  return (
    <Text
      component={level}
      ff="heading"
      fw={900}
      style={{ fontSize: size ?? theme.headings.sizes[level].fontSize }}
      variant="gradient"
    >
      {children}
    </Text>
  );
}
