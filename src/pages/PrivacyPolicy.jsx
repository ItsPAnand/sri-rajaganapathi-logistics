import { Box, Container, Divider, Typography } from '@mui/material';

export default function PrivacyPolicy() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>Privacy Policy</Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Sri Rajaganapathi Logistics is committed to protecting the privacy of our website visitors and customers. This policy explains how we collect, use, and safeguard personal data when you use our services or visit our website.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>Information We Collect</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          We may collect contact details such as name, email address, phone number, and business information when you submit an enquiry or request a quote. We also collect technical information to improve website performance, including IP addresses, browser type, and device data.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>How We Use Information</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Your information is used to respond to enquiries, provide logistics support, share service updates, and manage our customer relationships. We do not sell or rent your personal information to third parties.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Data Security</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          We take reasonable measures to protect your information from unauthorized access, loss, or misuse. Our website uses secure connections and our staff follow established privacy procedures.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Third-Party Services</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          We may use trusted third-party services to support our website and communications. When these providers process data on our behalf, they do so under contract and in accordance with this privacy policy.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Your Rights</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          You may request access to the personal information we hold about you, ask for corrections, or request that we remove your data where legally permitted. Contact us using the details provided on our website.
        </Typography>

        <Divider sx={{ my: 4, borderColor: 'divider' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          By using this website, you agree to the terms of this Privacy Policy. We may update this policy from time to time, and the latest version will always be available on this page.
        </Typography>
      </Container>
    </Box>
  );
}
