// Importing necessary components and styles from Material-UI
import { makeStyles } from '@mui/styles'

import Card from '../design/Card/Card'

// Define styles using makeStyles

const useStyles = makeStyles({
  content: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column' },


})
// Functional component 'Messages' that receives props
const Messages = ({ messages, onMessageClick }) => {
  // Using the defined styles
  const classes = useStyles()

  // Handler for clicking on a message
  const handleClick = (msg) => () => {
    onMessageClick(msg)
  }
  // Rendering the list of messages using the Card component
  return messages.map((msg) => (
    <Card
      key={msg.user}
      media={msg.img}
      title={msg.user}
      subheader={msg.lastMessage}
      onClick={handleClick(msg.user)}
      classes={classes}
    />
  ))
}

export default Messages
