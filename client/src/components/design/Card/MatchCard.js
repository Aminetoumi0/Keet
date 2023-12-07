import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, IconButton } from '@mui/material'
import Collapse from '@mui/material/Collapse'

import { styled } from '@mui/material/styles'

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

const defaultStyle = { media: { height: 700 }, card: { maxWidth: 400, borderRadius: 6 } }

const MatchCard = ({ children, data, actions, onClick, options = {}, styles = {} }) => {
  const [expanded, setExpanded] = useState(false)
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  const Swiper = (props) =>
    options?.swipable ? (
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
        preventSwipe={['down', 'up']}>
        {props.children}
      </TinderCard>
    ) : (
      <>{props.children}</>
    )

  return (
    <Swiper>
      <Card onClick={onClick} sx={styles?.card ?? defaultStyle.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={styles?.media?.height ?? defaultStyle.media.height}
            image={data?.media}
            alt={data?.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="left">
              {data.title}
              kittento
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              {data.subHeader}
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          {actions}
          {options?.expandable && (
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          )}
        </CardActions>
        {options?.expandable ? (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>{children}</CardContent>
          </Collapse>
        ) : (
          <CardContent>{children}</CardContent>
        )}
      </Card>
    </Swiper>
  )
}

export default MatchCard
