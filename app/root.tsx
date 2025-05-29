import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav>Navbar Here</nav>
        {children}
        <footer className="w-full bg-primary text-white">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 border border-white border-opacity-20 p-6 md:p-8">
              <span className="text-base">Company</span>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Works
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 border border-white border-opacity-20 p-6 md:p-8">
              <span className="text-base">Services</span>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    AI & Automation
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    IT Maintanance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 border border-white border-opacity-20 p-6 md:p-8">
              <span className="text-base">Resources</span>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3 border border-white border-opacity-20 p-6 md:p-8">
              <span className="text-base">Follow Us</span>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:underline" to="/">
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p>
                Copyright © Nexteam Teknologi Indonesia. All right reserved.
              </p>
            </div>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
