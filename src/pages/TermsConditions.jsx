import { Box, Container, Divider, Typography } from '@mui/material';

export default function TermsConditions() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 3 }}>Terms & Conditions</Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          These Terms & Conditions govern your use of the Sri Rajaganapathi Logistics website and services. By accessing our site, you agree to comply with these terms.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>Use of Website</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          You may use this website for lawful purposes only. You agree not to misuse the website or interfere with its normal operation.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Service Information</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          We make reasonable efforts to provide accurate and up-to-date information about our logistics services, routes, and pricing. However, all service information is subject to change and should be confirmed directly with our team.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Limitation of Liability</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          Sri Rajaganapathi Logistics is not liable for indirect, incidental, or consequential losses arising from your use of the website. Our liability is limited to the maximum extent permitted by law.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Intellectual Property</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          All site content, including text, logos, images, and designs, is owned or licensed by Sri Rajaganapathi Logistics. Unauthorized use or reproduction of this content is prohibited.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Governing Law</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          These terms are governed by the laws of India. Any disputes arising from the website or its use will be handled in accordance with applicable Indian law.
        </Typography>

        <Divider sx={{ my: 4, borderColor: 'divider' }} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          If you have any questions about these Terms & Conditions, please contact us through the website or our customer service channels.
        </Typography>
      </Container>
    </Box>
  );
}
