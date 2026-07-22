import { Box, Card, Chip, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';

import Section from '../common/Section.jsx';
import { SERVICES } from '../../constants/services.js';
import { BRAND } from '../../theme/index.js';

const ACCENT = {
  primary: { color: BRAND.primary.dark, glow: 'rgba(15,58,120,0.35)', bg: BRAND.primary.lightest },
  secondary: { color: BRAND.secondary.main, glow: 'rgba(245,166,35,0.4)', bg: BRAND.secondary.lightest },
  accent: { color: BRAND.accent.main, glow: 'rgba(16,185,129,0.35)', bg: BRAND.accent.lightest },
};

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title={
        <>
          Built for the loads that{' '}
          <Box component="span" className="gradient-text">matter most</Box>.
        </>
      }
      lead="From temperature-controlled vaccine consignments to industrial B2B lanes — one team, disciplined execution."
      bg={(t) => (t.palette.mode === 'dark'
        ? 'linear-gradient(180deg, #050B1A, #0B152B)'
        : 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)')}
    >
      <Grid container spacing={3}>
        {SERVICES.map((s, i) => (
          <Grid item xs={12} sm={6} lg={3} key={s.id}>
            <ServiceCard service={s} index={i} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

function ServiceCard({ service, index }) {
  const accent = ACCENT[service.accent] || ACCENT.primary;
  const Icon = service.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          p: 3.2,
          height: '100%',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms, border-color 300ms',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            padding: '1px',
            borderRadius: 'inherit',
            background: `linear-gradient(135deg, ${accent.color}00, ${accent.color}00)`,
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            transition: 'background 300ms',
            pointerEvents: 'none',
          },
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: `0 30px 60px -30px ${accent.glow}`,
            borderColor: 'transparent',
          },
          '&:hover::before': {
            background: `linear-gradient(135deg, ${accent.color}, transparent 70%)`,
          },
        }}
      >
        {service.featured && (
          <Chip
            label="Signature Service"
            size="small"
            sx={{
              position: 'absolute',
              top: 14,
              right: 14,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 0.5,
              color: BRAND.primary.darkest,
              background: 'linear-gradient(135deg,#FFC15C,#F5A623)',
            }}
          />
        )}

        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '16px',
            display: 'grid',
            placeItems: 'center',
            background: accent.bg,
            color: accent.color,
            fontSize: 28,
            mb: 2.5,
            transition: 'transform 400ms cubic-bezier(0.22,1,0.36,1)',
            'div:hover > &': { transform: 'rotate(-8deg) scale(1.05)' },
          }}
        >
          <Icon />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
          {service.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: accent.color, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase' }}
        >
          {service.subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, minHeight: 84 }}>
          {service.description}
        </Typography>

        <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
          {service.highlights.map((h) => (
            <Chip
              key={h}
              label={h}
              size="small"
              variant="outlined"
              sx={{
                fontSize: 11.5,
                fontWeight: 600,
                borderColor: (t) => t.palette.divider,
                color: 'text.secondary',
                '.MuiChip-label': { px: 1 },
              }}
            />
          ))}
        </Stack>

        <Box
          component="a"
          href="#contact"
          sx={{
            mt: 2.5,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontWeight: 700,
            fontSize: 13.5,
            color: accent.color,
            transition: 'gap 200ms ease',
            '&:hover': { gap: 1.4 },
          }}
        >
          Enquire now <MdArrowOutward />
        </Box>
      </Card>
    </motion.div>
  );
}
