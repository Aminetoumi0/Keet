import Nav from '../components/design/Nav'
import AuthModal from '../components/AuthModal'
import { useState } from 'react'

// Functional component 'LandingPage'
const LandingPage = () => {
  // State for managing modal visibility and sign-up mode
  const [showModal, setshowModal] = useState(false)
  const [IsSignUp, setIsSignUp] = useState(true)
  // Dummy authentication token
  const authToken = false
  // Handler for button click
  const handleClick = () => {
    console.log('clicked')
    // Show modal and set it to sign-up mode
    setshowModal(true)
    setIsSignUp(true)
  }

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        setshowModal={setshowModal}
        showModal={showModal}
        setIsSignUp={setIsSignUp}
      />
      <div className="home">
        <h1 className="primary-title">Like that profile</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? 'Signout' : 'Create an account'}
        </button>

        {showModal && <AuthModal setshowModal={setshowModal} IsSignUp={IsSignUp} />}
      </div>
    </div>
  )
}

export default LandingPage
