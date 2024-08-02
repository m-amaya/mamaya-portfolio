import { Group, Image, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

export function Logo() {
  return (
    <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
      <Group>
        <Image src="/programming.png" h={40} />
        <Text
          ff="heading"
          fw={700}
          lts={1}
          variant="gradient"
          style={{ fontSize: 24 }}
        >
          m.amaya
        </Text>
      </Group>
    </NavLink>
  );
}
