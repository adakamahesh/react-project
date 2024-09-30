import './topbar.css'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>MBook</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className='searchicon'/>
                <input placeholder='Search for Friends,post or videos' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">HomePage</span>
                <span className='topbarLink'>Timeline</span>
                <Link to="/logout" style={{textDecoration:"none"}}>
                   <span className='topbarLink'>Logout</span> 
                </Link>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/images/persons/person1.jpg" alt="" className='topbarImg' />
        </div>
    </div>
  )
}