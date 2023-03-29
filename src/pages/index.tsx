import Head from 'next/head'
import { Hero, Layout, ProjectSection, ProjectModal, BlogSection, CustomModal, BlogModal } from '@/components'
import { useToggle } from '@/hooks'

export default function Home() {
  const { isOpen: openModal, toggleOpen: setOpenModal } = useToggle(false)

  const handleOpenModal = () => {
    setOpenModal()
  }
  return (
    <>
      {openModal && <ProjectModal open={openModal} handleClose={handleOpenModal} />}
      {openModal && <BlogModal open={openModal} handleClose={handleOpenModal} />}
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
        <BlogSection handleOpenModal={handleOpenModal} />
      </Layout>
    </>
  )
}
