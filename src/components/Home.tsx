import promo from '../../public/promo.jpeg'

function Home() {
  return (
    <main className="main">
      <img src={promo} alt="" className="img__promo" />
      <h1 className="text__promo">
        Group of parents of children and youth with developmental disabilities,
        guided by a common goal and mission to improve the quality of life of
        their children!
      </h1>

      <div className="description">
        <div className="description__wrapper">
          <h4 className="description__title">Main Goals</h4>
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
          <h4 className="description__title">Our activities:</h4>
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
