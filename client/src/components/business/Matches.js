import { Box } from '@mui/system'
import Card from '../design/Card/Card'
import MatchCard from '../design/Card/MatchCard'

const Matches = ({ matches, onMatchClick }) => {
  const handleClick = (msg) => () => {
    onMatchClick(msg)
  }
  return <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <MatchCard />
  </Box>
}

export default Matches
