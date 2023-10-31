import React from 'react'
import { Metadata } from 'next';
import Homepage from '@/components/Home/Homepage';

export const metadata: Metadata = {
  title: 'Ola Ishola | Software Engineer',
  description: 'Personal website built with NextJS, Prisma, MongoDB and Tailwind CSS',
  viewport: 'width=device-width, initial-scale=1',
}

const getProjects = async () => {
  const res = await fetch(`${process.env.API_URL}/projects`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const getMediumPosts = async () => {
  const res = await fetch(`${process.env.MEDIUM_API_URL}`)
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

export default async function Home() {
  const projectsData = getProjects()
  const postsData = getMediumPosts()
  const [projects, posts] = await Promise.all([projectsData, postsData])

  // const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)
  // const { isOpen: openBlogModal, toggleOpen: setOpenBlogModal } = useToggle(false)
  // const url = process.env.NEXT_PUBLIC_MEDIUM_API_URL || ''
  // const { data, isLoading, isError } = useFetch(url)
  // const [blogItem, setBlogId] = React.useState({})
  // const [project, setProject] = React.useState({})
  // const [loading, setLoading] = React.useState(false)

  // const handleOpenModal = (id: string) => {
  //   setOpenModal()
  //   const project = props.projects.find((item: any) => item.id === id)
  //   setProject(project || {})
  // }

  // const handleOpenBlogModal = (item: any) => {
  //   setOpenBlogModal()
  //   setBlogId(item)
  // }

  return (
    <main className="mt-4">
      {/* {openModal && <ProjectModal open={openModal} handleClose={handleOpenModal} project={project} />}
      {openBlogModal && <BlogModal blogItem={blogItem} open={openBlogModal} handleClose={handleOpenBlogModal}
      />}
      */}
      <Homepage projects={projects?.data} posts={posts} />
    </main>
  )
}