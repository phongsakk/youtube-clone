import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Tooltip, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { demoChannelUrl, demoProfilePicture } from "../utils/constants"
import { theme } from "../utils/theme"

const ChannelCard = ({
  channelDetail,
  marginTop,
}) => {

  return (
    <Tooltip title={channelDetail?.snippet?.title}>
      <Card
        sx={{
          boxShadow: 'none',
          borderRadius: '20px',
          bgcolor: 'transparent',
          width: { xs: '356px', md: '320px' },
          height: '326px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop,
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}` || demoChannelUrl}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: theme.palette.common.white,
            }}
          >
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: '50%',
                height: '180px',
                width: '180px',
                mb: 2,
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: theme.palette.secondary.light
              }}
            />
            <Typography variant='h6'>
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: '.925rem', color: 'inherit', ml: '5px' }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography variant=''>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
              </Typography>
            )}
          </CardContent>
        </Link>
      </Card>
    </Tooltip>
  )
}

export default ChannelCard