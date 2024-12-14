"use client";

import { Input } from "@/components/ui/input";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";

type InputUser = {
  input: number | null;
};

function page() {
  const [inputUser, setInputUser] = useState<InputUser>({ input: null });
  const [isLeapYear, setIsLeapYear] = useState<boolean | null>(null);

  const cekLeap = () => {
    if (inputUser.input === null) return null;

    const year = inputUser.input;
    if (inputUser.input <= 0) {
      alert("Tahun tidak valid");
    } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      setIsLeapYear(true);
    } else {
      setIsLeapYear(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUser({ input: parseInt(e.target.value) || null });
    setIsLeapYear(null);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-4 px-5">
      <h2 className="text-3xl text-center font-bold">Leap Year 📅</h2>
      <p>Determining a leap year for campus Midterm exam</p>
      <div className="mt-2 justify-center items-center flex">
        <div className="justify-center items-center flex gap-3 max-w-lg">
          <Input
            value={inputUser.input || ""}
            type="number"
            onChange={handleInputChange}
            className="border border-black p-2 max-w-lg"
          />
          <button
            onClick={cekLeap}
            className="bg-gray-200 text-gray-600 px-3 py-2 font-bold rounded-md"
          >
            Check
          </button>
        </div>
      </div>

      {inputUser.input !== null && isLeapYear !== null ? (
        isLeapYear ? (
          <div className="mt-12 max-w-xl">
            <h2 className="text-2xl font-bold">
              {inputUser.input} adalah Tahun kabisat
            </h2>
            <p>
              Tahun kabisat adalah tahun yang memiliki 366 hari, bukan 365 hari
              seperti tahun biasa. Hal ini disebabkan oleh tambahan satu hari
              pada bulan Februari (29 Februari) untuk menyesuaikan dengan
              perhitungan orbit bumi mengelilingi matahari yang memerlukan
              sekitar 365,25 hari.
            </p>
          </div>
        ) : (
          <div className="mt-12 max-w-xl">
            <h2 className="text-2xl font-bold">
              {inputUser.input} Bukanlah Tahun kabisat
            </h2>
            <p>
              Tahun biasa hanya memiliki 365 hari, dengan Februari yang memiliki
              28 hari. Tahun biasa terjadi jika tahun tersebut tidak dapat
              dibagi dengan 4 atau dapat dibagi 100 tetapi tidak dapat dibagi
              400.
            </p>
          </div>
        )
      ) : null}
    </div>
  );
}

export default page;
