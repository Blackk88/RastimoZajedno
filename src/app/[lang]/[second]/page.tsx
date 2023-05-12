import LocaleSwitcher from "@/app/components/switcher";

export default function Home({
  params,
}: {
  params: { lang: string; second: string };
}) {
  return (
    <>
      <LocaleSwitcher />
      <h1>{JSON.stringify(params)}</h1>;
    </>
  );
}
