import Profile, { Person } from "./Profile";

import jaanusAvatar from "./assets/jaanus.jpeg";
import pannaAvatar from "./assets/panna.jpeg";

const people: Person[] = [
  {
    name: "Jaanus Varus",
    role: "Founder | Back-end Developer",
    imageUrl: jaanusAvatar,
    links: [
      { name: "GitHub", href: "https://github.com/discosultan" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/jvarus" },
      { name: "X", href: "https://x.com/discosultan" },
      { name: "Gmail", href: "mailto:jaanusvarus@gmail.com" },
    ],
  },
  {
    name: "Panna Chow",
    role: "Designer | Front-end Developer",
    imageUrl: pannaAvatar,
    links: [
      { name: "GitHub", href: "https://github.com/pannachow" },
      { name: "X", href: "https://x.com/cotta_candy" },
      { name: "Gmail", href: "mailto:chowpanna@gmail.com" },
    ],
  },
];

export default function Team() {
  return (
    <section className="relative rounded-t-2xl bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-24 xl:py-28 2xl:px-28 2xl:py-32 dark:bg-slate-900">
      <div className="absolute left-0 top-0 h-1/2 w-full rounded-t-2xl border-x-[1px] border-t-[1px] dark:border-slate-800"></div>
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Meet the team
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-gray-400">
            We&apos;re a dynamic duo who are passionate about what we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8"
        >
          {people.map((person) => (
            <Profile key={person.name} person={person} />
          ))}
        </ul>
      </div>
    </section>
  );
}
