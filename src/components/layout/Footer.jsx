import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

import Logo from '../common/Logo.jsx';
import {
  COMPANY,
  CONTACT,
  SOCIAL,
  NAV_LINKS,
} from '../../constants/company.js';
import { SERVICES } from '../../constants/services.js';
import { mailtoLink, mapsLink, whatsappLink } from '../../utils/format.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        color: 'rgba(255,255,255,0.8)',
        background:
          'linear-gradient(180deg, #061A3A 0%, #0A2B5C 60%, #0A2B5C 100%)',
        pt: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(600px 300px at 15% 0%, rgba(245,166,35,0.14), transparent 60%), radial-gradient(600px 300px at 85% 10%, rgba(16,185,129,0.12), transparent 60%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Grid container spacing={{ xs: 5, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ '& > *': { color: '#fff' } }}>
              <Logo variant="light" />
            </Box>
            <Typography
              variant="body2"
              sx={{ mt: 2.5, color: 'rgba(255,255,255,0.7)', maxWidth: 340 }}
            >
              {COMPANY.description}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <SocialBtn href={SOCIAL.instagram} label="Instagram">
                <FaInstagram />
              </SocialBtn>
              <SocialBtn href={SOCIAL.linkedin} label="LinkedIn">
                <FaLinkedin />
              </SocialBtn>
              <SocialBtn
                href={whatsappLink(CONTACT.whatsapp, `Hi ${COMPANY.name}`)}
                label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialBtn>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <FooterHeading>Explore</FooterHeading>
            <Stack spacing={1.2} sx={{ mt: 2 }}>
              {NAV_LINKS.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={3}>
            <FooterHeading>Services</FooterHeading>
            <Stack spacing={1.2} sx={{ mt: 2 }}>
              {SERVICES.slice(0, 6).map((s) => (
                <FooterLink key={s.id} href={`#services`}>
                  {s.title}
                </FooterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <FooterHeading>Contact</FooterHeading>
            <Stack spacing={1.6} sx={{ mt: 2 }}>
              <ContactRow icon={<MdLocationOn />} href={mapsLink(CONTACT.mapsQuery)}>
                {CONTACT.address.line1}, {CONTACT.address.locality}, {CONTACT.address.city} –{' '}
                {CONTACT.address.pincode}
              </ContactRow>
              <ContactRow icon={<MdPhone />} href={`tel:${CONTACT.phoneRaw}`}>
                {CONTACT.phoneDisplay}
              </ContactRow>
              <ContactRow icon={<MdEmail />} href={mailtoLink(CONTACT.email, 'Enquiry')}>
                {CONTACT.email}
              </ContactRow>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 5, md: 6 }, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={2}
          sx={{ pb: 4, color: 'rgba(255,255,255,0.55)', fontSize: 13.5 }}
        >
          <span>© {year} {COMPANY.legalName}. All rights reserved.</span>
          <Stack direction="row" spacing={3}>
            <FooterLink href="#" muted>Privacy Policy</FooterLink>
            <FooterLink href="#" muted>Terms of Service</FooterLink>
            <FooterLink href="#contact" muted>Support</FooterLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

function FooterHeading({ children }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{ color: '#fff', letterSpacing: '0.12em' }}
    >
      {children}
    </Typography>
  );
}

function FooterLink({ href, children, muted }) {
  return (
    <MuiLink
      href={href}
      underline="none"
      sx={{
        color: muted ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.78)',
        fontSize: 14.5,
        transition: 'color 200ms',
        '&:hover': { color: '#F5A623' },
      }}
    >
      {children}
    </MuiLink>
  );
}

function ContactRow({ icon, href, children }) {
  return (
    <MuiLink
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.2,
        color: 'rgba(255,255,255,0.78)',
        fontSize: 14.5,
        transition: 'color 200ms',
        '&:hover': { color: '#F5A623' },
      }}
    >
      <Box sx={{ mt: '2px', color: '#F5A623', fontSize: 18, lineHeight: 1 }}>{icon}</Box>
      <Box>{children}</Box>
    </MuiLink>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      sx={{
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.15)',
        transition: 'all 200ms',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: '#F5A623',
          color: '#F5A623',
          background: 'rgba(245,166,35,0.08)',
        },
      }}
    >
      {children}
    </IconButton>
  );
}
