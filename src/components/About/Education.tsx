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
    title: "November 2013–March 2015",
    cardTitle: "MSC, Computer Networking",
    cardSubtitle: "University of Bedfordshire, UK",
    cardDetailedText: "A thesis on the evaluation of open source cloud computing platforms' security models using OpenStack and Eucalyptus open source platforms.",
  },
  {
    title: "September 2010–July 2013",
    cardTitle: "BSC, Computer Networking",
    cardSubtitle: "University of Bedfordshire, UK",
    cardDetailedText: "A thesis on the performance evaluation of virtualization in computing environments.",
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
  const [activeItem, setActiveItem] = React.useState(items[0])

  const handleSelect = (index: any) => {
    setActiveItem(index)
    console.log(index)
  }
  return (
    <StyledTimeline>
      <Timeline
        items={items}
        mode="VERTICAL_ALTERNATING"
        handleSelect={handleSelect}
        activeItem={activeItem}
      />
    </StyledTimeline>
  )
}

export default Education