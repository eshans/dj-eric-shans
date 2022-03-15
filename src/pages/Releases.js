import Release from '../components/Release'

function Releases(props) {
  return (
    <>
      <h2 className="section-header">
        Here are all the releases that are out currently. You can purchase and/or stream them on all services.
      </h2>
      {/* Loops over component and fetches releases */}
      <Release />
    </>
  )
}

export default Releases
