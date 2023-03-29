import title from '../assets/title.jpg'
import heart from '../assets/heart.jpg'

function Home() {
  function showModalDonate() {
    console.log('test')
  }

  return (
    <main className="main">
      <img
        src={title}
        alt="Group of children with stage and a lot of different colors balloons."
        className="img__promo"
      />
      <h1 className="text__promo">
        Group of parents of children and youth with developmental disabilities,
        guided by a common goal and mission to improve the quality of life of
        their children!
      </h1>

      <div className="donation">
        <h2 className="text__h2 text--centered">You want to donate?</h2>
        <p className="donation__cta" onClick={showModalDonate}>
          Click here
        </p>
        <img
          onClick={showModalDonate}
          src={heart}
          alt="Picture of big red heart on yellow background"
          className="img donation__img"
        />
      </div>

      <div className="description">
        <div className="description__wrapper">
          <h3 className="text__h3 text--centered">Main Goals</h3>
          <p>
            Improvement and development of the system of social, educational and
            health care for persons with disabilities;
          </p>
          <p>
            Encouraging and including children and youth with disabilities in
            all segments of social and economic life, especially in the field of
            education and employment;
          </p>
          <p>
            Persistent commitment against all forms of discrimination,
            especially discrimination against children and youth with
            disabilities.
          </p>
        </div>
        <div className="description__wrapper">
          <h3 className="text__h3 text--centered">Our activities</h3>
          <p>
            Work on informing the general public about all problems related to
            the development of children, youth and persons with disabilities;
          </p>
          <p>Registration of children, youth and persons with disabilities;</p>
          <p>
            Providing assistance to children, youth and persons with development
            disabilities and their families;
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
