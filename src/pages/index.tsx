import React from 'react'
import Head from 'next/head'
import { Hero, Layout, ProjectSection, ProjectModal, BlogSection, BlogModal } from '@/components'
import { useFetch, useToggle } from '@/hooks'

export default function Home() {
  const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)
  const { isOpen: openBlogModal, toggleOpen: setOpenBlogModal } = useToggle(false)
  const url = process.env.NEXT_PUBLIC_MEDIUM_API_URL || ''
  const { data, isLoading, isError } = useFetch(url)
  const [blogItem, setBlogId] = React.useState({})

  const handleOpenModal = () => {
    setOpenModal()
  }

  const handleOpenBlogModal = (item: any) => {
    setOpenBlogModal()
    setBlogId(item)
  }

  return (
    <>
      {openModal && <ProjectModal open={openModal} handleClose={handleOpenModal} />}
      {openBlogModal && <BlogModal blogItem={blogItem} open={openBlogModal} handleClose={handleOpenBlogModal}
      />}
      <Head>
        <title>Ola Ishola</title>
        <meta name="description" content="Personal website built with NextJS, MongoDB and Material UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Hero />
        <ProjectSection handleOpenModal={handleOpenModal} />
        <BlogSection handleOpenBlogModal={handleOpenBlogModal} data={data} isLoading={isLoading} />
      </Layout>
    </>
  )
}
