import { Button, Card, Group, Pill, Stack, Text } from "@mantine/core";
import { Project, TAG_COLOR_MAP } from "@src/tokens/projects";
import { format } from "date-fns";
import { LuArrowRight } from "react-icons/lu";

type Props = {
  data: Project;
};

export function ProjectCard({ data }: Props) {
  return (
    <Card shadow="xs" w={300} withBorder>
      <Stack gap={4}>
        <Group align="flex-start">
          <Text flex={1} fw={600}>
            {data.name}
          </Text>
          <Text size="sm" ta="right">
            {format(data.date, "MMM d, yyyy")}
          </Text>
        </Group>
        <Text c="dimmed">{data.description}</Text>
        <Pill.Group mt={10} mb={12}>
          {data.tags.map((tag) => (
            <Pill key={tag} bg={TAG_COLOR_MAP[tag]} c="black">
              {tag}
            </Pill>
          ))}
        </Pill.Group>
        <Button
          color="lightBlue.2"
          fullWidth
          rightSection={<LuArrowRight size={16} />}
          size="compact-sm"
        >
          View
        </Button>
      </Stack>
    </Card>
  );
}
