import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdAccessTime } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa6';

import Section from '../common/Section.jsx';
import { CONTACT, COMPANY } from '../../constants/company.js';
import { SERVICES } from '../../constants/services.js';
import { mailtoLink, mapsLink, whatsappLink } from '../../utils/format.js';

const SERVICE_OPTIONS = ['General enquiry', ...SERVICES.map((s) => s.title)];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'General enquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please share your name.';
    if (!form.email.trim()) e.email = 'An email helps us reply.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email looks off.';
    if (!form.message.trim() || form.message.trim().length < 12)
      e.message = 'Add a few more details so we can quote accurately.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    const subject = `New enquiry from ${form.name} — ${form.service}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`;
    window.location.href = mailtoLink(CONTACT.email, subject, body);
    setSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title={
        <>
          Let’s move your next{' '}
          <Box component="span" className="gradient-text">shipment</Box>.
        </>
      }
      lead="Tell us pickup, drop, dimensions and temperature needs. We usually respond the same hour."
    >
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={5}>
          <Stack spacing={2.5} sx={{ height: '100%' }}>
            <ContactCard
              icon={<MdPhone />}
              label="Phone"
              value={CONTACT.phoneDisplay}
              href={`tel:${CONTACT.phoneRaw}`}
            />
            <ContactCard
              icon={<FaWhatsapp />}
              label="WhatsApp"
              value="Message us instantly"
              href={whatsappLink(CONTACT.whatsapp, `Hi ${COMPANY.name}`)}
              external
            />
            <ContactCard
              icon={<MdEmail />}
              label="Email"
              value={CONTACT.email}
              href={mailtoLink(CONTACT.email, 'Enquiry')}
              small
            />
            <ContactCard
              icon={<MdLocationOn />}
              label="Office"
              value={`${CONTACT.address.line1}, ${CONTACT.address.locality}, ${CONTACT.address.city} – ${CONTACT.address.pincode}`}
              href={mapsLink(CONTACT.mapsQuery)}
              external
              small
            />
            <ContactCard icon={<MdAccessTime />} label="Hours" value={CONTACT.hours} small />

            <Card
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                mt: 'auto',
                aspectRatio: '4 / 2.2',
              }}
            >
              <Box
                component="iframe"
                title="Sri Rajaganapathi Logistics location"
                src={`https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`}
                sx={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </Stack>
        </Grid>

        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card
              component="form"
              onSubmit={submit}
              noValidate
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                background: (t) => (t.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))'
                  : 'linear-gradient(135deg, #ffffff 0%, #F8FAFC 100%)'),
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                Request a Quote
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Share a few details — our team will get back with routing, timing and pricing.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your name"
                    value={form.name}
                    onChange={handleChange('name')}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    required
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company (optional)"
                    value={form.company}
                    onChange={handleChange('company')}
                    autoComplete="organization"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone (optional)"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Service"
                    value={form.service}
                    onChange={handleChange('service')}
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Tell us about your shipment"
                    value={form.message}
                    onChange={handleChange('message')}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    multiline
                    minRows={4}
                    required
                  />
                </Grid>
              </Grid>

              {sent && (
                <Alert severity="success" sx={{ mt: 2.5, borderRadius: 2 }}>
                  Your email client should now be open with the enquiry pre-filled. If not, please email{' '}
                  <MuiLink href={mailtoLink(CONTACT.email, 'Enquiry')}>{CONTACT.email}</MuiLink> directly.
                </Alert>
              )}

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 3 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<MdSend />}
                  sx={{ px: 3.5 }}
                >
                  Send Enquiry
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href={whatsappLink(
                    CONTACT.whatsapp,
                    `Hi ${COMPANY.name}, I'd like to enquire about ${form.service}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<FaWhatsapp />}
                >
                  Or message on WhatsApp
                </Button>
              </Stack>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  );
}

function ContactCard({ icon, label, value, href, external, small }) {
  const Wrapper = href ? MuiLink : Box;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Wrapper
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        underline="none"
        sx={{ display: 'block' }}
      >
        <Card
          sx={{
            p: 2.5,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            transition: 'all 300ms',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 24px 40px -24px rgba(10,43,92,0.22)',
              borderColor: 'secondary.main',
            },
          }}
        >
          <Box
            sx={{
              width: 46,
              height: 46,
              minWidth: 46,
              borderRadius: '14px',
              display: 'grid',
              placeItems: 'center',
              background: 'linear-gradient(135deg, rgba(245,166,35,0.15), rgba(16,185,129,0.15))',
              color: 'secondary.main',
              fontSize: 22,
            }}
          >
            {icon}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', letterSpacing: 0.6 }}>
              {label}
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: small ? 14 : 15,
                color: 'text.primary',
                wordBreak: 'break-word',
              }}
            >
              {value}
            </Typography>
          </Box>
        </Card>
      </Wrapper>
    </motion.div>
  );
}
