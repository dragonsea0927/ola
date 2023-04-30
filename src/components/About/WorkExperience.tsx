import React from 'react'
import { Timeline } from '@/components'

const WorkExperience = () => {
  const items = [
    {
      title: "Apr 2023 - Present",
      cardTitle: "DevOps Engineer Training",
      cardSubtitle: "School of Self-Education (April 2023 - September 2023)",
      cardDetailedText: "Currently learning Docker, Kubernetes, Jenkins, AWS, Terraform, Ansible, and more",
    },
  ]
  return (
    <div>
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </div>
  )
}

export default WorkExperience