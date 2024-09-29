import './Profile.css'
import Topbar from '../../components/topbar/topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

export default function Profile() {
  return (
    <>
     <Topbar/>
     <div className='Profile'>
       <Sidebar/>
       <div className="ProfileRight">
            <div className="ProfileRightTop">
                <div className="ProfileCover">
                    <img className='ProfileCoverImg' src="images/persons/beach.jpg" alt="" />
                    <img className='ProfileUserImg' src="images/persons/person3.jpg" alt="" />
                </div>
                <div className="ProfileInfo">
                    <h4 className='ProfileInfoName'>Mahesh</h4>
                    <span className='ProfileInfoDesc'>Hello My Friends</span>
                </div>
            </div>
            <div className="ProfileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
       </div>
     </div>
    </>
  )
}
