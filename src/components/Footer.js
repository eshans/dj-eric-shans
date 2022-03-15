import tracks from '../components/Player/Tracks'
import AudioPlayer from "../components/Player/AudioPlayer"
import '../styles.css'


function Footer() {
  return (
    <div className="footer">
      <div className="player header">
        <AudioPlayer tracks={tracks} />
      </div>
    </div>
  )
}

export default Footer
