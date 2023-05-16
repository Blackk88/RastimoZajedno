import Image from "next/image";
import { Locale, i18n } from "@/i18n-config";

import teamPhoto1 from "@/assets/team/1.png";
import teamPhoto2 from "@/assets/team/2.png";
import teamPhoto3 from "@/assets/team/3.png";
import teamPhoto4 from "@/assets/team/4.png";
import teamPhoto5 from "@/assets/team/5.png";
import teamPhoto6 from "@/assets/team/6.png";
import teamPhoto7 from "@/assets/team/7.png";
import teamPhoto8 from "@/assets/team/8.png";

import { getDictionary } from "@/get-dictionary";

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function Team({ params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="my-5">
      <section className="px-3">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto2}
              alt="Marina Kljajević photo"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member1.title}
              </span>{" "}
              {dictionary.ourTeam.member1.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row mt-5">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto3}
              alt="Tamara Kljajević"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0 align-middle">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member3.title}
              </span>{" "}
              {dictionary.ourTeam.member3.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex row">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto7}
              alt="Slavica Ivanović photo"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member7.title}
              </span>{" "}
              {dictionary.ourTeam.member7.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto8}
              alt="Radica Karadžić photo"
              className="rounded w-100 shadow"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member8.title}
              </span>{" "}
              {dictionary.ourTeam.member8.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex row">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto5}
              alt="Branka Jovanović photo"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member5.title}
              </span>{" "}
              {dictionary.ourTeam.member5.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row mt-5">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto6}
              alt="Milena Nikolić photo"
              className="rounded w-100 shadow"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member6.title}
              </span>{" "}
              {dictionary.ourTeam.member6.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex row">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto1}
              alt="Dunja Pajović photo"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member2.title}
              </span>{" "}
              {dictionary.ourTeam.member2.description}
            </p>
          </div>
        </div>

        <hr className="my-5" />

        <div className="d-flex flex-row-reverse row mt-5">
          <div className="col-12 col-lg-6">
            <Image
              src={teamPhoto4}
              alt="Miloš Kuzmanović photo"
              className="rounded w-100 shadow border"
              width={600}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="fs-5 mt-4 mt-lg-0">
              <span className="fs-4 fw-bold">
                {dictionary.ourTeam.member4.title}
              </span>{" "}
              {dictionary.ourTeam.member4.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
