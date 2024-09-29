import './share.css'
import {PermMedia,Label,LocationOn,EmojiEmotions} from '@mui/icons-material'

export default function share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/images/persons/person1.jpg" alt="" />
                <input placeholder="What's in your mind?" className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareButton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOn htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='sharebutton'>Share</button>
            </div>
        </div>
    </div>
  )
}
