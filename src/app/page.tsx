import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="capitalize">hello world</h1>
      <Link href="/dashboard">Login (fake)</Link>
    </div>
  );
}
