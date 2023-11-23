import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-around mt-3">
      <Link
        href="/login"
        className="px-4 py-2 rounded-md bg-slate-900 text-white"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="px-4 py-2 rounded-md bg-slate-900 text-white"
      >
        Register
      </Link>
      <Link
        href="/crew-register"
        className="px-4 py-2 rounded-md bg-slate-900 text-white"
      >
        Crew register
      </Link>
    </div>
  );
}
