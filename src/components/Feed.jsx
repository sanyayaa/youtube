import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import {Sidebar,Videos} from './';
import {fetchFromAPI} from '../utlis/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos,setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`captions?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
       <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
          Copyright
        </Typography>
       </Box>

       <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}} >
          {selectedCategory} <span style={{color:'#F31505'}}>videos</span>
        </Typography>
       </Box>

       <Videos videos={videos} />

    </Stack>
  )
}

export default Feed;

