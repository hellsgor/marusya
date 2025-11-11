export const PALETTE = {
  bg: {
    white: '#fff',
    preBlack: '#0a0b0b',
    gray: '#616161',
    secondary: {
      static: '#393b3c',
      disabled: '#747474',
    },
    backdrop: {
      default: 'rgba(0, 0, 0, 0.5)',
      tailer: {
        desktop: 'rgba(10, 11, 11, 0.9)',
        mobile: '#000',
      },
    },
    gr1: 'linear-gradient(179deg, rgba(39, 135, 245, 0.18) -17.53%, rgba(163, 147, 245, 0.18) 131.74%)',
    gr2: 'linear-gradient(180deg, #000 0%, rgba(39, 36, 36, 0.7) 100%)',
  },

  content: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    thirdly: 'rgba(255, 255, 255, 0.8)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    placeholder: 'rgba(0, 0, 0, 0.4)',
    black: '#000',
    brand: '#6a5dc2',
  },

  rate: {
    gold: '#a59400',
    green: '#308e21',
    gray: '#777',
    red: '#c82020',
  },

  accent: {
    primary: {
      static: '#67a5eb',
      hover: '#5a99e0',
      disabled: '#45526e',
    },
    secondary: '#dc5dfc',
    active: '#b4a9ff',
    error: '#ff7575',
  },
} as const;

export type Palette = typeof PALETTE;
