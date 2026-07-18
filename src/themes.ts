import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemHeight: '32px',
  },

  Layout: { color: '#f1f5f9' },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#58a6ff',
    primaryColorHover: '#79c0ff',
    primaryColorPressed: '#3b8bff',
    primaryColorSuppl: '#79c0ff',
    errorColor: '#f85149',
    warningColor: '#d29922',
    successColor: '#3fb950',
    infoColor: '#58a6ff',
    textColorBase: '#c9d1d9',
    bodyColor: '#0d1117',
    borderColor: '#30363d',
  },

  Notification: {
    color: '#161b22',
    textColor: '#c9d1d9',
    title: { textColor: '#c9d1d9' },
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#161b22' },
    },
  },

  Menu: {
    itemHeight: '32px',
    color: '#0a0d12',
    itemColorHover: '#21262d',
    itemColorActive: '#21262d',
    itemColorActiveCollapsed: '#21262d',
  },

  Layout: {
    color: '#0d1117',
    siderColor: '#0a0d12',
    siderBorderColor: '#30363d',
  },

  Card: {
    color: '#161b22',
    borderColor: '#30363d',
    titleTextColor: '#c9d1d9',
    textColor: '#c9d1d9',
  },

  Table: {
    tdColor: '#161b22',
    thColor: '#21262d',
    borderColor: '#30363d',
    textColor: '#c9d1d9',
  },

  Input: {
    color: '#1b222c',
    textColor: '#c9d1d9',
    border: '#3b434c',
    borderHover: '#58a6ff',
    borderFocus: '#58a6ff',
    boxShadowFocus: '0 0 0 3px rgba(88, 166, 255, 0.1)',
  },

  Button: {
    color: '#21262d',
    textColor: '#c9d1d9',
    border: '#30363d',
    borderHover: '#58a6ff',
    textColorHover: '#58a6ff',
  },

  Select: {
    color: '#1b222c',
    textColor: '#c9d1d9',
    border: '#3b434c',
    borderHover: '#58a6ff',
  },

  Modal: {
    color: '#161b22',
    textColor: '#c9d1d9',
  },

  Drawer: {
    color: '#161b22',
    textColor: '#c9d1d9',
  },

  Dialog: {
    color: '#161b22',
    textColor: '#c9d1d9',
  },
};
