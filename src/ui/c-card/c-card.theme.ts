import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#161b22',
    borderColor: '#282828',
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#efeff5',
  },
});
