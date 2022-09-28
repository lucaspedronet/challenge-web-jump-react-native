const desingSystem = {
  purple: {
    Dark: '#4F26C9',
    Default: '#5F2EE2',
    Lighter: '#F1F0FC',
  },
  pink: {
    Dark: '#D90191',
    Default: '#F501AB',
    Lighter: '#FFF2FB',
  },
  gradients: {
    primary: {
      color_01: '#5F2EE2',
      color_02: '#F501AB',
    },
    secondary: {
      color_01: '#F1F0FC',
      color_02: '#FFF2FB',
    },
  },
  darkNeutrals: {
    Darker: '#12121A',
    Dark: '#1D1D26',
    Default: '#292933',
    Ligth: '#3C3C47',
    Ligther: '#595966',
  },
  lightNeutrals: {
    darker: '#ADADB8',
    light: '#E6E6EB',
    white: '#FFFFFF',
  },
  uiColors: {
    success: {
      default: '#6BE784',
      lighter: '#F0FCF2',
    },
    info: {
      default: '#61DDEC',
      lighter: '#F2FBFC',
    },
    warning: {
      default: '#FFDF66',
      lighter: '#FFFCF2',
    },
    danger: {
      default: '#F9695E',
      lighter: '#FFF5F5',
    },
  },
};

const typography = {
  fontFmaily: {
    primary: { // exemplos de fontes
      Regular: 'Fonte-Regular',
      Medium: 'Fonte-Medium',
      SemiBold: 'Fonte-SemiBold',
      Bold: 'Fonte-Bold',
    },
  },
  fontWeight: {
    Bold: '700',
    SemiBold: '600',
    Medium: '500',
    Regular: '400',
  },
  lineHeight: {
    Medium: 1.2, // Indicada para títulos
    Distant: 1.5, // A altura de linha Distant é a mais indicada para parágrafos.
  },
  fontScale: {
    tagline: 10,
    caption: 11,
    xxxs: 12,
    xxs: 14,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 24,
    xl: 28,
    xxl: 32,
    xxxl: 36,
    display: 40,
  },
};

export const theme = {
  colors: {
    app: {
      black: desingSystem.darkNeutrals.Darker,
      white: desingSystem.lightNeutrals.white,
      primary: desingSystem.pink.Default,
      secodary: desingSystem.purple.Default,
    },
    statusBar: {
      default: desingSystem.darkNeutrals.Darker,
    },
    screens: {
      background: {
        default: desingSystem.darkNeutrals.Darker,
      },
    },
    button: {
      primary: {
        Enabled: desingSystem.purple.Default,
        Disabled: desingSystem.darkNeutrals.Dark,
      },
    },
    title: {
      white: desingSystem.lightNeutrals.white,
    },
    paragraph: {
      default: desingSystem.lightNeutrals.darker,
      white: desingSystem.lightNeutrals.white,
      danger: desingSystem.uiColors.danger,
      success: desingSystem.uiColors.success.default,
      placeholder: desingSystem.darkNeutrals.Ligther,
    },
    label: {
      Enabled: desingSystem.lightNeutrals.white,
      Disabled: desingSystem.darkNeutrals.Ligth,
    },
    icon: {
      default: 'rgba(255, 255, 255, 1)',
      primary: 'rgba(94, 221, 95, 1)',
      successLight: 'rgba(94, 221, 95, 0.1)',
      secondary: 'rgba(43, 47, 67, 1)',
      gray: 'rgba(211, 218, 228, 1)',
      grayLight: 'rgba(245, 246, 248, 1)',
    },
    tabBar: {
      icon: {
        active: desingSystem.lightNeutrals.white,
        inactive: desingSystem.lightNeutrals.darker,
      },
      badge: desingSystem.pink.Default,
    },
  },
  size: {
    card: {
      height: {
        small: 40,
        default: 120,
        large: 145,
        zero: 0,
      },
      width: {
        default: 100,
        medium: '50%',
        zero: '0',
      },
    },
    padding: {
      default: 20,
      large: 24,
      small: 16,
      zero: 0,
    },
    margin: {
      default: 20,
      small: 16,
      zero: 0,
    },
    scaleFont: {
      title: {
        small: typography.fontScale.md,
        default: typography.fontScale.lg,
      },
      paragraph: {
        small: typography.fontScale.xxxs,
        default: typography.fontScale.xxs,
        large: typography.fontScale.xs,
      },
      label: {
        default: typography.fontScale.sm,
      },
    },
    borderRadius: {
      default: 10,
      large: 24,
      medium: 2,
      zero: 0,
    },
    button: {
      small: 60,
      smallLarge: 100,
      default: 180,
    },
    styles: {
      letterSpacing: 2,
      lineHeight: 1.2,
    },
  },
  font: {
    ...typography,
    title: {
      small: typography.fontScale.sm,
      default: typography.fontScale.lg,
    },
  },
};
