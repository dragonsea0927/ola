import { NavItems } from "@/types";

export const getFormattedDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export const randomNumberGenerator = () => {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

export const navItems: NavItems = [
  {
    id: randomNumberGenerator(),
    title: 'Projects',
    path: '/projects'
  },
  { id: randomNumberGenerator(), title: 'About', path: '/about' },
  { id: randomNumberGenerator(), title: 'Blogs', path: '/blog' },
  { id: randomNumberGenerator(), title: 'Contact', path: '/contact' }
];

export const navItemsAdmin = [
  { title: 'Projects', path: '/projects' },
  { title: 'About', path: '/about' },
  { title: 'Blogs', path: '/blog' },
  { title: 'Contact', path: '/contact' },
  { title: 'Admin', path: '/admin' }
];