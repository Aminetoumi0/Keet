import { makeStyles } from '@mui/styles'

import Card from '../design/Card/Card'

const useStyles = makeStyles({
  content: { display: 'flex', alignItems: 'flex-start' }
})

const UserHeader = ({ onClick }) => {
  const classes = useStyles()

  return (
    <Card
      media="https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAmJkQPKlei1MpUHt6wDQhdPhKIirMKvLpRwTEdPpZ1Yab5RsB3Xd8RhKzptxEWIrHUxbYOhY_AA81Smi01QyGaN-HjRA=w1920-h955"
      sx={{ avatar: { height: 50, width: 50 } }}
      title="aaaa"
      classes={classes}
      onClick={onClick}
    />
  )
}

export default UserHeader
