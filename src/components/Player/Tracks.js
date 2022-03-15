import feelAliveImg from "./images/feel_alive.jpg";
import feel_alive from "./audio/feel_alive.mp3";
import goneAwayImg from "./images/gone_away.jpg";
import gone_away from "./audio/gone_away.mp3";
import followSignImg from "./images/followsigns.jpg";
import followSigns from './audio/follow_the_signs.mp3';
import memoriam from './audio/in_memoriam.mp3';
import memoriamImg from './images/in_memoriam.jpeg';

const tracks = [
  {
    title: "Feel Alive",
    artist: "Eric Shans feat. Stephanie Lomboardo",
    audioSrc: feel_alive,
    image: feelAliveImg,
    label: "Colour & Pitch",
    color: "#00aeb0"
  },
  {
    title: "Gone Away",
    artist: "Eric Shans",
    audioSrc: gone_away,
    image: goneAwayImg,
    label: "3Bridge Records",
    color: "#00aeb0"
  },
  {
    title: "Follow The Signs",
    artist: "Eric Shans",
    audioSrc: followSigns,
    label: "3Brige Records",
    image: followSignImg,
    color: "#00aeb0"
  },
  {
    title: "In Memoriam",
    artist: "Eric Shans",
    audioSrc: memoriam,
    label: "Colour & Pitch",
    image: memoriamImg,
    color: "#00aeb0"
  },
];

export default tracks