import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, IconButton } from '@mui/material'
import Collapse from '@mui/material/Collapse'

import { styled } from '@mui/material/styles'

import LikeIcon from '@mui/icons-material/Favorite'
import DislikeIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import TinderCard from 'react-tinder-card'
import { useState } from 'react'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}))

const MatchCard = ({ onClick }) => {
  const [expanded, setExpanded] = useState(false)
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <TinderCard
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen('fooBar')}
      preventSwipe={['down', 'up']}>
      <Card onClick={onClick} sx={{ maxWidth: 400, borderRadius: 6 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image="https://media.tenor.com/xTgFPUUk9EQAAAAM/cute-cats.gif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              kittento
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LikeIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <DislikeIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </TinderCard>
  )
}

export default MatchCard
