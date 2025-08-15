import Image from "next/image";
import React from "react";
import Hoko from "@/public/hoko_logo.webp";
import HokoText from "@/public/hoko_text.webp";

function HokoLogo() {
  return (
    <div className="flex flex-row items-center">
      <div className="relative w-[15vw] aspect-square">
        <Image
          src={Hoko}
          alt="hoko-logo"
          fill
          style={{ objectFit: "contain" }}
          sizes="15vw"
        />
      </div>

      <Image
        src={HokoText}
        alt={`hoko-logo`}
        height={200}
        width={1000}
        style={{
          height: "7vw",
          width: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default HokoLogo;
