import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#161b22',
    borderColor: '#30363d',

    focus: {
      backgroundColor: 'rgba(88, 166, 255, 0.1)',
    },
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e69e',

    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
