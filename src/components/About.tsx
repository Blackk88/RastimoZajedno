import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  return (
    <div className="about">
      <h1 className="about__title">{t('about.title')}</h1>
      <h2 className="about__section-title">{t('about.whoWeAre.title')}</h2>
      <p className="about__text">{t('about.whoWeAre.text1')}</p>
      <p className="about__text">{t('about.whoWeAre.text2')}</p>
      <h2 className="about__section-title">{t('about.ourGoals.title')}</h2>
      <ul>
        <li className="about__text">{t('about.ourGoals.text1')}</li>
        <li className="about__text">{t('about.ourGoals.text2')}</li>
        <li className="about__text">{t('about.ourGoals.text3')}</li>
        <li className="about__text">{t('about.ourGoals.text4')}</li>
        <li className="about__text">{t('about.ourGoals.text5')}</li>
        <li className="about__text">{t('about.ourGoals.text6')}</li>
      </ul>
      <h2 className="about__section-title">{t('about.activities.title')}</h2>
      <ul>
        <li className="about__text">{t('about.activities.text1')}</li>
        <li className="about__text">{t('about.activities.text2')}</li>
        <li className="about__text">{t('about.activities.text3')}</li>
        <li className="about__text">{t('about.activities.text4')}</li>
        <li className="about__text">{t('about.activities.text5')}</li>
        <li className="about__text">{t('about.activities.text6')}</li>
        <li className="about__text">{t('about.activities.text7')}</li>
        <li className="about__text">{t('about.activities.text8')}</li>
        <li className="about__text">{t('about.activities.text9')}</li>
        <li className="about__text">{t('about.activities.text10')}</li>
        <h2 className="about__section-title">{t('about.trainings.title')}</h2>
        <li className="about__text">{t('about.trainings.text1')}</li>
        <li className="about__text">{t('about.trainings.text2')}</li>
        <li className="about__text">{t('about.trainings.text3')}</li>
        <li className="about__text">{t('about.trainings.text4')}</li>
        <li className="about__text">{t('about.trainings.text5')}</li>
      </ul>
      <div className="about__divider"></div>
      <p className="about__text">{t('about.text1')}</p>
      <div className="about__divider"></div>
      <p className="about__text">{t('about.text2')}</p>
      <p className="about__text">{t('about.text3')}</p>
      <p className="about__text">{t('about.text4')}</p>
    </div>
  )
}
export default About
