import React from "react";
import { House, Moon } from "lucide-react";

function Navbar() {
  return (
    <header className="flex flex-col">
      <nav className="flex gap-5 p-5 justify-end">
        <a href="">
          <House strokeWidth={1.5} size={20} />
        </a>
        <Moon strokeWidth={1.5} size={20} />
      </nav>
    </header>
  );
}

export default Navbar;
