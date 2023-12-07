import { useCookies } from 'react-cookie'

const ChatHeader = ({ user = {} }) => {
  const [cookies, , removeCookie] = useCookies('user')
  const logout = () => {
    removeCookie('user_id', cookies.user_id)
    removeCookie('AuthToken', cookies.AuthToken)
    window.location.reload()
  }

  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user?.url} alt={'photo of ' + user?.name} />
        </div>
        <h3>{user?.name}</h3>
      </div>
      <i className="log-out-icon" onClick={logout}>
        logout
      </i>
    </div>
  )
}

export default ChatHeader
