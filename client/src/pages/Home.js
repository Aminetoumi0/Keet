import { useState } from 'react'
import Layout from '../components/layout'
import Messages from '../components/business/Messages'
import Matches from '../components/business/Matches'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Messaging from './Messaging'

const messages = [
  { user: 'Glen', lastMessage: 'hellooo', img: 'https://drive.google.com/file/d/1wngUDrWezjjR6zCcQEPewr8crkwlbgSQ/view?usp=drive_link' },
  { user: 'Jake', lastMessage: 'cute kitty', img: 'https://drive.google.com/file/d/17cKerHHPv88cw8LFi3GdJu74ANeF77jI/view?usp=drive_link' }
]

const matches = [
  { user: 'Glen', img: 'https://drive.google.com/file/d/1wngUDrWezjjR6zCcQEPewr8crkwlbgSQ/view?usp=drive_link' },
  { user: 'Jake', img: 'https://drive.google.com/file/d/17cKerHHPv88cw8LFi3GdJu74ANeF77jI/view?usp=drive_link' }
]

const Home = () => {
  const navigate = useNavigate()

  const [tab, handleChangeTab] = useState(0)

  const handleNavigate = (route) => (payload) => {
    console.log('payload >>', payload)
    navigate(`/home/${route}`)
  }

  const tabs = [
    <Messages key="matches" messages={matches} onMessageClick={handleNavigate('messaging')} />,
    <Messages key="messages" messages={messages} onMessageClick={handleNavigate('messaging')} />,
  ]

  return (
    <Layout onChangeTab={handleChangeTab} onProfileClick={handleNavigate('matching')} current={tab} tabs={tabs}>
      <Routes>
        <Route path="messaging" element={<Messaging />} />
        <Route path="matching" element={<Matches />} />
      </Routes>
    </Layout>
  )
}

export default Home
