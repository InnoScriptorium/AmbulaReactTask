import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { setMobileNumber } from '../store/slices/userSlice';

const Registration: React.FC = () => {
  const [mobileNumber, setMobileNumberState] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (mobileNumber.length !== 10 || isNaN(Number(mobileNumber))) {
      alert('Invalid mobile number');
      return;
    }
    dispatch(setMobileNumber(mobileNumber));
    navigate('/otp-verification');
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <TextField
        label="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumberState(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 10 }}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default Registration;
