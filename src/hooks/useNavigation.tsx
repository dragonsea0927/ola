import { useRouter } from 'next/router';

const useNavigation = () => {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
  };

  return { navigate, router };
}

export default useNavigation;