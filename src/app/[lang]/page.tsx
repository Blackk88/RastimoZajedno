export default function Home({
  params,
}: {
  params: { lang: string; country: string };
}) {
  return <h1>{JSON.stringify(params)}</h1>;
}
