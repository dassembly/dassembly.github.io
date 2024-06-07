import Icon, { IconProps } from "./Icon";

export type Person = {
  name: string;
  role: string;
  imageUrl: string;
  links: IconProps[];
};

export default function Profile({ person }: { person: Person }) {
  return (
    <li className="m-1 rounded-2xl bg-slate-50 px-8 py-10 ring-1 ring-slate-900/5 dark:bg-gray-800 dark:shadow-highlight-white/5 dark:ring-0">
      <img
        className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
        src={person.imageUrl}
        alt="Avatar"
      />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-slate-900 dark:text-white">
        {person.name}
      </h3>
      <p className="text-sm leading-6 text-slate-700 dark:text-gray-400">
        {person.role}
      </p>
      <ul role="list" className="mt-6 flex justify-center gap-x-6">
        {person.links.map(({ name, href }) => (
          <Icon key={name} name={name} href={href} />
        ))}
      </ul>
    </li>
  );
}
