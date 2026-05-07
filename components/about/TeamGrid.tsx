type Member = {
  name: string;
  title: string;
  initials: string;
};

const members: Member[] = [
  { name: "Team Member", title: "Director", initials: "TM" },
  { name: "Team Member", title: "Lead Engineer", initials: "TM" },
  { name: "Team Member", title: "Senior Consultant", initials: "TM" },
  { name: "Team Member", title: "Product Manager", initials: "TM" },
  { name: "Team Member", title: "Senior Developer", initials: "TM" },
  { name: "Team Member", title: "Solutions Architect", initials: "TM" },
];

const palettes = [
  ["#A8FFE7", "#C7BBFF"],
  ["#C7E8FF", "#C7BBFF"],
  ["#FFB7D5", "#C7BBFF"],
  ["#FFD89B", "#A8FFE7"],
  ["#C7BBFF", "#A8FFE7"],
  ["#A8FFE7", "#FFB7D5"],
];

export function TeamGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => {
        const [a, b] = palettes[i % palettes.length];
        return (
          <li
            key={i}
            className="group rounded-2xl border border-border bg-surface p-7 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold text-heading"
              style={{
                backgroundImage: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
              }}
            >
              {m.initials}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-heading">{m.name}</h3>
            <p className="text-sm text-muted">{m.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
