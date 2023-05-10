import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-bootstrap/Modal'

import promo from '../assets/promo.jpg'
import heart from '../assets/heart.png'

function Home() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const { t } = useTranslation()

  return (
    <main className="main">
      <img
        src={promo}
        alt="Group of children with stage and a lot of different colors balloons."
        className="img__promo"
      />
      <h1 className="text__promo">{t('home.promo')}</h1>

      <div className="description">
        <div className="description__wrapper">
          <h3 className="text__h3 text--centered">{t('home.mainGoals')}</h3>
          <p>{t('home.mainGoals1')}</p>
          <p>{t('home.mainGoals2')}</p>
          <p>{t('home.mainGoals3')}</p>
        </div>
        <div className="description__wrapper">
          <h3 className="text__h3 text--centered">
            {t('home.activities.title')}
          </h3>
          <p>{t('home.activities.text1')}</p>
          <p>{t('home.activities.text2')}</p>
          <p>{t('home.activities.text3')}</p>
        </div>
      </div>
      <div className="donation">
        <h2 className="text__h2 text--centered">{t('donations.title')}</h2>
        <p className="donation__cta" onClick={handleShow}>
          {t('donations.clickHere')}
        </p>
        <img
          onClick={handleShow}
          src={heart}
          alt="Picture of big red heart on yellow background"
          className="img donation__img"
        />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t('donations.local')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>510-000000010181354</p>
          <p>CKB Banka AD Podgorica</p>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title>{t('donations.international')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NVO “Rastimo Zajedno”</p>
          <p>SWIFT: CKBCMEPG</p>
          <p>IBAN: ME25510000000020322510</p>
          <p>CKB Banka AD Podgorica</p>
        </Modal.Body>
      </Modal>
    </main>
  )
}

export default Home
