// Importing necessary dependencies and components from React and custom modules
import { useState } from 'react'
import Layout from '../components/layout'
import Messages from '../components/business/Messages'
import Matches from '../components/business/Matches'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Messaging from './Messaging'
// Sample data for messages, matches, and users
const messages = [
  {
    user: 'Glen',
    lastMessage: 'hellooo',
    img: 'https://images-ext-2.discordapp.net/external/qaBxpYqIBpJnCWcQ_QemnowDABhtW5XkFEZuNvR6h00/https/lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDOEkK_sph-JQQBD-4FpKrIUGHo9MOVuuWUwffZKWNojB1mKsyVR0gTQky2nwv2TU74IwyDKvzo8ddSUSBEhyAlaWsy%3Dw1920-h955?format=webp'
  },
  {
    user: 'Jake',
    lastMessage: 'cute kitty',
    img: 'https://images-ext-2.discordapp.net/external/xhF6n69zTSYIMsSpijOhQkGPDcxlyksoXIjt915xxHU/https/lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB4s5J1ujU-ePuhfRtWKWf-NNlyHqlamzsNizjBzhw0x9awEU08MZD8T2TBtD3aFqFGSyOhcq8_lP52WUCuHLidZGgFRQ%3Dw1920-h955?format=webp'
  }
]

const matches = [
  {
    user: 'Glen',
    img: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaB4s5J1ujU-ePuhfRtWKWf-NNlyHqlamzsNizjBzhw0x9awEU08MZD8T2TBtD3aFqFGSyOhcq8_lP52WUCuHLidZGgFRQ=w1249-h955?format=webp'
  },
  {
    user: 'Jake',
    img: 'https://images-ext-2.discordapp.net/external/qaBxpYqIBpJnCWcQ_QemnowDABhtW5XkFEZuNvR6h00/https/lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDOEkK_sph-JQQBD-4FpKrIUGHo9MOVuuWUwffZKWNojB1mKsyVR0gTQky2nwv2TU74IwyDKvzo8ddSUSBEhyAlaWsy%3Dw1920-h955?format=webp'
  }
]

const users = [
  {
    title: 'Fred',
    subHeader: "I'm a really big fan of socks and cardboards",
    media: 'https://i.imgur.com/Jvh1OQm.jpeg'
  },
  {
    title: 'Whiskers',
    subHeader: 'A really active kitty that likes to go out and play fight',
    media: 'https://i.imgur.com/VgYAFPI.jpeg'
  },
  {
    title: 'Legolas',
    subHeader: 'A prince in paws',
    media: 'https://i.imgur.com/JHfRHrJ.jpeg'
  },
  {
    title: 'Bowser',
    subHeader: 'I love to sunbathe and play with my toys',
    media: 'https://i.imgur.com/rtLmWHZ.jpeg'
  }
]
// Functional component 'Home'
const Home = () => {
  // Hook to manage navigation in the application
  const navigate = useNavigate()
  // State to track the active tab
  const [tab, handleChangeTab] = useState(0)
  // Handler for navigating to a specific route
  const handleNavigate = (route) => () => {
    navigate(`/home/${route}`)
  }
  // Array of tabs, each containing a Messages component
  const tabs = [
    <Messages key="matches" messages={matches} onMessageClick={handleNavigate('messaging')} />,
    <Messages key="messages" messages={messages} onMessageClick={handleNavigate('messaging')} />
  ]

  return (
    <Layout onChangeTab={handleChangeTab} current={tab} tabs={tabs}>
      <Matches users={users} />
      <Routes>
        <Route path="messaging" element={<Messaging />} />
      </Routes>
    </Layout>
  )
}

export default Home
