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
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

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

const navigationItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "TESTIMONIAL", href: "/testimonial" },
  { name: "CONTACT", href: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between px-6 md:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  B
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight">BREAZY</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className: 'bg-transparent'
                        })}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="size-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="flex flex-col space-y-3 mt-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-2 py-1 text-lg font-medium transition-colors hover:text-foreground/80"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>
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
