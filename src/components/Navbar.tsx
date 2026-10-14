"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPinned,
  Home,
  Info,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Map", href: "/map", icon: MapPinned },
  { name: "About", href: "/about", icon: Info },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 sm:gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm sm:h-11 sm:w-11">
              <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>

            <div>
              <h1 className="text-sm font-black tracking-tight text-slate-900 sm:text-lg">
                DengueWatch
              </h1>
              <p className="text-[10px] font-bold text-teal-700 sm:text-xs">
                Bangladesh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <Icon size={16} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions (Login/Register) */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <LogIn size={16} />
              Login
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
            >
              <UserPlus size={16} />
              <span>Register</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Login Icon & Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <Link
              href="/login"
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
              title="Login"
            >
              <LogIn size={20} />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu (Top Header Toggle) */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 shadow-md sm:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 border-t border-slate-100 pt-3">
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 py-2.5 text-center text-sm font-bold text-white shadow-sm"
              >
                <UserPlus size={18} />
                Register Account
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white/95 py-2 backdrop-blur sm:hidden">
        {navLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 text-[11px] font-semibold text-slate-600 transition hover:text-teal-600"
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </Link>
          );
        })}
        <Link
          href="/register"
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-teal-600"
        >
          <UserPlus size={19} />
          <span>Register</span>
        </Link>
      </div>
    </>
  );
}
