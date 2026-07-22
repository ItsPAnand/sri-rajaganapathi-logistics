import { createTheme, alpha } from '@mui/material/styles';

/**
 * SRL brand palette
 * Primary  — Deep Corporate Blue
 * Secondary — Warm Orange (energy, trust, ETA)
 * Accent   — Emerald Green (medical, safe, on-time)
 */
export const BRAND = {
    primary: {
        darkest: '#061A3A',
        dark: '#0A2B5C',
        main: '#0F3A78',
        light: '#1E4B8F',
        lightest: '#E6EEF9',
    },
    secondary: {
        dark: '#C97C0F',
        main: '#F5A623',
        light: '#FFC15C',
        lightest: '#FEF3E1',
    },
    accent: {
        dark: '#047857',
        main: '#10B981',
        light: '#34D399',
        lightest: '#E7F8F1',
    },
    neutral: {
        900: '#0B1220',
        800: '#111827',
        700: '#1F2937',
        600: '#4B5563',
        500: '#6B7280',
        400: '#9CA3AF',
        300: '#D1D5DB',
        200: '#E5E7EB',
        100: '#F3F4F6',
        50: '#F8FAFC',
        0: '#FFFFFF',
    },
};

export const buildTheme = (mode = 'light') => {
    const isDark = mode === 'dark';

    return createTheme({
        palette: {
            mode,
            primary: {
                main: BRAND.primary.dark,
                light: BRAND.primary.light,
                dark: BRAND.primary.darkest,
                contrastText: '#fff',
            },
            secondary: {
                main: BRAND.secondary.main,
                light: BRAND.secondary.light,
                dark: BRAND.secondary.dark,
                contrastText: BRAND.primary.darkest,
            },
            success: {
                main: BRAND.accent.main,
                light: BRAND.accent.light,
                dark: BRAND.accent.dark,
                contrastText: '#fff',
            },
            background: {
                default: isDark ? '#050B1A' : '#FFFFFF',
                paper: isDark ? '#0B152B' : '#FFFFFF',
            },
            text: {
                primary: isDark ? '#E5E7EB' : BRAND.neutral[900],
                secondary: isDark ? '#9CA3AF' : BRAND.neutral[600],
            },
            divider: isDark ? alpha('#fff', 0.08) : alpha(BRAND.primary.dark, 0.08),
        },
        shape: {
            borderRadius: 14,
        },
        typography: {
            fontFamily: `'Inter', 'Manrope', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
            h1: {
                fontFamily: `'Manrope', 'Outfit', sans-serif`,
                fontWeight: 800,
                fontSize: 'clamp(2.5rem, 5vw + 1rem, 5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
            },
            h2: {
                fontFamily: `'Manrope', 'Outfit', sans-serif`,
                fontWeight: 800,
                fontSize: 'clamp(2rem, 3vw + 1rem, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
            },
            h3: {
                fontFamily: `'Manrope', sans-serif`,
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 2vw + 0.8rem, 2.25rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
            },
            h4: {
                fontFamily: `'Manrope', sans-serif`,
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: 1.25,
                letterSpacing: '-0.015em',
            },
            h5: {
                fontFamily: `'Manrope', sans-serif`,
                fontWeight: 700,
                fontSize: '1.25rem',
                lineHeight: 1.3,
            },
            h6: {
                fontFamily: `'Manrope', sans-serif`,
                fontWeight: 700,
                fontSize: '1.05rem',
                lineHeight: 1.4,
            },
            subtitle1: { fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.6 },
            subtitle2: { fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem' },
            body1: { fontSize: '1rem', lineHeight: 1.7 },
            body2: { fontSize: '0.925rem', lineHeight: 1.65 },
            button: { fontWeight: 700, letterSpacing: '0.02em', textTransform: 'none' },
        },
        components: {
            MuiButton: {
                defaultProps: { disableElevation: true },
                styleOverrides: {
                    root: {
                        borderRadius: 999,
                        padding: '10px 22px',
                        transition: 'transform 200ms cubic-bezier(0.22,1,0.36,1), box-shadow 200ms',
                        '&:hover': { transform: 'translateY(-1px)' },
                    },
                    containedPrimary: {
                        background: `linear-gradient(135deg, ${BRAND.primary.dark} 0%, ${BRAND.primary.light} 100%)`,
                        boxShadow: `0 10px 24px -12px ${alpha(BRAND.primary.dark, 0.55)}`,
                    },
                    containedSecondary: {
                        background: `linear-gradient(135deg, ${BRAND.secondary.main} 0%, ${BRAND.secondary.dark} 100%)`,
                        boxShadow: `0 10px 24px -12px ${alpha(BRAND.secondary.main, 0.55)}`,
                        color: BRAND.primary.darkest,
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: { backgroundImage: 'none' },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 20,
                        border: `1px solid ${isDark ? alpha('#fff', 0.06) : alpha(BRAND.primary.dark, 0.06)}`,
                        backgroundImage: 'none',
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: { backgroundImage: 'none' },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: 12,
                        padding: '8px 12px',
                        borderRadius: 8,
                        background: BRAND.primary.darkest,
                    },
                },
            },
            MuiLink: {
                defaultProps: { underline: 'hover' },
                styleOverrides: {
                    root: { fontWeight: 500 },
                },
            },
        },
    });
};

export const gradients = {
    primary: `linear-gradient(135deg, ${BRAND.primary.darkest} 0%, ${BRAND.primary.light} 100%)`,
    hero: `radial-gradient(1200px 600px at 15% 10%, ${alpha(BRAND.secondary.main, 0.18)}, transparent 60%),
         radial-gradient(1000px 500px at 85% 20%, ${alpha(BRAND.accent.main, 0.18)}, transparent 60%),
         linear-gradient(180deg, ${BRAND.primary.darkest} 0%, ${BRAND.primary.dark} 60%, ${BRAND.primary.main} 100%)`,
    brandText: `linear-gradient(90deg, ${BRAND.secondary.main} 0%, ${BRAND.accent.main} 100%)`,
};
