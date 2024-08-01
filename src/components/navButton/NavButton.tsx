import { UnstyledButton } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./NavButton.module.css";

interface Props {
  children: ReactNode;
}

export function NavButton({ children }: Props) {
  return <UnstyledButton className={classes.button}>{children}</UnstyledButton>;
}
