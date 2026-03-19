import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Server Action + cacheComponents repro</h1>
      <Link href="/item/123">Go to dynamic route</Link>
    </div>
  );
}
