export default function WorksDetail() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">Introducing</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          JavaScript for beginners
        </h1>
        <figure className="mt-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
        </figure>
        <p className="mt-6 text-xl/8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
          Eleifend egestas fringilla sapien.
        </p>
        <figure className="border-l border-indigo-600 pl-8 mt-8">
          <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
            <p>
              “Vel ultricies morbi odio facilisi ultrices accumsan donec lacus
              purus. Lectus nibh ullamcorper ac dictum justo in euismod. Risus
              aenean ut elit massa. In amet aliquet eget cras. Sem volutpat enim
              tristique.”
            </p>
          </blockquote>
          <figcaption className="mt-8 flex gap-x-4">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mt-1 size-10 flex-none rounded-full bg-gray-50"
            />
            <div className="text-sm/6">
              <div className="font-semibold text-gray-900">Brenna Goyette</div>
              <div className="text-gray-600">@brenna</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
