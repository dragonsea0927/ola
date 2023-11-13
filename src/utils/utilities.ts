import { NavItems, SocialLinks, TabArray, Project, About } from "@/types";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaMediumM } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { FaThreads } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import axios from 'axios';
// import { animateScroll as scroll, scroller } from 'react-scroll';
const readingTime = require('reading-time/lib/reading-time');

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const getFormattedDateFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return getFormattedDate(date);
}

export const getFormattedDateFromISO = (iso: string) => {
  const date = new Date(iso);
  return getFormattedDate(date);
}

export const getFormattedDateFromISOWithTime = (iso: string) => {
  const date = new Date(iso);
  return `${getFormattedDate(date)} ${date.getHours()}:${date.getMinutes()}`;
}

export const randomItemFromArray = (arr: any[], n: number) => {
  return arr[Math.floor(Math.random() * n)];
};

export const navItems: NavItems = [
  {
    id: 1,
    title: 'home',
    path: '/',

  },
  { id: 3, title: 'portfolios', path: '/#portfolio' },
  { id: 4, title: 'blogs', path: '/blogs' },
  { id: 2, title: 'about', path: '/about', },
  { id: 5, title: 'contact', path: '/#contact' }
];

export const socialLinks: SocialLinks = [
  {
    id: 1,
    title: 'github',
    path: 'https://github.com/olaishola05',
    icon: BsGithub
  },
  {
    id: 2,
    title: 'linkedin',
    path: 'https://www.linkedin.com/in/ola-ishola/',
    icon: FaLinkedinIn
  },

  {
    id: 3,
    title: 'twitter',
    path: 'https://twitter.com/olaishola05',
    icon: FaXTwitter
  },
  {
    id: 4,
    title: 'Medium',
    path: 'https://medium.com/@olaishola',
    icon: FaMediumM
  },

  {
    id: 6,
    title: 'Instagram',
    path: 'https://www.instagram.com/olaishola05/',
    icon: FaInstagram
  },
  {
    id: 7,
    title: 'Hashnode',
    path: 'https://olaishola.hashnode.dev/',
    icon: FaHashnode
  },
  {
    id: 8,
    title: 'Dev.to',
    path: 'https://www.threads.net/@olaishola05',
    icon: FaThreads
  },
];

export const tabs: TabArray = [
  {
    label: 'All Projects',
    value: 'all',

  },
  {
    label: 'Frontend',
    value: 'frontend',
  },

  {
    label: 'Backend',
    value: 'backend',
  },

  {
    label: 'Fullstack',
    value: 'fullstack',
  },
]

export const sendDataToBackend = async (data: Project, url: string) => {
  try {
    const res = await axios.post(`${url}/projects`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(res)
    return res;
  } catch (error: any) {
    console.log(error)
    return error?.response?.data?.message
  }
}

export async function publishProject(id: string) {
  try {
    const response = await axios.patch(`${process.env.API_URL}/publish/${id}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export async function deleteProject(id: string) {
  try {
    const response = await axios.delete(`${process.env.API_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export async function updateProject(id: string, data: Project) {
  try {
    const response = await axios.patch(`${process.env.API_URL}/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export const projectsFilter = (projects: Project[], tag: string) => {
  return projects?.filter((project) => project.tag === tag);
}

export const resumeTabs: TabArray = [
  {
    label: 'Education',
    value: 'education',
  },
  {
    label: 'Experience',
    value: 'experience',
  },

  {
    label: 'Skills',
    value: 'skills',
  },

  {
    label: 'Certifications & Trainings',
    value: 'certifications',
  },
]

export const updateAboutInfo = async (id: string, data: About) => {
  try {
    const response = await axios.patch(`${process.env.API_URL}id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export const readTimeInfo = (content: any) => {
  const stats = readingTime(content);
  return stats.text;
}