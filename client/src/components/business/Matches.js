import { Box } from '@mui/system'
import MatchCard from '../design/Card/MatchCard'

const Matches = ({ onMatchClick }) => {
  const handleClick = (msg) => () => {
    onMatchClick(msg)
  }
  return <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <MatchCard onClick={handleClick} />
  </Box>
}

export default Matches
