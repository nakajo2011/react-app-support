import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {BodyText} from './BasicCard';

export default function CardBody({index}) {

    const {text, setText} = useContext(BodyText);
    
    return (
        <Card sx={{ m: 1, height: "30em", justifyContent: "center", alignItems: "center", display:"flex"}}>
          <CardContent id="MyCardContent" >
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              {text[index]}
            </Typography>  
          </CardContent>
        </Card>
    )
}