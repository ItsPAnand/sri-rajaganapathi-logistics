import { useEffect, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { MdArrowUpward } from 'react-icons/md';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            right: 20,
            bottom: 96,
            zIndex: 1200,
          }}
        >
          <Tooltip title="Back to top" placement="left" arrow>
            <IconButton
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                width: 46,
                height: 46,
                bgcolor: 'background.paper',
                border: (t) => `1px solid ${t.palette.divider}`,
                boxShadow: '0 10px 24px -12px rgba(10,43,92,0.35)',
                color: 'primary.main',
                '&:hover': { bgcolor: 'primary.main', color: '#fff' },
              }}
            >
              <MdArrowUpward />
            </IconButton>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
