import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { setOtp } from '../store/slices/userSlice';

const OtpVerification: React.FC = () => {
  const [otp, setOtpState] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      dispatch(setOtp(otp));
      navigate('/profile-details');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <Container>
      <Typography variant="h4">OTP Verification</Typography>
      <TextField
        label="OTP"
        value={otp}
        onChange={(e) => setOtpState(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 6 }}
      />
      <Button variant="contained" color="primary" onClick={handleVerifyOtp}>
        Verify OTP
      </Button>
    </Container>
  );
};

export default OtpVerification;
