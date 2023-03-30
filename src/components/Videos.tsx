import { useTranslation } from 'react-i18next'

function Videos() {
  const { t } = useTranslation()

  return (
    <div className="videos">
      <h3 className="videos__description">Video of our activities</h3>
      <div className="videos__container">
        <iframe
          className="videos__facebook"
          src="https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2Fudruzenjerastimozajedno%2Fvideos%2F968775200139803%2F&show_text=false&t=0"
          width="682"
          height="200"
          allow="autoplay; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h3 className="videos__description">{t('videos.title2')}</h3>
      <div className="videos__container">
        <iframe
          width="682"
          height="383"
          src="https://www.youtube.com/embed/WjWDl08wmOc"
          title='Projekat " Jednaki u različitostima"- NVO "Rastimo zajedno "'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
          allowFullScreen={true}
        ></iframe>
      </div>

      <h3 className="videos__description">{t('videos.title3')}.</h3>
      <div className="videos__container">
        <iframe
          width="682"
          height="383"
          src="https://www.youtube.com/embed/NvzkE75quw4"
          title='NVO "Rastimo zajedno"- RAZMISLI PRIJE NEGO LI PARKIRAŠ!'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
export default Videos
