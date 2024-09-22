// Home.tsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}>
      <Typography variant="h3" gutterBottom>
        Tere tulemast minu rakendusse!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Siin on mõned valikud, mida saad uurida:
      </Typography>
      <Button variant="contained" component={Link} to="/form">
        Logi sisse
      </Button>
      <Button variant="outlined" component={Link} to="/contact" sx={{ marginLeft: 2 }}>
        Kontakt
      </Button>
    </Box>
  );
};

export default Home;
