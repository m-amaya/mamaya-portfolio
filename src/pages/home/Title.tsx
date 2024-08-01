import { Stack, Text } from "@mantine/core";

export function Title() {
  return (
    <Stack gap={0} align="center">
      <Text
        variant="gradient"
        ff="heading"
        fw={900}
        lts={5}
        style={{ fontSize: 90 }}
      >
        m.amaya
      </Text>
      <Text>
        Senior UI/X Engineer
      </Text>
    </Stack>
  );
}
