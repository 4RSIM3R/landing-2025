/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <div
        id="hero"
        className="container p-6 md:p-8 grid grid-cols-12 gap-4 md:h-[calc(100vh-4rem)]"
      >
        <div className="col-span-12 md:col-span-6 flex flex-col items-start justify-start">
          <h1 className="text-5xl md:text-6xl font-semibold md:leading-tight">
            DIGITAL AGENCY FOR DIGITAL EXPERIENCE
          </h1>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col items-end justify-end">
          <span className="w-full md:max-w-96 mb-4 md:mb-12">
            WE CRAFT SLEEK WEBSITES THAT ARE CUSTOM, FAST, AND SMART, TURN IDEAS
            INTO IMPACT
          </span>
          <Button className="w-full md:w-96">
            LETS TALK <ArrowRight />
          </Button>
        </div>
      </div>
      <div
        id="about"
        className="container bg-accent p-6 md:p-8 grid grid-cols-12 gap-4"
      >
        <div className="col-span-12">
          <h1 className="text-3xl md:text-5xl md:leading-snug">
            WE'RE TEAM OF EXPERTS AND STRATEGIST BUILDING BOLD BRAND AND DIGITAL
            EXPERIENCES FROM STARTUP TO LEADERS -{" "}
            <span className="font-medium underline">
              YOUR SUCCESS IS OUR MISSION
            </span>
          </h1>
        </div>
        <div className="col-span-12 md:col-span-2 bg-primary p-6 md:p-8 text-white gap-1.5 flex flex-col">
          <h1 className="text-4xl font-medium">5+</h1>
          <span>YEARS</span>
        </div>
        <div className="col-span-12 md:col-span-2 bg-primary p-6 md:p-8 text-white gap-1.5 flex flex-col">
          <h1 className="text-4xl font-medium">15+</h1>
          <span>CLIENTS</span>
        </div>
        <div className="col-span-12 md:col-span-2 bg-primary p-6 md:p-8 text-white gap-1.5 flex flex-col">
          <h1 className="text-4xl font-medium">4</h1>
          <span>COUNTRY</span>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-start justify-end">
          <Button className="w-full md:w-fit">
            LETS TALK <ArrowRight />
          </Button>
        </div>
      </div>
      <div
        id="services"
        className="container bg-primary p-6 md:p-8 grid grid-cols-12 gap-4 text-white"
      >
        <div className="col-span-12">
          <h1 className="text-3xl md:text-5xl font-medium">OUR SERVICES</h1>
        </div>
        <Link
          to="/"
          className="col-span-12 flex justify-between items-center py-4 hover:bg-accent/25 transition-colors mt-8"
        >
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white">
              (01)
            </Button>
            <span>DIGITAL ADVERTISING</span>
          </div>
          <Button variant="link" className="text-white">
            <ArrowRight />
          </Button>
        </Link>
        <Link
          to="/"
          className="col-span-12 flex justify-between items-center py-4 hover:bg-accent/25 transition-colors"
        >
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white">
              (01)
            </Button>
            <span>DIGITAL ADVERTISING</span>
          </div>
          <Button variant="link" className="text-white">
            <ArrowRight />
          </Button>
        </Link>
        <Link
          to="/"
          className="col-span-12 flex justify-between items-center py-4 hover:bg-accent/25 transition-colors"
        >
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white">
              (01)
            </Button>
            <span>DIGITAL ADVERTISING</span>
          </div>
          <Button variant="link" className="text-white">
            <ArrowRight />
          </Button>
        </Link>
        <Link
          to="/"
          className="col-span-12 flex justify-between items-center py-4 hover:bg-accent/25 transition-colors"
        >
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white">
              (01)
            </Button>
            <span>DIGITAL ADVERTISING</span>
          </div>
          <Button variant="link" className="text-white">
            <ArrowRight />
          </Button>
        </Link>
        <Link
          to="/"
          className="col-span-12 flex justify-between items-center py-4 hover:bg-accent/25 transition-colors"
        >
          <div className="flex gap-2 items-center">
            <Button variant="link" className="text-white">
              (01)
            </Button>
            <span>DIGITAL ADVERTISING</span>
          </div>
          <Button variant="link" className="text-white">
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <div
        id="projects"
        className="container p-6 md:p-8 grid grid-cols-12 gap-4"
      >
        <div className="col-span-12 md:col-span-4">
          <h1 className="text-3xl md:text-5xl">LATEST PROJECTS</h1>
        </div>
        <div
          className="col-span-12 md:col-span-4 relative h-72 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*04F1yf-obnxkUumN')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <div className="p-4 h-full flex items-end justify-end">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                This text appears on hover with a smooth transition effect
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-4 relative h-72 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*04F1yf-obnxkUumN')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <div className="p-4 h-full flex items-end justify-end">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                This text appears on hover with a smooth transition effect
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-4 relative h-72 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*04F1yf-obnxkUumN')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <div className="p-4 h-full flex items-end justify-end">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                This text appears on hover with a smooth transition effect
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-4 relative h-72 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*04F1yf-obnxkUumN')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <div className="p-4 h-full flex items-end justify-end">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                This text appears on hover with a smooth transition effect
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-4 relative h-72 bg-cover bg-center rounded-sm overflow-hidden group cursor-pointer"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*04F1yf-obnxkUumN')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
            <div className="p-4 h-full flex items-end justify-end">
              <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                This text appears on hover with a smooth transition effect
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="testimonial"
        className="container p-6 md:p-8 grid grid-cols-12 gap-4 bg-primary text-white"
      >
        <div className="col-span-12">
          <h1 className="text-3xl md:text-5xl">WHAT OUR CLIENT SAYS</h1>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20 md:mt-8">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg"
            className="h-12 self-start"
          />
          <figure className="mt-4 flex flex-auto flex-col justify-between">
            <blockquote className="text-base text-white">
              <p>
                I've been working with them since 2023, and despite being a
                young team, they've consistently shown professionalism and
                strong results. Their Flutter and frontend web development
                helped us launch smoothly and on time. A dependable partner with
                great potential.
              </p>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-x-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-14 rounded-full bg-gray-800"
              />
              <div className="text-base">
                <div className="font-semibold text-white">Arya Pradana S.Kom, M.B.A.</div>
                <div className="mt-1 text-gray-400">CEO of Elux Space</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20 md:mt-8">
          <img
            alt=""
            src="https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg"
            className="h-12 self-start"
          />
          <figure className="mt-4 flex flex-auto flex-col justify-between">
            <blockquote className="text-base text-white">
              <p>
                “Amet amet eget scelerisque tellus sit neque faucibus non
                eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
                erat et cursus tortor consequat at. Vulputate gravida sociis
                enim nullam ultricies habitant malesuada lorem ac. Tincidunt
                urna dui pellentesque sagittis.”
              </p>
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-x-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-14 rounded-full bg-gray-800"
              />
              <div className="text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Tuple</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div
        id="contact"
        className="container p-6 md:p-8 grid grid-cols-12 gap-4 content-end items-end justify-end"
      >
        <div className="col-span-12 md:col-span-2">
          <h1 className="text-2xl font-medium">(30 MIN)</h1>
        </div>
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-5xl font-medium">TALK WITH US</h1>
        </div>
        <div className="col-span-12 md:col-span-2">
          <Button className="w-full">
            LETS TALK <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
