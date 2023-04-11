import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Veestream, we are committed to protecting the privacy and security of our users. We will never sell or share your personal information with third parties without your consent.
          </Typography>
          <Typography variant="body1" gutterBottom>
            When you use our services, we may collect certain information, such as your IP address and browser type. This information is used to help us improve our services and provide a better user experience.
          </Typography>
          <Typography variant="body1" gutterBottom>
            By using Veestream, you agree to our Privacy Policy and the terms and conditions set forth in our Terms of Service.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const TermsOfService = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Veestream! By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our services are provided on an "as is" and "as available" basis, without any warranties of any kind. We are not responsible for any damages that may arise from your use of our services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            These Terms of Service are governed by the laws of Kenya. Any disputes arising from your use of our services will be resolved through arbitration in accordance with the rules of the Kenyan Arbitration Association.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const PrivacyAndTerms = () => {
  return (
    <Box>
      <PrivacyPolicy />
      <TermsOfService />
    </Box>
  );
};

export default PrivacyAndTerms;
