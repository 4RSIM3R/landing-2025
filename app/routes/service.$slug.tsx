import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

const jobOpenings = [
  {
    id: 1,
    title: "Full-time designer",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
  },
  {
    id: 2,
    title: "Laravel developer",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
  },
  {
    id: 3,
    title: "React Native developer",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
  },
];

export default function ServiceDetail() {
  return (
    <div className="bg-white my-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Were always looking for awesome people to join us
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              className="mt-16 aspect-6/5 w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-138"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="flex flex-wrap gap-x-3">
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {opening.title}
                      <span aria-hidden="true" className="absolute inset-0" />
                    </dd>
                    <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">
                      {opening.description}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Button className="w-full">
                LETS TALK <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
