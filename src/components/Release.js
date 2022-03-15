import releases from "../data/releases.json";

function Release() {
  return (
    <div className="release">
      {releases.map((release, i) => (
        <div className="image-wrapper" key={i}>
          <img id="release-image" className="blur" src={release.imageURL} alt="release" />
          <div className="content fade">
            <div className="title">{release.title}</div>
            <div className="blurb">{release.description}</div>
            <div className="label">{release.label}</div>
            <div><a target='_blank' href={release.buy} rel="noreferrer">Buy </a></div>
            <div><a target='_blank' href={release.stream} rel="noreferrer">Stream </a></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Release
