import Link from "next/link";

interface Props {
  params: {
    lang: string;
  };
}

export default function Page({ params: { lang } }: Props) {
  return (
    <>
      <h1>Hi from second page!</h1>
      <Link href={`/${lang}`}>back</Link>
    </>
  );
}
