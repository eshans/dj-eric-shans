import ericBW from "../img/ericbushwickav.jpg"
import ericPhones from "../img/ericphones2.jpg"


function Media() {
  return (
    <div>
      <img className="media-image" src={ericBW} alt="ericDJ" />
      <img className="media-image" src={ericPhones} alt="ericDJ" />
    </div>
  )
}

export default Media
