import * as React from "react";
import { AnyFn } from "./utils";

export interface NavItemProps {
  divider?: boolean;
  href?: string;
  onClick?: AnyFn;
  className?: string;
  children?: string;
  isExternal?:boolean;
}

/**
 * React Materialize: NavItem
 */
declare const NavItem: React.FC<NavItemProps>;

export default NavItem;
