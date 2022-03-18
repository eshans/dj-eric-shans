import InstagramEmbed from 'react-instagram-embed'

function InstagramFeed() {

  const APP_ID = 639657380440168;
  const CLIENT_TOKEN = "7bffebd532a9b4104c3882b5f4237a32"

  return (
    <div>
      <InstagramEmbed
        url='https://instagram.com/shanstasticeric'
        clientAccessToken={APP_ID | CLIENT_TOKEN}
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
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
