import { redirect } from "next/navigation";
export default function page() {
  redirect("/en");

  return <div>page</div>;
}
