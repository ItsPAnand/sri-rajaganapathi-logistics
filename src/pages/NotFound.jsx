import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdArrowBack } from 'react-icons/md';

import Seo from '../components/common/Seo.jsx';
import { gradients } from '../theme/index.js';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="We couldn’t find that page." path="/404" />
      <Box
        sx={{
          minHeight: '90vh',
          display: 'grid',
          placeItems: 'center',
          color: '#fff',
          background: gradients.hero,
          textAlign: 'center',
          py: 10,
        }}
      >
        <Container maxWidth="sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              sx={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(6rem, 18vw, 12rem)',
                lineHeight: 1,
                background: gradients.brandText,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              404
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>
              This lane isn’t on our route.
            </Typography>
            <Typography sx={{ mt: 2, opacity: 0.8 }}>
              The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                color="secondary"
                startIcon={<MdArrowBack />}
                size="large"
              >
                Back to home
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
