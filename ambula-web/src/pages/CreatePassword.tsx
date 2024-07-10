import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';

const CreatePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCreatePassword = () => {
    if (!password || password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    navigate('/congratulations');
  };

  return (
    <Container>
      <Typography variant="h4">Create Password</Typography>
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleCreatePassword}>
        Continue
      </Button>
    </Container>
  );
};

export default CreatePassword;
