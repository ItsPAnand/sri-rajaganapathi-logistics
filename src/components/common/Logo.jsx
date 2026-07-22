import { Box } from '@mui/material';
import { gradients } from '../../theme/index.js';

/**
 * Reusable brand mark (icon + wordmark).
 * `compact` renders only the icon square. `variant` switches text colour.
 */
export default function Logo({ compact = false, variant = 'auto' }) {
  const textColor =
    variant === 'light' ? '#fff' : variant === 'dark' ? '#0A2B5C' : 'text.primary';
  const subColor =
    variant === 'light' ? 'rgba(255,255,255,0.7)' : variant === 'dark' ? '#4B5563' : 'text.secondary';

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.25, minWidth: 0 }}>
      <Box
        aria-hidden="true"
        sx={{
          width: 44,
          height: 44,
          borderRadius: '14px',
          background: gradients.primary,
          display: 'grid',
          placeItems: 'center',
          color: '#fff',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: 1,
          boxShadow: '0 8px 20px -8px rgba(10,43,92,0.55)',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(80px 40px at 30% 25%, rgba(255,255,255,0.35), transparent 60%)',
          },
        }}
      >
        SRL
      </Box>
      {!compact && (
        <Box sx={{ lineHeight: 1.1, minWidth: 0 }}>
          <Box
            component="span"
            sx={{
              display: 'block',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 800,
              fontSize: { xs: 13.5, md: 14.5 },
              letterSpacing: '-0.01em',
              color: textColor,
              whiteSpace: 'nowrap',
            }}
          >
            SRI RAJAGANAPATHI
          </Box>
          <Box
            component="span"
            sx={{
              display: 'block',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontSize: 10.5,
              letterSpacing: '0.32em',
              color: subColor,
            }}
          >
            L O G I S T I C S
          </Box>
        </Box>
      )}
    </Box>
  );
}
