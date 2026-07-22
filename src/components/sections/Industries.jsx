import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import Section from '../common/Section.jsx';
import { INDUSTRIES } from '../../constants/services.js';

export default function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries Served"
      title={
        <>
          One team.{' '}
          <Box component="span" className="gradient-text">Every vertical.</Box>
        </>
      }
      lead="Specialists in healthcare and pharma — extended to industrial, textile, electronics and retail supply chains."
      bg={(t) => (t.palette.mode === 'dark'
        ? 'linear-gradient(180deg, #0B152B 0%, #050B1A 100%)'
        : 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)')}
    >
      <Grid container spacing={2}>
        {INDUSTRIES.map((ind, i) => {
          const Icon = ind.Icon;
          return (
            <Grid item xs={6} sm={4} md={3} key={ind.name}>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    height: '100%',
                    borderRadius: 4,
                    background: (t) => (t.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                      : 'linear-gradient(135deg, #ffffff 0%, #F8FAFC 100%)'),
                    border: (t) => `1px solid ${t.palette.divider}`,
                    textAlign: 'center',
                    transition: 'all 300ms cubic-bezier(0.22,1,0.36,1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: 'transparent',
                      boxShadow: '0 22px 40px -20px rgba(10,43,92,0.28)',
                      background:
                        'linear-gradient(135deg, rgba(245,166,35,0.06), rgba(16,185,129,0.06))',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 1.5,
                      borderRadius: '18px',
                      display: 'grid',
                      placeItems: 'center',
                      color: 'primary.main',
                      fontSize: 28,
                      background:
                        'linear-gradient(135deg, rgba(15,58,120,0.08), rgba(245,166,35,0.08))',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 14.5 }}>
                    {ind.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
}
