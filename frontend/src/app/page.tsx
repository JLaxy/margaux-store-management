import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/login"); // redirect to login
}
