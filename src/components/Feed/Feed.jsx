import './Feed.css'
import Share from '../share/share'
import Post from '../Posts/Post'
import { Posts } from '../../dummyData' 

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {Posts.map((p) => (
        <Post key={p.id}  post={p}/>
        ))}
      </div>
    </div>
  )
}
