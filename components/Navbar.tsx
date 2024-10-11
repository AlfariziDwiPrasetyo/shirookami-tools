"use client";

import React from "react";
import { House, Moon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <header className="flex flex-col">
      <nav className="flex gap-2 p-5 justify-end">
        <a href="/">
          <Button variant={"outline"}>
            <House strokeWidth={1.5} size={20} />
          </Button>
        </a>
        <Button
          variant={"outline"}
          onClick={() =>
            toast.warning("Work in progress", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          }
        >
          <Moon strokeWidth={1.5} size={20} />
          <ToastContainer />
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
