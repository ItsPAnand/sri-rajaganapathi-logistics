import { Box, Card, Chip, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MdLocationOn } from 'react-icons/md';

import Section from '../common/Section.jsx';
import { REGULAR_ROUTES, LOCAL_ROUTES } from '../../constants/company.js';

/**
 * Stylised, non-geographic Tamil Nadu "service map". A real interactive map
 * (e.g. react-simple-maps + a TN GeoJSON) can be dropped in later without
 * changing the surrounding layout.
 */
const HUBS = [
  { id: 'salem', name: 'Salem', x: 44, y: 55, hub: true },
  { id: 'chennai', name: 'Chennai', x: 82, y: 46 },
  { id: 'coimbatore', name: 'Coimbatore', x: 24, y: 72 },
  { id: 'erode', name: 'Erode', x: 34, y: 66 },
  { id: 'karur', name: 'Karur', x: 40, y: 68 },
  { id: 'namakkal', name: 'Namakkal', x: 42, y: 62 },
  { id: 'dharmapuri', name: 'Dharmapuri', x: 52, y: 44 },
  { id: 'krishnagiri', name: 'Krishnagiri', x: 58, y: 36 },
  { id: 'hosur', name: 'Hosur', x: 60, y: 30 },
  { id: 'villupuram', name: 'Villupuram', x: 74, y: 54 },
  { id: 'pondicherry', name: 'Pondicherry', x: 82, y: 58 },
];

export default function ServiceAreas() {
  return (
    <Section
      id="coverage"
      eyebrow="Service Areas"
      title={
        <>
          Salem-based. Operating{' '}
          <Box component="span" className="gradient-text">across Tamil Nadu</Box>.
        </>
      }
      lead="Regular daily lanes into major Tamil Nadu cities and a local network across the Salem–Namakkal–Dharmapuri–Krishnagiri belt."
      bg={(t) => (t.palette.mode === 'dark'
        ? 'linear-gradient(180deg, #050B1A, #0B152B)'
        : 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)')}
    >
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <Card sx={{ p: { xs: 2, md: 3 }, borderRadius: 5, height: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 4,
                overflow: 'hidden',
                background:
                  'linear-gradient(135deg, rgba(15,58,120,0.05) 0%, rgba(245,166,35,0.05) 100%)',
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(rgba(10,43,92,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,43,92,0.06) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              {/* Connection lines from Salem hub */}
              <Box
                component="svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                aria-hidden="true"
              >
                {HUBS.filter((h) => !h.hub).map((h) => (
                  <line
                    key={h.id}
                    x1="44"
                    y1="55"
                    x2={h.x}
                    y2={h.y}
                    stroke="rgba(245,166,35,0.5)"
                    strokeWidth="0.35"
                    strokeDasharray="1.2 1.2"
                  />
                ))}
              </Box>

              {HUBS.map((h) => (
                <motion.div
                  key={h.id}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  style={{
                    position: 'absolute',
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    transform: 'translate(-50%, -100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: h.hub ? 42 : 26,
                      height: h.hub ? 42 : 26,
                      borderRadius: '50%',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#fff',
                      background: h.hub
                        ? 'linear-gradient(135deg,#F5A623,#C97C0F)'
                        : 'linear-gradient(135deg,#0F3A78,#1E4B8F)',
                      boxShadow: h.hub
                        ? '0 12px 26px -10px rgba(245,166,35,0.6)'
                        : '0 10px 20px -10px rgba(15,58,120,0.55)',
                    }}
                  >
                    <MdLocationOn size={h.hub ? 22 : 14} />
                    {h.hub && (
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: -8,
                          borderRadius: '50%',
                          border: '2px solid rgba(245,166,35,0.35)',
                          animation: 'pulse 2s ease-out infinite',
                          '@keyframes pulse': {
                            '0%': { transform: 'scale(0.9)', opacity: 0.9 },
                            '100%': { transform: 'scale(1.6)', opacity: 0 },
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: h.hub ? 13 : 11,
                      fontWeight: h.hub ? 800 : 600,
                      color: h.hub ? 'secondary.main' : 'text.primary',
                      textShadow: '0 1px 0 rgba(255,255,255,0.6)',
                    }}
                  >
                    {h.name}
                  </Typography>
                </motion.div>
              ))}
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, textAlign: 'center' }}>
              Indicative service map — not to scale.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
            <RouteBlock title="Regular Service" chips={REGULAR_ROUTES} accent="secondary" />
            <RouteBlock title="Local Service" chips={LOCAL_ROUTES} accent="accent" />
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}

function RouteBlock({ title, chips, accent }) {
  const colorSx = accent === 'secondary'
    ? { chipBg: 'rgba(245,166,35,0.1)', chipColor: '#C97C0F', border: 'rgba(245,166,35,0.35)' }
    : { chipBg: 'rgba(16,185,129,0.1)', chipColor: '#047857', border: 'rgba(16,185,129,0.35)' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card sx={{ p: { xs: 3, md: 3.5 }, borderRadius: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: accent === 'secondary' ? 'linear-gradient(135deg,#F5A623,#C97C0F)' : 'linear-gradient(135deg,#10B981,#047857)',
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>{title}</Typography>
        </Stack>
        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap">
          {chips.map((c) => (
            <Chip
              key={c}
              label={c}
              variant="outlined"
              sx={{
                borderColor: colorSx.border,
                color: colorSx.chipColor,
                background: colorSx.chipBg,
                fontWeight: 600,
                fontSize: 13,
              }}
            />
          ))}
        </Stack>
      </Card>
    </motion.div>
  );
}
