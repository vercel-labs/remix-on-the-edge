import { motion } from "framer-motion";
import { Link, useMatches } from "@remix-run/react";

const SECTION_DATA = [
  { label: "Edge SSR (streaming)", href: "/" },
  { label: "Edge SSR", href: "/edge" },
  { label: "Node.js SSR (streaming)", href: "/node-streaming" },
  { label: "Node.js SSR", href: "/node" },
];

export default function NavigationSwitcher() {
  const matches = useMatches();
  const { id } = matches[matches.length - 1];
  const route = id.replace("routes", "");

  return (
    <nav>
      <div className="nav-root">
        <div aria-hidden className="nav-stroke" />
        <div className="nav-switcher">
          {SECTION_DATA.map((section, i) => {
            const isActive =
              section.href === (route === "/index" ? "/" : route);
            return (
              <Link
                to={section.href}
                className={"nav-link" + (isActive ? " active" : "")}
                key={section.label}
              >
                {section.label}

                {isActive ? (
                  <>
                    <motion.div
                      layout
                      aria-hidden
                      className="nav-glow"
                      layoutId="glow"
                      transition={{
                        delay: 0.03,
                        type: "spring",
                        stiffness: 125,
                        damping: 20,
                        mass: 1,
                      }}
                    />
                    <motion.div
                      layout
                      initial={false}
                      animate={{
                        borderTopLeftRadius: i === 0 ? 100 : 4,
                        borderTopRightRadius:
                          i === SECTION_DATA.length - 1 ? 100 : 4,
                        borderBottomLeftRadius: i === 0 ? 100 : 4,
                        borderBottomRightRadius:
                          i === SECTION_DATA.length - 1 ? 100 : 4,
                      }}
                      aria-hidden
                      className="nav-pill"
                      layoutId="pill"
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                        mass: 1,
                      }}
                    />
                  </>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
