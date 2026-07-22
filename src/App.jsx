import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Box } from '@mui/material';

import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import PageLoader from './components/common/PageLoader.jsx';
import ScrollProgress from './components/common/ScrollProgress.jsx';
import WhatsAppFab from './components/common/WhatsAppFab.jsx';
import BackToTop from './components/common/BackToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    // Give fonts and hero visuals a moment for a polished first impression.
    const timer = setTimeout(() => setBooting(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{booting && <PageLoader key="boot" />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />

      <Box component="main" id="main" role="main">
        <Suspense fallback={<Box sx={{ minHeight: '60vh' }} />}>
          <AnimatePresence mode="wait">
            <motion.div
              key="routes"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </Box>

      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </>
  );
}
