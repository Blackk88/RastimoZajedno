import { getDictionary } from "@/get-dictionary";
import { Locale, i18n } from "@/i18n-config";
import Image from "next/image";
import img1 from "@/assets/news/november/nov1.jpeg";
import img2 from "@/assets/news/november/nov2.jpeg";
import img3 from "@/assets/news/november/nov3.jpeg";
import img4 from "@/assets/news/november/nov4.jpeg";
import img5 from "@/assets/news/november/nov5.jpeg";

interface Props {
  params: {
    lang: Locale;
  };
}

export default async function News({ params }: Props) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="rounded-4 shadow fs-6 p-4 m-2 pb-0">
      <p>{dictionary.news.november.firstParagraph}</p>
      <p>{dictionary.news.november.secondParagraph}</p>
      <p>{dictionary.news.november.thirdParagraph}</p>
      <p>{dictionary.news.november.forthParagraph}</p>
      <p>{dictionary.news.november.fifthParagraph}</p>

      <div className="d-flex flex-wrap justify-content-center gap-2">
        <Image
          src={img2}
          alt=""
          width={400}
          height={400}
          style={{ height: "300px" }}
          className="img-fluid rounded shadow object-fit-cover"
        />
        <Image
          src={img1}
          alt=""
          width={400}
          height={400}
          style={{ height: "300px" }}
          className="img-fluid rounded shadow object-fit-cover "
        />
        <Image
          src={img3}
          alt=""
          width={400}
          style={{ height: "300px" }}
          height={400}
          className="img-fluid rounded shadow object-fit-cover"
        />
        <Image
          src={img4}
          alt=""
          width={400}
          style={{ height: "300px" }}
          height={400}
          className="img-fluid rounded shadow object-fit-cover"
        />
        <Image
          src={img5}
          style={{ height: "300px" }}
          alt=""
          width={400}
          height={400}
          className="img-fluid rounded shadow object-fit-cover"
        />
      </div>
      <p className="fs-6 text-muted small mt-4">November 12</p>
    </div>
  );
}

export function generateStaticParams() {
  const localeParams = i18n.locales.map((locale) => ({ lang: locale }));

  return localeParams;
}
