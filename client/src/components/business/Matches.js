import { Box } from '@mui/system'
import { IconButton } from '@mui/material'


import MatchCard from '../design/Card/MatchCard'

import LikeIcon from '@mui/icons-material/Favorite'
import DislikeIcon from '@mui/icons-material/Clear'

const actions = [
  <IconButton key="dislike" aria-label="add to favorites">
    <DislikeIcon />
  </IconButton>,
  <IconButton key="like" aria-label="add to favorites">
    <LikeIcon />
  </IconButton>
  ]

const Matches = ({ onMatchClick }) => {
  const handleClick = (msg) => () => {
    onMatchClick(msg)
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <MatchCard onClick={handleClick} options={{ expandable: true, swipable: true }} actions={actions} />
    </Box>
  )
}

export default Matches
