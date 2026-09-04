import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Featured Project",
    title: "Solar Power Project",
    description:
      "A complete solar energy solution designed to deliver reliable and sustainable power for long-term performance.",
    tag: "5kW",
    image: "/projects/solar-power-project.jpeg",
    featured: true,
  },
  {
    number: "02",
    category: "Commercial",
    title: "Business Solar Solution",
    description:
      "Helping businesses move towards cleaner, smarter and more efficient energy.",
    tag: "Commercial",
    image: "/projects/business-solar-solution.jpeg",
    featured: false,
  },
  {
    number: "03",
    category: "Residential",
    title: "Rooftop Solar",
    description:
      "Efficient rooftop solar designed to turn available space into clean energy.",
    tag: "Rooftop",
    image: "/projects/rooftop-solar.jpeg",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f1] text-neutral-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 px-6 pb-24 pt-32 text-white md:px-10 md:pb-32 md:pt-40 lg:px-12">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[8%] top-[20%] h-[420px] w-[420px] rounded-full bg-orange-400/15 blur-[100px]" />
          <div className="absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-orange-400/10" />
          <div className="absolute -right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-orange-400/[0.06]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Back */}
          <Link
            href="/"
            className="group mb-14 inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-orange-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>

          {/* Label */}
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
            <span className="h-px w-8 bg-orange-400" />
            Our Projects
          </p>

          {/* Heading */}
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[88px]">
            Solar in action.
            <br />
            <span className="text-white/30">Impact you can see.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
            Explore the solar solutions delivered by Dahaman Energy across
            residential and commercial applications.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Section intro */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
                Project Portfolio
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">
                Built for real energy needs.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500 md:text-base">
              From rooftop installations to commercial solar solutions, every
              project is designed around the energy requirements of the client.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`group relative overflow-hidden rounded-[28px] bg-neutral-900 ${
                  project.featured
                    ? "min-h-[500px] md:col-span-2 md:min-h-[560px]"
                    : "min-h-[400px]"
                }`}
              >
                {/* IMAGE */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={project.featured}
                  sizes={
                    project.featured
                      ? "(max-width: 768px) 100vw, 1200px"
                      : "(max-width: 768px) 100vw, 600px"
                  }
                  quality={82}
                  className="object-cover transition-transform duration-500 md:group-hover:scale-[1.025]"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                {/* Number */}
                <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-xs text-white/45 backdrop-blur-sm">
                  {project.number}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
                        {project.category}
                      </p>

                      <h2
                        className={`mt-3 font-medium tracking-tight text-white ${
                          project.featured
                            ? "text-4xl md:text-5xl"
                            : "text-3xl md:text-4xl"
                        }`}
                      >
                        {project.title}
                      </h2>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/45 backdrop-blur-sm">
                        {project.tag}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg text-black transition-all duration-300 md:group-hover:bg-orange-400">
                        ↗
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-16 border-t border-black/10 pt-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Go Solar
                </p>

                <p className="mt-2 text-lg font-medium text-neutral-950">
                  Ready to build your solar future?
                </p>
              </div>

              <Link
                href="/#quote"
                className="group flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 hover:text-black"
              >
                Get a Free Quote

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="bg-neutral-950 px-6 py-10 text-white md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/35 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Dahaman Energy. All rights reserved.
          </p>

          <Link
            href="/"
            className="transition-colors hover:text-orange-400"
          >
            Dahaman Energy ↗
          </Link>
        </div>
      </section>
    </main>
  );
}