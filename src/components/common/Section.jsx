import { Container, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Consistent, opinionated wrapper for full-width sections with an eyebrow / title / lead.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  align = 'left',
  containerMaxWidth = 'lg',
  py = { xs: 10, md: 14 },
  bg,
  children,
  darkText = false,
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        py,
        background: bg,
        color: darkText ? '#fff' : 'inherit',
      }}
    >
      <Container maxWidth={containerMaxWidth}>
        {(eyebrow || title || lead) && (
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: align, maxWidth: 820, mx: align === 'center' ? 'auto' : 0 }}>
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'secondary.main',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    mb: 1.5,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '""',
                      width: 24,
                      height: 2,
                      background: 'linear-gradient(90deg,#F5A623,#10B981)',
                      borderRadius: 2,
                      display: align === 'center' ? 'inline-block' : 'inline-block',
                    },
                  }}
                >
                  {eyebrow}
                </Typography>
              </motion.div>
            )}

            {title && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ color: darkText ? '#fff' : 'text.primary', mb: 2 }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}

            {lead && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: darkText ? 'rgba(255,255,255,0.78)' : 'text.secondary',
                    fontSize: { xs: '1rem', md: '1.15rem' },
                  }}
                >
                  {lead}
                </Typography>
              </motion.div>
            )}
          </Box>
        )}

        {children}
      </Container>
    </Box>
  );
}
