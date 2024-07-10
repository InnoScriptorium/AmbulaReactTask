import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { setMobileNumber } from '../store/slices/userSlice';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  backgroundColor: '#f5f5f5',
  padding: '32px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  marginTop: '64px',
});

const StyledTitle = styled(Typography)({
  color: '#3f51b5',
  marginBottom: '16px',
});

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#3f51b5',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#3f51b5',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3f51b5',
    },
    '&:hover fieldset': {
      borderColor: '#3f51b5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3f51b5',
    },
  },
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
});

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
    <StyledContainer>
      <StyledTitle variant="h4">Register</StyledTitle>
      <StyledTextField
        label="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumberState(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 10 }}
      />
      <StyledButton variant="contained" onClick={handleRegister}>
        Register
      </StyledButton>
    </StyledContainer>
  );
};

export default Registration;
