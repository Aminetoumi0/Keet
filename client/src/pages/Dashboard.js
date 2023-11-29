
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Card from './Card';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios';



const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [ cookies, setCookie, removeCookie] = useCookies('user')


const user_id = cookies.user_id
  const getUser = async () => {
    try {
      const response = axios.get('http://localhost:8000/user', { params: {user_id}
    })
    setUser(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [])





  const profiles = [
    { id: 1, name: 'Mika', bio: 'Likes playing', image: 'LWbxZcb.jpeg' },
    // Add more profiles as needed
  ];
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleLike = () => {
    // Handle the like action (e.g., update state, fetch next profile, etc.)
    // For simplicity, we'll just move to the next profile
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  const handleDislike = () => {
    // Handle the dislike action (e.g., update state, fetch next profile, etc.)
    // For simplicity, we'll just move to the next profile
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  return (
    <div className="dashboard">
        <ChatContainer user={user}/>

      
      {currentProfileIndex < profiles.length ? (
        <Card profile={profiles[currentProfileIndex]} />
      ) : (
        <p>No more profiles</p>
      )}
      <div className="buttons">
        <button onClick={handleDislike}>Dislike</button>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
};

export default Dashboard;