import React from "react";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center py-4">
        <p className="text-center text-sm">
          Created by
          <a
            className="font-semibold border-b border-blue-300 ml-1"
            href="https://shirookami.my.id"
          >
            Al Farizi
          </a>{" "}
          with ☕
        </p>
      </div>
    </footer>
  );
}

export default Footer;
