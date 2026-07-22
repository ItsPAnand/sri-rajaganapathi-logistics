import { useState, useEffect } from 'react';
import { Box, Card, IconButton, Stack, Typography, Avatar } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowBackIos, MdArrowForwardIos, MdFormatQuote } from 'react-icons/md';

import Section from '../common/Section.jsx';
import { TESTIMONIALS } from '../../constants/content.js';
import { BRAND } from '../../theme/index.js';

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [total]);

  const next = () => setI((v) => (v + 1) % total);
  const prev = () => setI((v) => (v - 1 + total) % total);

  const t = TESTIMONIALS[i];

  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      align="center"
      title={
        <>
          Trusted by the businesses{' '}
          <Box component="span" className="gradient-text">we deliver for</Box>.
        </>
      }
      lead="A few words from hospital pharmacists, distributors, manufacturers and exporters we serve."
    >
      <Box sx={{ maxWidth: 900, mx: 'auto', position: 'relative' }}>
        <Card
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: (th) => (th.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
              : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)'),
            boxShadow: '0 30px 60px -30px rgba(10,43,92,0.2)',
          }}
        >
          <MdFormatQuote
            aria-hidden="true"
            size={64}
            color={BRAND.secondary.main}
            style={{ opacity: 0.35, position: 'absolute', top: 20, left: 20 }}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: { xs: '1.2rem', md: '1.6rem' },
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                  mb: 4,
                }}
              >
                “{t.quote}”
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg,#F5A623,#10B981)',
                    color: '#0A2B5C',
                  }}
                >
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </Avatar>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontWeight: 700 }}>{t.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.role} · {t.company}
                  </Typography>
                </Box>
              </Stack>
            </motion.div>
          </AnimatePresence>
        </Card>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <IconButton onClick={prev} aria-label="Previous testimonial" sx={ctlSx}>
            <MdArrowBackIos style={{ marginLeft: 6 }} />
          </IconButton>

          <Stack direction="row" spacing={0.75} alignItems="center">
            {TESTIMONIALS.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setI(idx)}
                role="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                sx={{
                  cursor: 'pointer',
                  width: idx === i ? 30 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: idx === i ? 'linear-gradient(90deg,#F5A623,#10B981)' : 'divider',
                  transition: 'width 300ms ease, background 300ms ease',
                }}
              />
            ))}
          </Stack>

          <IconButton onClick={next} aria-label="Next testimonial" sx={ctlSx}>
            <MdArrowForwardIos />
          </IconButton>
        </Stack>
      </Box>
    </Section>
  );
}

const ctlSx = {
  border: (t) => `1px solid ${t.palette.divider}`,
  color: 'text.primary',
  '&:hover': { color: 'secondary.main', borderColor: 'secondary.main' },
};
