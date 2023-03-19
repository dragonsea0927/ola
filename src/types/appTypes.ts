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