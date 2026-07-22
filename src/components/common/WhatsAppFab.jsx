import { Fab, Tooltip } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { CONTACT, COMPANY } from '../../constants/company.js';
import { whatsappLink } from '../../utils/format.js';

export default function WhatsAppFab() {
  const href = whatsappLink(
    CONTACT.whatsapp,
    `Hello ${COMPANY.name}, I'd like to enquire about your logistics services.`
  );

  return (
    <Tooltip title="Chat on WhatsApp" placement="left" arrow>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          right: 20,
          bottom: 24,
          zIndex: 1200,
        }}
      >
        <Fab
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{
            width: 60,
            height: 60,
            color: '#fff',
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 16px 40px -12px rgba(37,211,102,0.55)',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -6,
              borderRadius: '50%',
              background: 'rgba(37,211,102,0.35)',
              zIndex: -1,
              animation: 'pulseRing 2.2s ease-out infinite',
            },
            '@keyframes pulseRing': {
              '0%': { transform: 'scale(0.85)', opacity: 0.75 },
              '100%': { transform: 'scale(1.35)', opacity: 0 },
            },
            '&:hover': {
              background: 'linear-gradient(135deg, #25D366 0%, #0E6E62 100%)',
            },
          }}
        >
          <FaWhatsapp size={28} />
        </Fab>
      </motion.div>
    </Tooltip>
  );
}
