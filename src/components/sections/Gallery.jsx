import { useState } from 'react';
import { Box, IconButton, Modal, Fade } from '@mui/material';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import {
  FaTemperatureHalf,
  FaTruckMedical,
  FaBoxesStacked,
  FaWhatsapp,
} from 'react-icons/fa6';
import {
  MdMedicalServices,
  MdPrecisionManufacturing,
  MdCheckroom,
  MdShoppingBag,
  MdMemory,
  MdVaccines,
  MdInventory2,
} from 'react-icons/md';

import Section from '../common/Section.jsx';

/**
 * SVG "tiles" masonry. Vector-only so we don't ship large binary assets.
 * The tiles depict domain scenes (cold-chain, warehouse, pharma van, etc.) with
 * consistent brand colouring — production teams can swap them for real photos
 * (e.g. Unsplash / on-site imagery) as a like-for-like replacement.
 */
const TILES = [
  { id: 't1', h: 220, Icon: FaTemperatureHalf, title: 'Cold-Chain', caption: 'Vaccine consignment · +2°C to +8°C', accent: '#F5A623' },
  { id: 't2', h: 300, Icon: MdMedicalServices, title: 'Pharma Distribution', caption: 'Hospital & pharmacy supply', accent: '#0F3A78' },
  { id: 't3', h: 220, Icon: FaBoxesStacked, title: 'Warehouse', caption: 'Sorted, labelled, ready', accent: '#10B981' },
  { id: 't4', h: 260, Icon: FaTruckMedical, title: 'Medical Delivery', caption: 'Priority routing', accent: '#F5A623' },
  { id: 't5', h: 220, Icon: MdVaccines, title: 'Poultry Vaccines', caption: 'Farm-to-clinic lanes', accent: '#0F3A78' },
  { id: 't6', h: 280, Icon: MdPrecisionManufacturing, title: 'Industrial Freight', caption: 'B2B scheduled lanes', accent: '#10B981' },
  { id: 't7', h: 220, Icon: MdCheckroom, title: 'Silk & Textile', caption: 'Salem / Erode / Karur', accent: '#F5A623' },
  { id: 't8', h: 240, Icon: MdShoppingBag, title: 'Retail & Commercial', caption: 'FMCG · footwear · paper', accent: '#0F3A78' },
  { id: 't9', h: 220, Icon: MdMemory, title: 'Electronics', caption: 'Fragile-safe transport', accent: '#10B981' },
  { id: 't10', h: 220, Icon: MdInventory2, title: 'Full-Truck Loads', caption: 'Dedicated capacity', accent: '#F5A623' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <Section
      id="gallery"
      eyebrow="Operations Gallery"
      title={
        <>
          A glimpse into a day at{' '}
          <Box component="span" className="gradient-text">SRL</Box>.
        </>
      }
      lead="Replace these branded tiles with your own photography — the layout, animation and lightbox scale to any imagery."
    >
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3, lg: 4 },
          columnGap: 16,
        }}
      >
        {TILES.map((tile, i) => (
          <motion.button
            key={tile.id}
            type="button"
            onClick={() => setActive(tile)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            style={{
              display: 'block',
              width: '100%',
              padding: 0,
              marginBottom: 16,
              border: 'none',
              background: 'transparent',
              cursor: 'zoom-in',
              breakInside: 'avoid',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 20px 40px -24px rgba(10,43,92,0.22)',
            }}
            aria-label={`Open ${tile.title}`}
          >
            <TileArt tile={tile} />
          </motion.button>
        ))}
      </Box>

      <Modal open={Boolean(active)} onClose={() => setActive(null)} closeAfterTransition>
        <Fade in={Boolean(active)}>
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'rgba(6,26,58,0.86)',
              p: 3,
              outline: 'none',
            }}
            onClick={() => setActive(null)}
          >
            {active && (
              <Box
                onClick={(e) => e.stopPropagation()}
                sx={{
                  position: 'relative',
                  maxWidth: 720,
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                }}
              >
                <IconButton
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 2,
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                  }}
                >
                  <MdClose />
                </IconButton>
                <TileArt tile={{ ...active, h: 480 }} large />
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Section>
  );
}

function TileArt({ tile, large = false }) {
  const Icon = tile.Icon;
  return (
    <Box
      sx={{
        position: 'relative',
        height: tile.h,
        borderRadius: large ? 0 : 4,
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${tile.accent}15 0%, #0F3A7810 100%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(400px 200px at 20% 20%, ${tile.accent}30, transparent 60%), radial-gradient(300px 200px at 80% 80%, #0F3A7830, transparent 60%)`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 18,
          left: 18,
          width: 46,
          height: 46,
          borderRadius: 3,
          display: 'grid',
          placeItems: 'center',
          background: tile.accent,
          color: '#fff',
          fontSize: 22,
          boxShadow: `0 12px 26px -10px ${tile.accent}88`,
        }}
      >
        <Icon />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2.2,
          background: 'linear-gradient(180deg, transparent 0%, rgba(6,26,58,0.85) 100%)',
          color: '#fff',
        }}
      >
        <Box sx={{ fontWeight: 800, fontSize: large ? 22 : 16 }}>{tile.title}</Box>
        <Box sx={{ fontSize: 13, opacity: 0.78, mt: 0.4 }}>{tile.caption}</Box>
      </Box>
    </Box>
  );
}
