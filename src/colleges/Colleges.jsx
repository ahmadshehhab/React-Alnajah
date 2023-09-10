

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lecture from '../assets/lect.jpg'
import './College.css'
import { Link } from 'react-router-dom';

export default function MediaCard(props) {
  
    return (
        <>
       
    {props.data.map((e,i) => (
        <Card  className='Card' key={i}>
        <CardMedia
          className='cc'
          image={lecture}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
            <Button size="large" ><Link to={'/major/'+e.id}>{e.name}</Link></Button>
          </Typography>
         {e.file != null &&  <button><Link to={e.file}>file</Link></button>}
         {e.image != null &&  <button><Link to={e.image}>image</Link></button>}
         {e.link != null &&  <button><Link to={e.link}>link</Link></button>}
         {e.video != null &&  <button><Link to={e.video}>video</Link></button>}
        </CardContent>
      
      </Card>
  ))}
    
    </>
  )
}