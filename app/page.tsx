import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-around mt-3">
      <button className="px-4 py-2 rounded-md bg-slate-900 text-white">
        <Link href="/login">Login</Link>
      </button>
      <button className="px-4 py-2 rounded-md bg-slate-900 text-white">
        <Link href="/register">Register</Link>
      </button>
      <button className="px-4 py-2 rounded-md bg-slate-900 text-white">
        <Link href="/crew-register">Crew register</Link>
      </button>
    </div>
  );
}
