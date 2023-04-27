import React from 'react'
import { Chrono } from "react-chrono";

const items = [
  {
    title: "Software Engineer",
    cardTitle: "Software Engineer",
    cardSubtitle: "Software Engineer",
    cardDetailedText: "Software Engineer",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fsoftware-engineer-concept-illustration_10099162.htm&psig=AOvVaw0Q4Z3Z2Z3Z2Z3Z2Z3Z2Z3Z2&ust=1629789856544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqH7_ICFQAAAAAdAAAAABAD",
    //   },
    // },
  },
  {
    title: "Software Engineer",
    cardTitle: "Software Engineer",
    cardSubtitle: "Software Engineer",
    cardDetailedText: "Software Engineer",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fsoftware-engineer-concept-illustration_10099162.htm&psig=AOvVaw0Q4Z3Z2Z3Z2Z3Z2Z3Z2Z3Z2&ust=1629789856544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqH7_ICFQAAAAAdAAAAABAD",
    //   },
    // },
  },
  {
    title: "Software Engineer",
    cardTitle: "Software Engineer",
    cardSubtitle: "Software Engineer",
    cardDetailedText: "Software Engineer",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fsoftware-engineer-concept-illustration_10099162.htm&psig=AOvVaw0Q4Z3Z2Z3Z2Z3Z2Z3Z2Z3Z2&ust=1629789856544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqH7_ICFQAAAAAdAAAAABAD",
    //   },
    // },
  },
  {
    title: "Software Engineer",
    cardTitle: "Software Engineer",
    cardSubtitle: "Software Engineer",
    cardDetailedText: "Software Engineer",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fsoftware-engineer-concept-illustration_10099162.htm&psig=AOvVaw0Q4Z3Z2Z3Z2Z3Z2Z3Z2Z3Z2&ust=1629789856544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqH7_ICFQAAAAAdAAAAABAD",
    //   },
    // },
  },
];

const Education = () => {
  return (
    <div>
      Education
      <div style={{ width: '80%' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  )
}

export default Education