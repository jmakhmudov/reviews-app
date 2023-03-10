import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function ReviewCard({review}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Link href={`reviews/${review.id}`}>
            <CardActionArea>
                <Typography gutterBottom variant="body3" color="text.secondary">
                    {review.date} 
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {review.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Link>
    </Card>
  );
}