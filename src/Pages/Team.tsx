import teamPhoto1 from '../assets/team/1.png'
import teamPhoto2 from '../assets/team/2.png'
import teamPhoto3 from '../assets/team/3.png'
import teamPhoto4 from '../assets/team/4.png'
import teamPhoto5 from '../assets/team/5.png'

function Team() {
  return (
    <main className="my-5">
      <section className="px-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={teamPhoto1}
              alt="Dunja Pajović photo"
              className="rounded team-image w-100 w-md-50"
              width="200"
              height="500"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">Dunja Pajović</span> diplomirani
              sociolog i magistar Inkluzivnog obrazovanja sa licencom za
              obavljanje osnovnih stručnih poslova u socijalnoj i dječijoj
              zaštiti; dodatna edukacija: "Tretman problema u ponašanju kod
              djece i mladih". Članica je Udruženja "Rastimo zajedno" i učesnica
              mnogobrojnih projekata i realizatorka istraživanja. "Udruženje
              "Rastimo zajedno" dugi niz godina učestvuje u stvaranju povoljnih
              uslova za veću inkluzivnost djece i mladih sa invaliditetom, i
              realizuje one aktivnosti koje su od interesa kako za ovu ranjivu
              populaciju, tako i za širu socijalnu sredinu".
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row mt-5">
          <div className="col-12 col-lg-6">
            <img
              src={teamPhoto2}
              alt="Dunja Pajović photo"
              className="rounded team-image w-100 w-md-50"
              width="200"
              height="500"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                Marina Kljajević - Direktorica NVO “Rastimo zajedno.
              </span>{' '}
              Završena Viša ekonomska škola u Podgorici, dugogodišnji radnik u
              finansijama. Ulogu predsjednice udruženja dobija 2017. godine, dok
              na mjesto direktorice stupa 2023. godine. Za vrijeme njenog
              mandata organizacija je dobila nagradu “Deveti decembar” od
              opštine Danilovgrad, kao i licencu za obavljanje djelatnosti
              socijalne i dječije zaštite od Ministarstva rada i socijalnog
              staranja. Koordinator je na brojnim uspješno realizovanim
              projektima koje je NVO “Rastimo zajedno” sprovodio kod raznih
              ministarstva u raznim oblastima (inkluzija, sport, kultura,
              zapošljavanje OSI…).
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex row">
          <div className="col-12 col-lg-6">
            <img
              src={teamPhoto3}
              alt="Tamara Kljajević"
              className="rounded team-image w-100 w-md-50"
              width="200"
              height="500"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0 align-middle">
              <span className="fs-4 fw-bold">Tamara Kljajević.</span>{' '}
              Specijalista crnogorskog jezika i južnoslovenske književnosti
              (Univerzitet Crne Gore, Filološki fakultet, Nikšić). Posjeduje
              višegodišnje iskustvo iskustvo u praćenju realizacije projekata
              koji imaju za cilj smanjenje raznih oblika diskriminacije sa kojim
              se suočavaju djeca i mladi sa smetnjama i teškoćama u razvoju.
              Učestvovala je na seminaru “Pisanje projekata i obezbjeđivanje
              sredstava kod domaćih i međunarodnih donatora”. Do sada je
              uspješno napisala preko 20 projekata koji se realizuju u NVO
              “Rastimo zajedno”. Marketing na društvenim mrežama.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row">
          <div className="col-12 col-lg-6">
            <img
              src={teamPhoto4}
              alt="Miloš Kuzmanović photo"
              className="rounded team-image w-100 w-md-50"
              width="200"
              height="500"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">Miloš Kuzmanović</span>{' '}
              Specijalista primijenjenjene fizioterapije,magistrant
              fizioterapije. Licenciran od strane Komore fizioterapeuta Stručni
              saradnik udruzenja ,,Rastimo zajedno" i učesnik u mnogobrojnim
              projektima u radu s osobama sa invaliditetom. Udruženje "Rastimo
              zajedno" je prva organizacija u našoj zajednici koja za cilj ima
              rehabilitaciju djece i mladih sa invaliditetom. Uz timsku saradnju
              i entuzijazam, zajednički unapređujemo položaj OSI.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex row">
          <div className="col-12 col-lg-6">
            <img
              src={teamPhoto5}
              alt="Branka Jovanović photo"
              className="rounded team-image w-100 w-md-50"
              width="200"
              height="500"
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">Branka Jovanović</span> Diplomirani
              psiholog, sa licencom za obavljanje osnovnih stručnih poslova u
              socijalnoj i dječjoj zaštiti.Angažovana na projektima NVO "Rastimo
              zajedno". U udruženju se njeguju
              inkluzija,razumijevanje,empatija,dogovor,sloboda odlučivanja
              ,potpuna ravnopravnost među svim članovima. Imati jak tim ljudi
              ,koji s posvećenošću obavljaju svoj posao je najveća snaga
              udruženja.Kao takvo,NVO" Rastimo zajedno" ima snažnu viziju - ici
              korak naprijed u inovacijama ,kroz projekte u oblasti prava djece
              i mladih sa smetnjama u razvoju,u cilju osnaživanja OSI
              ,podsticanja njihovih mogućnosti,većeg nivoa samostalnosti i
              učešća u društvenoj zajednici.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Team
