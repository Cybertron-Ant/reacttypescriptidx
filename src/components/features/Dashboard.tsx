import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

/**
 * Dashboard component that displays a grid of summary cards
 * This is a sample component showcasing Material UI's grid and card system
 * 
 * @returns {JSX.Element} The dashboard component
 */
export const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Summary Cards */}
        {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {card}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sample content for {card.toLowerCase()}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
