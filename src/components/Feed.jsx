import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { theme } from '../utils/theme'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('New')
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}
    >
      <Box
        sx={{
          height: { xs: 'auto', md: '88vh' },
          borderRightWidth: '1px',
          borderRightStyle: 'solid',
          borderRightColor: theme.palette.secondary.light,
          paddingInline: { sx: 0, md: 2 },
          overflow: 'hidden',
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className='copyright'
          variant='body2'
          sx={{
            marginTop: 1.5,
            color: theme.palette.secondary.light
          }}
        >
          Copyright 2022 <b>PhongsakYotsaodee</b>
        </Typography>
      </Box>
      <Box p={2} sx={{
        overflowY: 'auto', height: '86.5vh', flex: 2
      }}>
        <Typography
          variant='h4' fontWeight='bold' mb={2}
          color={theme.palette.common.white}
        >
          {selectedCategory} <span style={{
            color: theme.palette.primary.main
          }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed