import { Box, Typography, Stack } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { MdVerified, MdShield, MdLocalShipping } from 'react-icons/md';
import { FaTemperatureHalf } from 'react-icons/fa6';

/**
 * Hero visual: an SVG "route" scene with an animated truck moving along a curve,
 * plus a floating glass card showing a live-style shipment stat.
 * No external images required — everything is vector for performance.
 */
export default function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '5 / 5.4',
        maxWidth: 560,
        mx: { xs: 'auto', md: 0 },
        ml: { md: 'auto' },
      }}
    >
      {/* Glassy background frame */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '32px',
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.02) 100%)',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(18px)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(400px 260px at 20% 10%, rgba(245,166,35,0.25), transparent 60%), radial-gradient(400px 260px at 80% 90%, rgba(16,185,129,0.22), transparent 60%)',
          }}
        />
      </Box>

      {/* Route SVG */}
      <Box
        component="svg"
        viewBox="0 0 500 540"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          padding: 3,
        }}
        aria-hidden="true"
      >
        {/* Grid */}
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.18)" />
          </pattern>
          <linearGradient id="road" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F5A623" />
            <stop offset="1" stopColor="#10B981" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="460" height="500" rx="24" fill="url(#dots)" opacity="0.5" />

        {/* Route path */}
        <path
          id="route"
          d="M 60 460 C 140 340, 240 500, 320 380 S 440 200, 460 90"
          stroke="url(#road)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="6 8"
        >
          {!reduced && (
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-28"
              dur="1.4s"
              repeatCount="indefinite"
            />
          )}
        </path>

        {/* Origin & destination pins */}
        <g>
          <circle cx="60" cy="460" r="9" fill="#F5A623" />
          <circle cx="60" cy="460" r="18" fill="none" stroke="#F5A623" strokeOpacity="0.35" strokeWidth="2">
            {!reduced && (
              <animate attributeName="r" from="10" to="26" dur="1.8s" repeatCount="indefinite" />
            )}
            {!reduced && (
              <animate attributeName="stroke-opacity" from="0.5" to="0" dur="1.8s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="80" y="466" fill="#fff" fontSize="13" fontWeight="700" opacity="0.9">Salem</text>
        </g>
        <g>
          <circle cx="460" cy="90" r="9" fill="#10B981" />
          <circle cx="460" cy="90" r="18" fill="none" stroke="#10B981" strokeOpacity="0.35" strokeWidth="2">
            {!reduced && (
              <animate attributeName="r" from="10" to="26" dur="1.8s" repeatCount="indefinite" />
            )}
            {!reduced && (
              <animate attributeName="stroke-opacity" from="0.5" to="0" dur="1.8s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="380" y="80" fill="#fff" fontSize="13" fontWeight="700" opacity="0.9">Chennai</text>
        </g>

        {/* Animated truck along path */}
        <g>
          <g transform="translate(-24,-16)">
            <rect x="0" y="0" width="48" height="28" rx="4" fill="#F5A623" />
            <rect x="30" y="6" width="16" height="16" rx="2" fill="#0A2B5C" />
            <circle cx="10" cy="30" r="4" fill="#0B1220" stroke="#fff" strokeWidth="1.5" />
            <circle cx="38" cy="30" r="4" fill="#0B1220" stroke="#fff" strokeWidth="1.5" />
          </g>
          {!reduced && (
            <animateMotion dur="8s" rotate="auto" repeatCount="indefinite">
              <mpath href="#route" />
            </animateMotion>
          )}
        </g>
      </Box>

      {/* Floating stat cards */}
      <FloatingCard
        style={{ top: '6%', left: '-6%' }}
        icon={<FaTemperatureHalf />}
        label="Cold-Chain"
        value="+2 °C to +8 °C"
        delay={0.4}
      />
      <FloatingCard
        style={{ top: '48%', right: '-8%' }}
        icon={<MdLocalShipping />}
        label="Shipment #SRL-2201"
        value="On-time · Chennai"
        accent="accent"
        delay={0.7}
      />
      <FloatingCard
        style={{ bottom: '4%', left: '-4%' }}
        icon={<MdShield />}
        label="Handling"
        value="Pharma-grade"
        delay={1}
      />
      <FloatingCard
        style={{ bottom: '18%', right: '-4%' }}
        icon={<MdVerified />}
        label="Trusted by"
        value="500+ businesses"
        accent="secondary"
        delay={1.3}
      />
    </Box>
  );
}

function FloatingCard({ icon, label, value, style, accent = 'secondary', delay = 0 }) {
  const reduced = useReducedMotion();
  const colorMap = {
    secondary: '#F5A623',
    accent: '#10B981',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!reduced ? { y: -4 } : undefined}
      style={{
        position: 'absolute',
        ...style,
        padding: '10px 14px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.18)',
        boxShadow: '0 20px 40px -20px rgba(0,0,0,0.35)',
        color: '#fff',
        minWidth: 168,
      }}
    >
      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: '10px',
            display: 'grid',
            placeItems: 'center',
            background: 'rgba(255,255,255,0.08)',
            color: colorMap[accent],
            fontSize: 18,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', lineHeight: 1 }}>
            {label}
          </Typography>
          <Typography sx={{ fontWeight: 700, fontSize: 13.5, mt: 0.4 }}>{value}</Typography>
        </Box>
      </Stack>
    </motion.div>
  );
}
