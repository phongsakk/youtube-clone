import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { lightBlue, purple } from "@mui/material/colors";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const { id } = useParams()

  console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: `linear-gradient(to right, ${lightBlue.A400} 0%, ${purple.A400} 100%)`,
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p={2} justifyContent='space-between'>
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail