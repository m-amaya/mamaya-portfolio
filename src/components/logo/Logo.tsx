import { Group, Image, Text } from "@mantine/core";

export function Logo() {
  return (
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
  );
}
