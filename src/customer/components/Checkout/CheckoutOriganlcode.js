import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function CheckoutOriganlcode() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  React.useEffect(() => {
    const step = parseInt(querySearch.get('step') || '0', 10);
    setActiveStep(step);
  }, [location.search]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = Math.min(prevActiveStep + 1, steps.length - 1);
      updateURL(nextStep);
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = Math.max(prevActiveStep - 1, 0);
      updateURL(nextStep);
      return nextStep;
    });
  };

  const updateURL = (step) => {
    const query = new URLSearchParams(location.search);
    query.set('step', step);
    window.history.pushState({}, '', `${location.pathname}?${query.toString()}`);
  };

  return (
    <div className='px-10 lg:px-20 py-10'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
