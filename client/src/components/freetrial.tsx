
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  heading: {
    marginBottom: '1rem',
    color: '#29335c',
  },
  subheading: {
    marginBottom: '1rem',
    color: '#29335c',
  },
  accordion: {
    marginBottom: '1rem',
    background: '#F5F5F5',
    borderRadius: '10px',
  },
  accordionSummary: {
    background: '#29335c',
    color: '#FFFFFF',
    borderRadius: '10px',
  },
  accordionHeading: {
    fontWeight: 'bold',
  },
};

function Freetrial(): JSX.Element {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" sx={styles.heading}>
        Get started with a 14 day free trial
      </Typography>
      <Typography variant="subtitle1" sx={styles.subheading}>
        Veestream offers a risk-free way for you to test whether our API solution is the right fit for your needs. By signing up for our free 14-day trial, you'll have the opportunity to integrate Veestream into your platform and thoroughly test its capabilities. This trial period allows you to make an informed decision about whether Veestream is suitable for your project, without any financial commitment or obligation. We're confident that you'll find our API solution to be a valuable asset to your web development workflow. Sign up for our free trial today and experience the power of Veestream for yourself.
      </Typography>
      <Accordion sx={styles.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography variant="h6" sx={styles.accordionHeading}>How it works</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            To subscribe to our free trial, simply provide us with your email address, and one of our representatives will contact you promptly with your free trial API key and all the necessary documentation. As part of our commitment to providing top-notch support to our clients, you'll also be assigned a dedicated support person who will be available to assist you with any issues that may arise during your 14-day trial. At Veestream, we take pride in our outstanding customer service and are always here to help you succeed. Sign up for our free trial today, and let us show you why Veestream is the premier API solution for web developers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={styles.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography variant="h6" sx={styles.accordionHeading}>Upgrading</Typography>
        </AccordionSummary>
        <AccordionDetails>
          
          <Typography variant="body1">
          At the end of your 14-day trial, you'll need to upgrade your subscription to continue using Veestream's API solution. We charge on a per-API-call basis, which means that you only pay for what you use. To view our pricing details, please visit <a href="https://rapidapi.com/kariukiamschel9/api/veestream2/pricing">Our pricing page</a>. We strive to offer competitive pricing for our clients, while providing the highest level of service and support. If you have any questions or concerns about our pricing structure or subscription plans, please don't hesitate to contact us. At Veestream, we're committed to helping you achieve your web development goals while staying within your budget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={styles.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography variant="h6" sx={styles.accordionHeading}>What if I'm not a developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
          If you're not a developer but are interested in building with Veestream, we can connect you with one of our skilled developers who can assist you with your project. Simply provide us with your email address, and we'll get back to you promptly to discuss your needs and connect you with the right developer for your project. At Veestream, we're dedicated to helping our clients succeed by providing them with the tools and resources they need to build exceptional websites and applications. Contact us today to learn more about how we can help you achieve your goals with Veestream
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Freetrial