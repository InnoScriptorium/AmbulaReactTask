import React from 'react';
import { Container, Typography } from '@mui/material';

const Congratulations: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Congratulations</Typography>
      <Typography variant="body1">You have successfully completed the process.</Typography>
    </Container>
  );
};

export default Congratulations;
