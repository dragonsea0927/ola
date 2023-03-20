import { NavItems } from "@/types";

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

export const navItems: NavItems = [
  { id: 1, title: 'hello', path: '' },
  { id: 2, title: 'about', path: '/about' },
  {
    id: 3,
    title: 'projects',
    path: '/projects'
  },
  { id: 4, title: 'blogs', path: '/blog' },
  { id: 5, title: 'contact', path: '/contact' }
];

export const navItemsAdmin = [
  { title: '_hello', path: '' },
  { title: 'Projects', path: '/projects' },
  { title: 'About', path: '/about' },
  { title: 'Blogs', path: '/blog' },
  { title: 'Contact', path: '/contact' },
  { title: 'Admin', path: '/admin' }
];