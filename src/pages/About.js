import hoodImg from "../img/erichood1.jpg"


function About() {
  return (
    <div className="container">
      <img src={hoodImg} alt="eric-hood" className="image" />
      <div className="description">
        A producer and DJ residing in Brooklyn, NY, Eric Shans has been making and playing music for almost 20 years. He has always been influenced by melodic, dreamy sounds which have a smattering of grit underneath. Both under the synth pop sounding monikers Phenotract and Fermion (a duo), and under his own name, he has many releases and remixes that span the genres of deep house, tech house, techno, and ambient. The music he makes is truly reflective of the sounds he loves to hear; forward thinking and at times, wrapped in a sense of nostalgia. His DJ sets are also an embodiment of this as well, combining ethereal vocals, driving and dirty bass lines, and moving melodies for the heart, feet, and mind. He's played for years across many venues in the NYC area, including TBA Brooklyn, Cielo, Louie and Chan, various loft and private parties, and more. Eric also co-runs the labels 3Bridge Records and 3Bridge Elements based in Brooklyn and is one of the founders of the inTRANSIT parties which take place in New York City mainly at TBA Brooklyn, one of the borough's best underground clubs.
        <hr className="border"></hr>
        <p className="info">
          For information on 3Bridge Records, the house music label based in Brooklyn, NY goto <a href="http://www.3bridgerecords.com" rel="noreferrer" target="_blank">www.3bridgerecords.com</a>
        </p>
        <p className="info">
          For information on 3Bridge Elements, the ambient music label based in Brooklyn, NY, <a href="http://www.3bridgeelements.com" rel="noreferrer" target="_blank">www.3bridgelements.com</a>
        </p>
        <p className="info"> If you are an artist and would like to send your demos for label consideration, or if you need production/remix work, you can send to eric@3bidgerecords.com</p>
      </div>
    </div>
  )
}

export default About
