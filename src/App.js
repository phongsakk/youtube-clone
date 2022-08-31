import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { theme } from './utils/theme'

import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'

const App = () => (
  // <React.StrictMode>
  <BrowserRouter>
    <Box bgcolor={theme.palette.secondary.dark}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
  // </React.StrictMode>
)


export default App
