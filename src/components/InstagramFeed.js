import { useInstagramFeed } from 'use-instagram-feed'

function InstagramFeed() {

  let photos = useInstagramFeed({
    userId: "244946207",
    thumbnailWidth: 640,
    photoCount: 12,
  })
  return (
    <div>
      {photos &&
        photos.map(({ id, caption, src, width, height, url }) => (
          <a key={id} href={url}>
            <img src={src} alt={caption} />
          </a>
        ))}
    </div>
  )

}
export default InstagramFeed
