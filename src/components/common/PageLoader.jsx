import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { gradients } from '../../theme/index.js';

const containerV = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const barV = {
  animate: {
    width: ['0%', '100%'],
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageLoader() {
  return (
    <motion.div
      variants={containerV}
      initial="initial"
      exit="exit"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'grid',
        placeItems: 'center',
        background: gradients.hero,
      }}
      aria-hidden="true"
    >
      <Box sx={{ textAlign: 'center', color: '#fff', px: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            letterSpacing: '-0.02em',
          }}
        >
          SRI RAJAGANAPATHI{' '}
          <span
            style={{
              background: gradients.brandText,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            LOGISTICS
          </span>
        </motion.div>

        <Box
          sx={{
            mt: 3,
            mx: 'auto',
            width: 220,
            height: 4,
            borderRadius: 4,
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.15)',
          }}
        >
          <motion.div
            variants={barV}
            animate="animate"
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #F5A623, #10B981)',
              borderRadius: 4,
            }}
          />
        </Box>

        <Box sx={{ mt: 2, opacity: 0.7, fontSize: 13, letterSpacing: 3 }}>
          PRECISION · SAFETY · SPEED
        </Box>
      </Box>
    </motion.div>
  );
}
