import { Box, Grid, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

import Section from '../common/Section.jsx';
import { PROCESS_STEPS } from '../../constants/services.js';

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="Our Process"
      title={
        <>
          A six-step rhythm you can{' '}
          <Box component="span" className="gradient-text">rely on</Box>.
        </>
      }
      lead="From first enquiry to confirmed delivery — a repeatable, low-drama workflow tuned for pharma and B2B."
    >
      <Grid container spacing={2.5}>
        {PROCESS_STEPS.map((step, i) => (
          <Grid item xs={12} sm={6} md={4} key={step.step}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 300ms cubic-bezier(0.22,1,0.36,1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 24px 40px -24px rgba(10,43,92,0.28)',
                    borderColor: 'secondary.main',
                  },
                }}
              >
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 18,
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: 46, md: 60 },
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, rgba(245,166,35,0.22), rgba(16,185,129,0.18))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {step.step}
                </Typography>
                <Box sx={{ pr: { xs: 8, md: 10 } }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.text}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
