"use client";
import Link from "next/link";
import { Home, ArrowLeft, ShieldCheck } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <section className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-teal-100">
            <ShieldCheck
              size={76}
              strokeWidth={1.5}
              className="text-teal-700"
            />
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-700">
            Error 404
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or no longer exists.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <Home size={19} />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <ArrowLeft size={19} />
              Go Back
            </button>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Together, we can build a dengue-aware Bangladesh.
          </p>
        </div>
      </section>
    </main>
  );
}
