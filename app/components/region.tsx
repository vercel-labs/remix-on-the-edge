import { regions } from "~/regions";

export function Region({ region }: { region: string }) {
  const name = regions[region] || "unknown";
  return (
    <span className="region">
      <strong>{name}</strong> <span className="region-code">({region})</span>
    </span>
  );
}
