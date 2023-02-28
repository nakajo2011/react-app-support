import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardBody({arr, index}) {
    
    return (
        <Card sx={{ m: 1, height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}>
          <CardContent id="MyCardContent" >
            <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom> 
              {arr[index]}
            </Typography>  
          </CardContent>
        </Card>
    )
}