import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';

const sizes = {
  small: {
    height: '28px',
    fontSize: '12px',
  },
  medium: {
    height: '34px',
    fontSize: '14px',
  },
  large: {
    height: '40px',
    fontSize: '16px',
  },
};

export const { useTheme } = defineThemes({
  dark: {
    sizes,

    backgroundColor: '#0d1117',
    borderColor: '#30363d',
    dropdownShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px',

    option: {
      hover: {
        backgroundColor: 'rgba(88, 166, 255, 0.1)',
      },
      active: {
        textColor: '#58a6ff',
      },
    },

    focus: {
      backgroundColor: '#1ea54c1a',
    },
  },
  light: {
    sizes,

    backgroundColor: '#f6f8fa',
    borderColor: '#d0d7de',
    dropdownShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',

    option: {
      hover: {
        backgroundColor: '#eaeef2',
      },
      active: {
        textColor: appThemes.light.primary.color,
      },
    },

    focus: {
      backgroundColor: '#ffffff',
    },
  },
});
