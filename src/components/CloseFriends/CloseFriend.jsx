import './CloseFriend.css'

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img className='sidebarFrienfImg' src={user.profilePicture} alt="" />
        <span className='sidebarFriendName'>{user.username}</span>
    </li>
  )
}
