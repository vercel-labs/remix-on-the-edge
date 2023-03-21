import { motion } from "framer-motion";
import { NavLink, useLocation } from "@remix-run/react";

const SECTION_DATA = [
  { label: "Edge (streaming)", href: "/", x: '100%' },
  { label: "Edge", href: "/edge", x: '62%' },
  { label: "Node.js (streaming)", href: "/node-streaming", x: '38%' },
  { label: "Node.js", href: "/node", x: '10%' },
];

export default function NavigationSwitcher() {
  const { pathname } = useLocation();
  const activeSection = SECTION_DATA.find(section => section.href === pathname);

  const buttons = SECTION_DATA.map((section) => {
    return (
      <NavLink
        to={section.href}
        className={({ isActive, isPending }) =>
          `nav-link ${isActive ? "active" : isPending ? "pending" : ""}`
        }
        key={section.label}
      >
        {({ isActive }) => {
          return (
            <>
              {section.label}
              {isActive ? (
                <>
                  <motion.div
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
            </>
          );
        }}
      </NavLink>
    );
  });
  return (
    <nav>
      <div
        className="nav-root"
        style={
          activeSection
            ? {
                ["--x" as string]: activeSection.x,
              }
            : undefined
        }
      >
        <div aria-hidden className="nav-stroke" />
        <div className="nav-switcher">{buttons}</div>
      </div>
    </nav>
  );
}
