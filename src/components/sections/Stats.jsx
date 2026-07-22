import { Box, Container, Grid, Typography } from '@mui/material';
import { useCountUp } from '../../hooks/useCountUp.js';
import { STATS } from '../../constants/company.js';
import { formatNumber } from '../../utils/format.js';
import { gradients } from '../../theme/index.js';

export default function Stats() {
  return (
    <Box
      component="section"
      id="stats"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        color: '#fff',
        overflow: 'hidden',
        background: gradients.hero,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          background:
            'radial-gradient(500px 260px at 15% 20%, rgba(245,166,35,0.15), transparent 60%), radial-gradient(500px 260px at 85% 80%, rgba(16,185,129,0.15), transparent 60%)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 4, md: 3 }}>
          {STATS.map((s) => (
            <Grid item xs={6} md={3} key={s.label}>
              <StatItem stat={s} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function StatItem({ stat }) {
  const { ref, value } = useCountUp(stat.value, 2.4);
  return (
    <Box ref={ref} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
      <Typography
        sx={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 800,
          fontSize: { xs: '2.4rem', md: '3.4rem' },
          letterSpacing: '-0.03em',
          lineHeight: 1,
          background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {formatNumber(value)}
        <Box component="span" sx={{ color: '#F5A623', ml: 0.5 }}>{stat.suffix}</Box>
      </Typography>
      <Typography
        sx={{
          mt: 1,
          color: 'rgba(255,255,255,0.72)',
          fontSize: { xs: 13.5, md: 15 },
          fontWeight: 500,
          letterSpacing: 0.4,
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  );
}
