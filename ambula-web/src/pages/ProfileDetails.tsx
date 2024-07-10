import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { setProfileDetails } from '../store/slices/userSlice';

const ProfileDetails: React.FC = () => {
  const [details, setDetails] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!details.name || !details.email) {
      alert('All fields are mandatory');
      return;
    }
    dispatch(setProfileDetails(details));
    navigate('/user-suggestions');
  };

  return (
    <Container>
      <Typography variant="h4">Profile Details</Typography>
      <TextField
        label="Name"
        value={details.name}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleContinue}>
        Continue
      </Button>
    </Container>
  );
};

export default ProfileDetails;
