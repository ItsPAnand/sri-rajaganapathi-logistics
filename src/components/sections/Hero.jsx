import { Box, Button, Container, Grid, Stack, Typography, Chip } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { MdArrowOutward, MdVerified, MdBolt } from 'react-icons/md';
import { FaTemperatureHalf, FaTruckFast } from 'react-icons/fa6';

import { COMPANY, CONTACT } from '../../constants/company.js';
import { gradients, BRAND } from '../../theme/index.js';
import { whatsappLink } from '../../utils/format.js';
import HeroVisual from './HeroVisual.jsx';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        pt: { xs: 14, md: 18 },
        pb: { xs: 10, md: 14 },
        color: '#fff',
        overflow: 'hidden',
        background: gradients.hero,
        isolation: 'isolate',
      }}
      className="hero-grid-bg"
    >
      {/* Ambient orbs */}
      {!reduced && (
        <>
          <motion.div
            aria-hidden="true"
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '10%',
              left: '-6%',
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,166,35,0.35), transparent 60%)',
              filter: 'blur(20px)',
              zIndex: 0,
            }}
          />
          <motion.div
            aria-hidden="true"
            initial={{ y: 0 }}
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '-4%',
              width: 360,
              height: 360,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.28), transparent 60%)',
              filter: 'blur(24px)',
              zIndex: 0,
            }}
          />
        </>
      )}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6.5}>
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={rise}>
                <Chip
                  icon={<MdVerified size={16} />}
                  label="Salem · Tamil Nadu · India"
                  size="small"
                  sx={{
                    color: '#fff',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    mb: 3,
                    '& .MuiChip-icon': { color: '#F5A623' },
                  }}
                />
              </motion.div>

              <motion.div variants={rise}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    lineHeight: 1.03,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Pharma-grade{' '}
                  <Box
                    component="span"
                    sx={{
                      background: gradients.brandText,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    logistics
                  </Box>
                  , delivered with quiet precision.
                </Typography>
              </motion.div>

              <motion.div variants={rise}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'rgba(255,255,255,0.78)',
                    mt: 3,
                    maxWidth: 620,
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                  }}
                >
                  {COMPANY.name} moves time-sensitive medicines, poultry & veterinary
                  vaccines, and high-value industrial goods across Tamil Nadu — with
                  validated cold-chain packaging, disciplined crews and lanes you can
                  set your operations by.
                </Typography>
              </motion.div>

              <motion.div variants={rise}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ mt: 4.5 }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    href="#contact"
                    endIcon={<MdArrowOutward />}
                    sx={{ px: 3.5, py: 1.4, fontSize: 15.5 }}
                  >
                    Request a Quote
                  </Button>
                  <Button
                    size="large"
                    variant="outlined"
                    href={whatsappLink(
                      CONTACT.whatsapp,
                      `Hi ${COMPANY.name}, I'd like to book a shipment.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 3.5,
                      py: 1.4,
                      fontSize: 15.5,
                      color: '#fff',
                      borderColor: 'rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(6px)',
                      background: 'rgba(255,255,255,0.04)',
                      '&:hover': {
                        borderColor: '#F5A623',
                        background: 'rgba(245,166,35,0.08)',
                      },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Stack>
              </motion.div>

              <motion.div variants={rise}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 2.5, sm: 4 }}
                  sx={{ mt: 6, color: 'rgba(255,255,255,0.75)' }}
                >
                  <MetaPill icon={<FaTemperatureHalf />} label="Validated Cold-Chain" />
                  <MetaPill icon={<FaTruckFast />} label="Daily Scheduled Lanes" />
                  <MetaPill icon={<MdBolt />} label="Same-Hour Response" />
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5.5}>
            <HeroVisual />
          </Grid>
        </Grid>

        {/* Scroll indicator */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: -20,
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <Typography variant="caption" sx={{ letterSpacing: 3 }}>SCROLL</Typography>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 22,
              height: 36,
              borderRadius: 12,
              border: `1.5px solid ${BRAND.secondary.main}`,
              position: 'relative',
            }}
          >
            <motion.span
              animate={{ y: [4, 14, 4], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 4,
                height: 6,
                borderRadius: 4,
                background: BRAND.secondary.main,
                display: 'block',
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

function MetaPill({ icon, label }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.2,
        px: 1.75,
        py: 1,
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.14)',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        fontSize: 13.5,
        fontWeight: 600,
      }}
    >
      <Box sx={{ display: 'inline-flex', color: '#F5A623' }}>{icon}</Box>
      {label}
    </Box>
  );
}
