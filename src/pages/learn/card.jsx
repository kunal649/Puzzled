import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, imageUrl, bio }) {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background for glassmorphism
    backdropFilter: 'blur(10px)', // Blur effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
    borderRadius: '15px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
    overflow: 'hidden', // Ensures content stays inside rounded corners
    cursor: 'pointer',
  };

  const hoverEffect = {
    transform: 'scale(1.05)', // Scale up
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)', // Highlighted shadow
  };

  const handleMouseOver = (e) => {
    Object.assign(e.currentTarget.style, hoverEffect);
  };

  const handleMouseOut = (e) => {
    Object.assign(e.currentTarget.style, { transform: 'scale(1)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' });
  };

  return (
    <Card
      sx={{ maxWidth: 300 }}
      style={cardStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="green iguana"
        style={{ borderRadius: '10px 10px 0 0' }} // Rounded corners for top media
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color: '#FFFFFF' }}>
          {title}
        </Typography>
        <Typography variant="body2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color: '#FFFFFF' }}>
          Share
        </Button>
        <Button size="small" style={{ color: '#FFFFFF' }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
