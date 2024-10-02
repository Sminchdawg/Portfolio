"use client";

import { Dino } from "react-dino-game";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function DinoPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input field when the page is rendered, this is for mobile devices to work with the game
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className="flex items-center text-3xl text-background mb-5 gap-5">
        <Link href="/" className="flex">
          <ArrowBackIcon />
        </Link>
        <h2>Hidden Dino Game Page Discovered!</h2>
      </div>
      <div className="bg-background max-sm:[&_.game]:w-[350px] max-md:[&_.game]:w-[450px] [&_.game]:max-w-[600px]">
        <Dino />
        <input
          ref={inputRef}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
          type="text"
        />
      </div>
    </div>
  );
}
