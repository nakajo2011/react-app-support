import * as React from 'react';
import  { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { minHeight } from '@mui/system';


export default function BasicCard(props) {
  const { classes } = props;
  const [count, setCount] = useState(0);
  const arr =["Red", "Green", "Blue", "Black", "White"];
  console.log(arr);


  function handleClick(e) {
    let newCount = count-1
    console.log(newCount)
    if(newCount < 0) {
      newCount = 4
    }
    setCount(newCount)
  }

  return (
    <Box
    xs={{ width: '60rem' }}>
    <Grid
      container 
      spacing={0}
      // direction="column"
      alignItems="center"
      justifyContent="center"
      align="center"
      
      // style={{ minHeight: '100vh' }}
      sx={{ p: 1 }}
    >
      <Grid item xs={9} sx={{mb: 10}}>
        <Card sx={{ m: 1, height: "30em"}}>
          <CardContent sx={{ height: "90%" }} id="MyCardContent">
            <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom> 
              {arr[count]}
            </Typography> 
          </CardContent>
        </Card>
      </Grid>
      <Grid item  xs={4}>
        <img src="./img/left.png" alt="my image" width="50px" onClick={handleClick}/>
      </Grid>
      <Grid item xs={4}>
        <img src="./img/random.png" alt="my image" width="100px" />

      </Grid>
      <Grid item xs={4}>
        <img src="./img/right.png" alt="my image" width="50px" />

      </Grid>
    </Grid>
    </Box>
  );
}