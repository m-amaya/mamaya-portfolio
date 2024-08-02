import { UnstyledButton } from "@mantine/core";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";

interface Props {
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
  to: string;
}

export function NavButton({ children, target, to }: Props) {
  return (
    <NavLink className={classes.link} to={to} target={target}>
      <UnstyledButton className={classes.button}>{children}</UnstyledButton>
    </NavLink>
  );
}
