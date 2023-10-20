import { NavItems, SocialLinks, TabArray, Project, About } from "@/types";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InfoIcon from '@mui/icons-material/Info';
// import WorkIcon from '@mui/icons-material/Work';
// import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
// import RssFeedIcon from '@mui/icons-material/RssFeed';
// import { FaMedium, FaAngellist } from 'react-icons/fa'
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

// export const navItems: NavItems = [
//   {
//     id: 1,
//     title: 'home',
//     path: '/',

//   },
//   { id: 2, title: 'about', path: '/about', },
//   { id: 4, title: 'blogs', path: '/#blogs-section', link: 'blogs' },
//   { id: 5, title: 'contact', path: '/#contact-section', link: 'contact-form' }
// ];

// export const socialLinks: SocialLinks = [
//   {
//     id: 1,
//     title: 'github',
//     path: 'https://github.com/olaishola05',
//     icon: GitHubIcon
//   },
//   {
//     id: 2,
//     title: 'linkedin',
//     path: 'https://www.linkedin.com/in/ola-ishola/',
//     icon: LinkedInIcon
//   },

//   {
//     id: 3,
//     title: 'twitter',
//     path: 'https://twitter.com/olaishola05',
//     icon: TwitterIcon
//   },
//   {
//     id: 4,
//     title: 'Medium',
//     path: 'https://medium.com/@olaishola',
//     icon: FaMedium
//   },
//   {
//     id: 5,
//     title: 'AngelList',
//     path: 'https://angel.co/u/ola-ishola',
//     icon: FaAngellist
//   }
// ];

// export const tabs: TabArray = [
//   {
//     label: 'All Projects',
//     value: 'all',

//   },
//   {
//     label: 'Frontend',
//     value: 'frontend',
//   },

//   {
//     label: 'Backend',
//     value: 'backend',
//   },

//   {
//     label: 'Fullstack',
//     value: 'fullstack',
//   },
// ]

// export const adminNavItems: NavItems = [
//   {
//     id: 1,
//     title: 'projects',
//     path: '/admin/projects',
//     icon: WorkIcon
//   },

//   { id: 2, title: 'blogs', path: '/admin/blogs', icon: RssFeedIcon },
//   { id: 3, title: 'contact', path: '/admin/contact', icon: ContactEmergencyIcon }
// ];

export const sendDataToBackend = async (data: Project) => {
  try {
    const res = await axios.post('/api/v1/projects', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return res;
  } catch (error: any) {
    return error?.response?.data?.message
  }
}

export async function publishProject(id: string) {
  try {
    const response = await axios.put(`/api/v1/projects/publish/${id}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export async function deleteProject(id: string) {
  try {
    const response = await axios.delete(`/api/v1/projects/${id}`);
    return response.data;
  } catch (error: any) {
    return error?.response?.data?.message;
  }
}

export async function updateProject(id: string, data: Project) {
  try {
    const response = await axios.put(`/api/v1/projects/${id}`, data, {
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

// export function scrollToViewMethod(id: string) {
//   scroller.scrollTo(id, {
//     duration: 1500,
//     delay: 100,
//     smooth: 'easeOutCubic',
//     offset: 50,
//   })
// }

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
    const response = await axios.put(`/api/v1/about/${id}`, data, {
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