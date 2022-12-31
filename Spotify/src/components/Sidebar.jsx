import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes/sidebar";
import "../../src/style.css";
import * as Icons from "../icons";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function Sidebar() {
  return (
    <>
      <aside className="bg-black Root__nav-bar">
        <div className="overflow-y-auto py-4  text-white">
          <div className="space-y-2">
            <h1 className="p-5 text-3xl">TuneFlow</h1>
          </div>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li className="p-3">
                <Link
                  key={route.name}
                  to={route.path}
                  className="flex items-center p-2 text-base font-normal text-white rounded-lg"
                >
                  <Icon
                    className="w-6 h-5"
                    aria-hidden="true"
                    icon={route.icon}
                  />

                  <span className="ml-3">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
