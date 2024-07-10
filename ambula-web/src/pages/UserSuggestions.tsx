import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const UserSuggestions: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/create-password');
  };

  const suggestions = [
    { name: 'User 1', email: 'user1@example.com' },
    { name: 'User 2', email: 'user2@example.com' },
  ];

  return (
    <Container>
      <Typography variant="h4">User Suggestions</Typography>
      <List>
        {suggestions.map((user, index) => (
          <ListItem key={index}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handleContinue}>
        Continue
      </Button>
    </Container>
  );
};

export default UserSuggestions;
