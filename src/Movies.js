import './App.css';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/movies', {
      method: 'GET',
    }).then((res) => res.json()).then(res => {
      // console.log(res);
      setMovies(res);
    })
  }, []);
  const card = (item) => (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Rating: {item.rating}
        </Typography>
        <Typography variant="h5" component="div">
          Movie: {item.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Release Date: {item.release_date}
        </Typography>

      </CardContent>

    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Grid container spacing={2}>

        {movies.map((item, i) => (<Grid  key={'card-' + i} item xs={3}><Card variant="outlined">{card(item)}</Card></Grid>))}
      </Grid>
    </Box>
  );
}

export default Movies;
