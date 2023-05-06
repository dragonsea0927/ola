import { Session } from "next-auth";

export type Project = {
  [x: string]: any;
  name: string,
  description: string,
  stacks: string[],
  githubUrl: string,
  liveUrl: string,
  modalImgUrl: string,
  coverImgUrl: string,
  tag: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
  published: boolean,
  author?: {
    name: string,
    email: string,
    image: string,
  }
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
  link?: string;
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

export type Tabs = {
  label: string;
  value: string;
  element?: React.FC
}

export type TabArray = Tabs[]

export type TabPanelProps = {
  children: React.ReactNode
  index: number
  value: number
}

export type AdminRoutesProps = {
  session: Session
  isActive: (pathname: string) => boolean
  signOut: () => void
}

export type ProjectProps = {
  projects: Project[]
  handleOpenModal: (id: string) => void
}

export type currentWork = {
  name: string,
  role: string,
  description: string,
  imageUrl: string,
  date: string,
}

export type About = {
  profileImgUrl: string,
  title: string,
  intro: string,
  focused: string,
  transitionOne?: string,
  transitionTwo?: string,
  hobbies: string,
  currentWorks: currentWork[],
  author?: {
    name: string,
    email: string,
    image: string,
  }
}