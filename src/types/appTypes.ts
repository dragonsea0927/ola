export type Project = {
  _id: string,
  name: string,
  description: string,
  stacks: string[],
  github: string,
  url: string,
  image: string,
}

export type Projects = Project[]

export type LayoutProps = {
  children: React.ReactNode,
}

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export type StyledButtonProps = {
  theme?: any;
  width?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

export type NavItem = {
  id: number,
  title: string;
  path: string;
  icon?: any;
}

export type NavItems = NavItem[]

export type SocialLink = {
  id: number,
  title: string;
  path: string;
  icon?: any;
}

export type SocialLinks = SocialLink[]

export type FormValues = {
  name: string;
  number: string;
  email: string;
  subject: string;
  message: string;
}