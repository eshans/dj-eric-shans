import ericPhones from "../img/ericphones2.jpg"
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagramSquare,
  FaSoundcloud
} from "react-icons/fa"
import { IconContext } from "react-icons"

//Mail to link function
const Mailto = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

function Contact() {
  return (
    <div className="container">
      <img src={ericPhones} alt="eric-hood" className="image" />
      <div className="icons">
        <IconContext.Provider value={{ style: { fontSize: '40px', color: "white" } }}>
          <a className="icon" target="_blank" rel="noreferrer" href="https://twitter.com/"><FaTwitter /></a>
          <a className="icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/djericshans"><FaFacebookF /></a>
          <a className="icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/djericshans"><FaYoutube /></a>
          <a className="icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/shanstasticeric"><FaInstagramSquare /></a>
          <a className="icon" target="_blank" rel="noreferrer" href="https://www.soundcloud.com/eric-shans"><FaSoundcloud /></a>
          <h2>For bookings or remix requests, please<>&nbsp;</>
            <Mailto email="eric.shans@gmail.com" subject="Booking Request" body="">email here</Mailto>
          </h2>
        </IconContext.Provider>
        <div> <p> For the latest Beatport charts, you can go here.</p></div>
      </div>

    </div >
  )
}

export default Contact
