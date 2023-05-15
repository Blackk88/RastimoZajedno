import { redirect } from "next/navigation";
export default function page() {
  redirect("/sr");

  return <div>page</div>;
}
