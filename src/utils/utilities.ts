import { NavItems, SocialLinks } from "@/types";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

export const navItems: NavItems = [
  { id: 1, title: 'hello', path: '' },
  { id: 2, title: 'about', path: '' },
  {
    id: 3,
    title: 'projects',
    path: ''
  },
  { id: 4, title: 'blogs', path: '' },
  { id: 5, title: 'contact', path: '' }
];

export const navItemsAdmin = [
  { title: '_hello', path: '' },
  { title: 'Projects', path: '/projects' },
  { title: 'About', path: '/about' },
  { title: 'Blogs', path: '/blog' },
  { title: 'Contact', path: '/contact' },
  { title: 'Admin', path: '/admin' }
];

export const socialLinks: SocialLinks = [
  {
    id: 1,
    title: 'github',
    path: '',
    icon: GitHubIcon
  },
  {
    id: 2,
    title: 'linkedin',
    path: '',
    icon: LinkedInIcon
  },

  {
    id: 3,
    title: 'twitter',
    path: '',
    icon: TwitterIcon
  }
];