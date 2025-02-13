"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Account",
    path: "/account",
  },
];

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center border-b border-white/10 py-4">
      <Link href="/dashboard">
        <Image
          src="https://placehold.co/50"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-full object-cover"
          unoptimized={true}
        />
      </Link>

      <nav className="ml-auto">
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`px-2 py-1 hover:text-white transition text-white/100 rounded-sm ${route.path === pathname ? "bg-black/10" : ""
                  }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* TODO: Upgrade the logout button using auth library logout button */}
      <Link href="/" className="px-2 py-1 ml-8 bg-red-400 hover:text-white text-xs transition text-white/100 rounded-sm">
        Logout
      </Link>
    </header>
  )
}

export default AppHeader
