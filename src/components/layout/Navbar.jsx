import { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Stack,
  useMediaQuery,
  alpha,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose, MdDarkMode, MdLightMode, MdArrowOutward } from 'react-icons/md';

import Logo from '../common/Logo.jsx';
import { NAV_LINKS } from '../../constants/company.js';
import { useScrollDirection } from '../../hooks/useScrollDirection.js';
import { useColorMode } from '../../theme/ThemeProvider.jsx';

export default function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { direction, scrolled } = useScrollDirection(12);
  const { mode, toggle } = useColorMode();
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  const hidden = direction === 'down' && scrolled && !open;

  // Active section tracking via IntersectionObserver.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isDark = mode === 'dark';

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'sticky', top: 0, zIndex: 1300 }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: scrolled
              ? alpha(theme.palette.background.default, isDark ? 0.72 : 0.78)
              : 'transparent',
            backdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(18px)' : 'none',
            borderBottom: scrolled
              ? `1px solid ${alpha(theme.palette.divider, 1)}`
              : '1px solid transparent',
            color: 'text.primary',
            transition: 'background 300ms ease, border-color 300ms ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                minHeight: { xs: 68, md: 80 },
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Box
                component="a"
                href="#home"
                aria-label="Sri Rajaganapathi Logistics — home"
                sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <Logo variant={isDark ? 'light' : 'dark'} />
              </Box>

              {isDesktop ? (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  {NAV_LINKS.map((link) => {
                    const active = activeHash === link.href;
                    return (
                      <Box
                        key={link.href}
                        component="a"
                        href={link.href}
                        sx={{
                          position: 'relative',
                          px: 1.75,
                          py: 1,
                          fontSize: 14.5,
                          fontWeight: 600,
                          color: active ? 'primary.main' : 'text.primary',
                          transition: 'color 200ms ease',
                          '&:hover': { color: 'secondary.main' },
                        }}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            style={{
                              position: 'absolute',
                              left: 12,
                              right: 12,
                              bottom: 4,
                              height: 2,
                              borderRadius: 2,
                              background: 'linear-gradient(90deg,#F5A623,#10B981)',
                            }}
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Box>
                    );
                  })}

                  <IconButton
                    onClick={toggle}
                    aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    sx={{ ml: 1 }}
                  >
                    {isDark ? <MdLightMode /> : <MdDarkMode />}
                  </IconButton>

                  <Button
                    href="#contact"
                    variant="contained"
                    color="secondary"
                    endIcon={<MdArrowOutward />}
                    sx={{ ml: 1 }}
                  >
                    Get a Quote
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <IconButton onClick={toggle} aria-label="Toggle color mode">
                    {isDark ? <MdLightMode /> : <MdDarkMode />}
                  </IconButton>
                  <IconButton
                    onClick={() => setOpen(true)}
                    aria-label="Open navigation menu"
                    edge="end"
                  >
                    <MdMenu size={26} />
                  </IconButton>
                </Stack>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '82vw', sm: 380 },
            background: theme.palette.background.default,
            backgroundImage: 'none',
            borderLeft: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo variant={isDark ? 'light' : 'dark'} />
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <MdClose />
          </IconButton>
        </Box>
        <List sx={{ px: 1.5 }}>
          <AnimatePresence>
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.35 }}
              >
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: 2,
                    my: 0.25,
                    py: 1.4,
                    px: 2,
                    color: activeHash === link.href ? 'primary.main' : 'text.primary',
                    '&:hover': { bgcolor: alpha(theme.palette.secondary.main, 0.08) },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ fontWeight: 700, fontSize: 17 }}
                  />
                </ListItemButton>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
        <Box sx={{ p: 2.5, mt: 'auto' }}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            href="#contact"
            onClick={() => setOpen(false)}
            endIcon={<MdArrowOutward />}
          >
            Get a Quote
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
