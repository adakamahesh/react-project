import './Rightbar.css'
import { Users } from '../../dummyData'
import Online from '../Online/Online'

export default function Rightbar({profile}) {
  const HomeRightbar = () =>{
    return(
      <>
      <div className="birthdayContainre">
          <img className='birthdayImg' src="/images/persons/gift.webp" alt="" />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src="/images/persons/Facebook.webp" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">  
           {Users.map((u) => (
            <Online key={u.id} user={u} />
           ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className='rightbarTitle'>User iformation</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>City:</span>
          <span className='rightbarInfoValue'>India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>From:</span>
          <span className='rightbarInfoValue'>Ap</span>
        </div>
        <div className="rightbarInfoItem">
          <span className='rightbarInfoKey'>Relationship:</span>
          <span className='rightbarInfoValue'>Single</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
