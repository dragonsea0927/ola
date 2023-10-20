'use client';

import { useTheme } from '@mui/material/styles';

const useAppTheme = () => {
  const theme = useTheme();
  return theme;
}

export default useAppTheme;