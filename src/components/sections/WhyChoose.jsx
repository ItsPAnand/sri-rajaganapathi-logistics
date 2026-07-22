import { Box, Grid, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

import Section from '../common/Section.jsx';
import { WHY_CHOOSE } from '../../constants/services.js';

export default function WhyChoose() {
  return (
    <Section
      id="why"
      eyebrow="Why SRL"
      title={
        <>
          Reliability that businesses can{' '}
          <Box component="span" className="gradient-text">plan around</Box>.
        </>
      }
      lead="Eight everyday reasons why hospitals, distributors and manufacturers choose Sri Rajaganapathi Logistics."
    >
      <Grid container spacing={2.5}>
        {WHY_CHOOSE.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={item.title}>
            <FeatureCard item={item} index={i} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

function FeatureCard({ item, index }) {
  const Icon = item.Icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      <Card
        sx={{
          p: 3,
          height: '100%',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 300ms cubic-bezier(0.22,1,0.36,1)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 3,
            background: 'linear-gradient(90deg,#F5A623,#10B981)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 400ms cubic-bezier(0.22,1,0.36,1)',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 24px 40px -24px rgba(10,43,92,0.22)',
          },
          '&:hover::after': { transform: 'scaleX(1)' },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '14px',
            display: 'grid',
            placeItems: 'center',
            background: 'linear-gradient(135deg, rgba(245,166,35,0.14), rgba(16,185,129,0.14))',
            color: 'secondary.main',
            fontSize: 22,
            mb: 2,
          }}
        >
          <Icon />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </Card>
    </motion.div>
  );
}
