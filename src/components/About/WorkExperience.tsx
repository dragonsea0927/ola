import React from 'react'
import { Timeline } from '@/components'
import { styled } from '@mui/material/styles'


const StyledTimeline = styled('div')(({ theme }) => ({
  h2: {
    fontSize: '0.85rem',
  },
  margin: '50px auto',
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const WorkExperience = () => {
  const items = [
    {
      title: "Oct 2022–Present",
      cardTitle: "Full Stack Developer",
      cardSubtitle: "AUTOMATION AFFAIRS LIMITED",
      cardDetailedText: "Developing in a team of six, a web application called JoHunter a resume builder specifically tailored for the African job market. The application is built with NextJS, and Tailwindcss on the frontend and Node.js, Express, and MongoDB on the backend.",
    },
    {
      title: "Jan 2022 - Jul 2022",
      cardTitle: "Mentor",
      cardSubtitle: "Microverse Inc.",
      cardDetailedText: ["Mentored junior web developers in the Microverse remote full-stack web development program.", "Proposed improvements to code organization to improve code quality, and overall performance using pair programing.", "Provided advice and tips on maintaining motivation to maintain longevity in the program which increases the level of motivation, reduces the chance of burnout, and results in placing students in the top 10% to complete the software development program within the specified time."],
    },
    {
      title: "March 2018 – June 2021",
      cardTitle: "Security Surveillance Engineer",
      cardSubtitle: "Cableworks Enterprise Limited",
      cardDetailedText: ["Designed and installed security surveillance systems for clients.", "Provided technical support to clients.", "Provided training to clients on how to use the security surveillance systems."],
    },
  ]
  // a job search engine that aggregates jobs from multiple sources
  return (
    <StyledTimeline>
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </StyledTimeline>
  )
}

export default WorkExperience