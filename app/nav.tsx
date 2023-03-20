import { motion } from "framer-motion";
import { Link, useMatches, NavLink } from "@remix-run/react";

const SECTION_DATA = [
  { label: "Edge SSR (streaming)", href: "/" },
  { label: "Edge SSR", href: "/edge" },
  { label: "Node.js SSR (streaming)", href: "/node-streaming" },
  { label: "Node.js SSR", href: "/node" },
];

export default function NavigationSwitcher() {
  return (
    <nav>
      <div className="nav-root">
        <div className="nav-switcher">
          {SECTION_DATA.map((section, i) => {
            return (
                <NavLink
                  to={section.href}
                  className={({ isActive, isPending }) => `nav-link ${isActive ? "active" : isPending ? "pending" : ""}`}
                  key={section.label}
                >
                  {({ isActive }) => {
                    return (
                      <>
                        {section.label}
                        {isActive ? (
                          <motion.div
                            layout
                            initial={false}
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
                        ) : null}
                      </>
                    )
                  }}
                </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
