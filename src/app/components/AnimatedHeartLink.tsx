"use client";

import Image from "next/image";
import heart from "@/assets/heart.png";
import Link from "next/link";

interface Props {
  dictionary: {
    title: string;
    local: string;
    international: string;
    clickHere: string;
  };
}

export default function AnimatedHeartLink({ dictionary }: Props) {
  return (
    <div className="my-5 text-center">
      <h2 className="text-center my-4 fw-bold">{dictionary.title}</h2>
      <Link target="_blank" href="https://mel.store/rastimozajedno">
        <Image
          src={heart}
          alt="Picture of big red heart on yellow background"
          className="heart-image cursor-pointer"
          width={300}
          height={250}
        />
      </Link>
    </div>
  );
}
