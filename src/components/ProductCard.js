import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { useNavigate } from 'react-router-dom';


const formatTitle = (title, length = 20) => {
  if (title.length > length) {
    return title.slice(0, length);  
  } else {
    return title.padEnd(length, ' ');
  }
};

export default function ProductCard({ id,image, title, description }) {
  const [expanded, setExpanded] = useState(false);
  const formattedTitle = formatTitle(title);
  const navigate=useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {formattedTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description.slice(0, 50)}{description.length > 50 && '...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          {expanded ? "Show Less" : "Learn More"}
        </Button>
        <Button onClick={()=>{navigate(`/products/${id}`)}}>More Details</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
