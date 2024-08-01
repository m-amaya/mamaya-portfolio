import { Mark } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Highlight({ children }: Props) {
  return (
    <Mark color="lightBlue.1" px={4} py={3} style={{ borderRadius: 6 }}>
      {children}
    </Mark>
  );
}
