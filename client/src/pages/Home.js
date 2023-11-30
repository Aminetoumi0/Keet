import { useState } from 'react'
import Layout from '../components/layout'
import Messages from '../components/business/Messages'
import Matches from '../components/business/Matches'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Messaging from './Messaging'

const messages = [
  { user: 'cat 1', lastMessage: 'helloKitty', img: 'C1' },
  { user: 'cat 2', lastMessage: 'lolloKitty', img: 'C2' }
]

const matches = [
  { user: 'cat 1', img: 'C1' },
  { user: 'cat 2', img: 'C2' }
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
