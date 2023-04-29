// import React from 'react'
import {Stack,Box} from '@mui/material';
import {Link} from 'react-router-dom';
import {Topography,Card,CardContent,CardMedia} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utlis/constants';

const VideoCard = ({video:{id:{videoId},snippet }}) => {
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:358,height: 180}}
        />
        
        </Link>
    </Card>
  )
}

export default VideoCard
