import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const MyInfo: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Eerik Poopuu</Typography>
      <Typography variant="h6">Huvide Loetelu:</Typography>
      <Typography>jalgpall, arvutimängud</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Sisesta oma kommentaar"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Saada
        </Button>
      </form>
    </Box>
  );
};

export default MyInfo; 