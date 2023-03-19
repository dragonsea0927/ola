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
}

export type StyledButtonProps = {
  theme?: any;
  width?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
}