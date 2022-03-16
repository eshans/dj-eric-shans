import InstagramEmbed from 'react-instagram-embed'

function InstagramFeed() {

  const APP_ID = 639657380440168;

  return (
    <div className="insta">
      <InstagramEmbed
        url='https://instagram.com/shanstasticeric'
        clientAccessToken={APP_ID}
        maxWidth={320}
        hideCaption={false}
        containerTagName='insta'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />

    </div>
  )

}
export default InstagramFeed
