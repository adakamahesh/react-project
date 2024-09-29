import { Users } from '../../dummyData';
import './sidebar.css';
import CloseFriend from '../CloseFriends/CloseFriend';
import {RssFeed,Chat,Event,WorkOutline,HelpOutline,Bookmark,Group,PlayCircleFilled,School} from '@mui/icons-material';

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarlist">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilled className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Event</span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className='sidebarListItemText'>Courses</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr' />
            <ul className="sidebarFriendList">
                {Users.map((u) => (
                    <CloseFriend key={u.id} user={u} />
                ))}
            </ul>
        </div>
    </div>
  )
}
