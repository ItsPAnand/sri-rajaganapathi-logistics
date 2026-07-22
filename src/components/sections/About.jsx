import { Box, Grid, Typography, Stack, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { MdCheckCircle } from 'react-icons/md';

import Section from '../common/Section.jsx';
import { VALUES, TIMELINE } from '../../constants/content.js';
import { COMPANY } from '../../constants/company.js';
import { BRAND } from '../../theme/index.js';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About SRL"
      title={
        <>
          A quiet standard of{' '}
          <Box component="span" className="gradient-text">excellence</Box> in Tamil Nadu logistics.
        </>
      }
      lead={`${COMPANY.name} was founded to solve one problem well: moving pharmaceutical and time-sensitive cargo the way it actually deserves to be handled. Over the years, that discipline has extended to industrial and commercial customers who value the same standard.`}
    >
      <Grid container spacing={{ xs: 5, md: 6 }}>
        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
            <MissionCard
              badge="Mission"
              text="Deliver every medical, cold-chain and industrial consignment with the safety, timing and care our clients would give it themselves."
            />
            <MissionCard
              badge="Vision"
              text="To be the most trusted specialty logistics partner in South India for healthcare and high-value goods — recognised for quiet, uncompromising reliability."
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container spacing={2.5}>
            {VALUES.map((v, i) => (
              <Grid item xs={12} sm={6} key={v.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Card
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 4,
                      transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 24px 40px -24px rgba(10,43,92,0.25)',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1.4} alignItems="center">
                      <MdCheckCircle color={BRAND.accent.main} size={22} />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {v.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.2 }}>
                      {v.text}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Timeline */}
      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <Typography
          variant="subtitle2"
          sx={{ color: 'secondary.main', letterSpacing: '0.16em', mb: 1.5 }}
        >
          — OUR JOURNEY
        </Typography>
        <Typography variant="h3" component="h3" sx={{ mb: 5 }}>
          From a single Salem route to enterprise operations.
        </Typography>

        <Box sx={{ position: 'relative', pl: { xs: 2, md: 0 } }}>
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              left: { xs: 8, md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              background:
                'linear-gradient(180deg, rgba(245,166,35,0.5), rgba(16,185,129,0.5))',
              transform: { md: 'translateX(-50%)' },
            }}
          />

          <Stack spacing={4}>
            {TIMELINE.map((item, i) => (
              <TimelineRow key={item.year} item={item} index={i} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Section>
  );
}

function MissionCard({ badge, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          background:
            'linear-gradient(135deg, rgba(10,43,92,0.04) 0%, rgba(245,166,35,0.05) 100%)',
          borderColor: 'transparent',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: 'secondary.main', letterSpacing: '0.14em' }}
        >
          {badge}
        </Typography>
        <Typography sx={{ mt: 1.5, fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
          {text}
        </Typography>
      </Card>
    </motion.div>
  );
}

function TimelineRow({ item, index }) {
  const isRight = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ order: { md: isRight ? 1 : 2 }, textAlign: { md: isRight ? 'right' : 'left' } }}>
          <Card
            sx={{
              display: 'inline-block',
              maxWidth: 460,
              p: 3,
              borderRadius: 4,
              textAlign: 'left',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
              {item.year}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {item.text}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} sx={{ order: { md: isRight ? 2 : 1 } }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: isRight ? 'flex-start' : 'flex-end',
            }}
          >
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#F5A623,#10B981)',
                boxShadow: '0 0 0 6px rgba(245,166,35,0.15)',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}
