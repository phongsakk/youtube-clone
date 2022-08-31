import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { theme } from '../utils/theme'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Tooltip title={snippet?.title} disableInteractive>
      <Card sx={{
        width: { xs: '92vw', sm: '46.5vw', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0
      }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{
              width: {
                xs: '92vw', sm: '46.5vw', md: '320px'
              },
              height: { xs: '51.75vw', sm: '26.15vw', md: '180px' }
            }}
          />
        </Link>
        <CardContent
          sx={{
            backgroundColor: theme.palette.secondary.light,
            height: '106px'
          }}
        >
          <Link
            to={videoId ? `/video/${videoId}` : demoVideoUrl}
            sx={{ width: '100%', overflow: 'hidden' }}
          >
            <Typography variant='subtitle1' fontWeight='bold' color={theme.palette.common.white} noWrap>
              {snippet?.title.slice(0, 60) ||
                demoVideoTitle}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight='bold' color={theme.palette.grey[700]}>
              {snippet?.channelTitle ||
                demoChannelTitle}
              <CheckCircle sx={{ fontSize: '0.875rem', color: 'inherit', ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Tooltip>
  )
}

export default VideoCard