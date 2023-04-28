import React from 'react'
import { useAppTheme } from '@/hooks';
import { Timeline } from '@/components'
import { styled } from '@mui/material/styles';

const items = [
  {
    title: "Apr 2023 - Present",
    cardTitle: "DevOps Engineer Training",
    cardSubtitle: "School of Self-Education (April 2023 - September 2023)",
    cardDetailedText: "Currently learning Docker, Kubernetes, Jenkins, AWS, Terraform, Ansible, and more",
    items: [
      { cardTitle: "Docker", cardSubtitle: 'Apr 2023', cardDetailedText: "Currently learning Docker, docker-compose, containers, docker images, taging, docker hub and more" },
      { cardTitle: "Kubernetes", cardSubtitle: 'May 2023', cardDetailedText: "Container orchastration with kubernetes, minikube, kubectl, pods, services, deployment, secret, Node, cluster etc." },
    ]
  },
  {
    title: "Nov 2021 - August 2022",
    cardTitle: "Remote Full Stack Web Development Program",
    cardSubtitle: "Microverse Inc. (November 2021 - August 2022)",
    cardDetailedText: ["Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux", "Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.", "Completed 1000+ hours of remote pair programming with 30+ developers from 50+ countries.", "Developed 20+ projects in a remote environment using Agile methodologies and industry-standard tools.", "Completed 100+ hours of technical and soft skills training."],
  },
  {
    title: "July 2021 - August 2021",
    cardTitle: "Remote Explorer Preparation Program for the Fellowship",
    cardSubtitle: "Major League Hacking Pre-Fellowship (July 2021 - August 2021)",
    cardDetailedText: "Spent 160+ hours Collaborating, building a portfolio of personal projects, and experimenting with new technologies by collaborating in small groups through a short hackathon sprint.",
  },
  {
    title: "Software Engineer",
    cardTitle: "Software Engineer",
    cardSubtitle: "DevOps University",
    cardDetailedText: "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
];

const StyledTimeline = styled('div')(({ theme }) => ({
  margin: '50px auto',
  width: '50%',
  h2: {
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));


const Education = () => {
  const theme = useAppTheme()
  const [active, setActive] = React.useState(0)
  const handleSelect = (index: number) => {
    setActive(index)
    console.log(active)
  }
  return (
    <StyledTimeline>
      <Timeline
        items={items}
        mode="VERTICAL_ALTERNATING"
        handleSelect={handleSelect}
      // classNames={{
      //   cardSubTitle: 'subtitle',
      // }}
      />
    </StyledTimeline>
  )
}

export default Education