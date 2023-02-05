import { Link } from "@remix-run/react";

export default function () {
  return (
    <>
      <ul>
        <li>
          <Link to="/edge">Edge SSR</Link>
        </li>
        <li>
          <Link to="/edge-stream">Edge SSR (streaming)</Link>
        </li>
        <li>
          <Link to="/node">Node.js SSR</Link>
        </li>
      </ul>
    </>
  );
}
