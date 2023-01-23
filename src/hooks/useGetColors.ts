import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const useGetColors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return colors;
};

export default useGetColors;
