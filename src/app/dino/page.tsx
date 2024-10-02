"use client";

import { Dino } from "react-dino-game";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function DinoPage() {
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
      </div>
    </div>
  );
}
